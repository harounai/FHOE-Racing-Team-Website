import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

// Configuration - Easy to update team email in one place
const TEAM_EMAIL = "formula.student@fh-ooe.at";
const EMAIL_SUBJECT = "New Contact Form Submission – Formula Student Team";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface ContactFormRequest {
  name: string;
  email: string;
  message: string;
  honeypot?: string; // Spam protection
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, message, honeypot }: ContactFormRequest = await req.json();

    // Spam protection - if honeypot field is filled, silently reject
    if (honeypot) {
      console.log("Spam submission detected via honeypot");
      return new Response(
        JSON.stringify({ success: true }), // Fake success to fool bots
        { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Validate required fields
    if (!name || !email || !message) {
      console.log("Missing required fields:", { name: !!name, email: !!email, message: !!message });
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log("Invalid email format:", email);
      return new Response(
        JSON.stringify({ error: "Invalid email format" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Sanitize inputs
    const sanitizedName = name.trim().slice(0, 100);
    const sanitizedEmail = email.trim().slice(0, 255);
    const sanitizedMessage = message.trim().slice(0, 5000);

    const timestamp = new Date().toLocaleString("de-AT", {
      timeZone: "Europe/Vienna",
      dateStyle: "full",
      timeStyle: "medium",
    });

    console.log("Sending contact email from:", sanitizedEmail);

    // Send email to team
    const emailResponse = await resend.emails.send({
      from: "FH OÖ Racing Team Contact <noreply@resend.dev>",
      to: [TEAM_EMAIL],
      reply_to: sanitizedEmail,
      subject: EMAIL_SUBJECT,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%); padding: 30px; border-radius: 10px 10px 0 0;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
          </div>
          
          <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e0e0e0; border-top: none;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0;">
                  <strong style="color: #666;">Name:</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0;">
                  ${sanitizedName}
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0;">
                  <strong style="color: #666;">Email:</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0;">
                  <a href="mailto:${sanitizedEmail}" style="color: #0066cc;">${sanitizedEmail}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0;">
                  <strong style="color: #666;">Submitted:</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0;">
                  ${timestamp}
                </td>
              </tr>
            </table>
            
            <div style="margin-top: 20px;">
              <strong style="color: #666;">Message:</strong>
              <div style="background: #ffffff; padding: 15px; border-radius: 5px; margin-top: 10px; border: 1px solid #e0e0e0; white-space: pre-wrap;">
${sanitizedMessage}
              </div>
            </div>
            
            <p style="margin-top: 20px; font-size: 12px; color: #999;">
              This message was sent via the FH OÖ Racing Team website contact form.
            </p>
          </div>
        </body>
        </html>
      `,
    });

    if (emailResponse.error) {
      console.error("Resend API error:", emailResponse.error);
      throw new Error(emailResponse.error.message || "Failed to send email");
    }

    console.log("Email sent successfully:", emailResponse.data?.id);

    return new Response(
      JSON.stringify({ 
        success: true, 
        messageId: emailResponse.data?.id 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Failed to send message" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
