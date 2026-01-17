import sgMail from "@sendgrid/mail";

// Helper function to escape HTML
function escapeHtml(text) {
  if (!text) return "";
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

export async function sendContactMail(data) {
  const { name, email, message, service } = data;
  
  // Validate environment variables - trim whitespace and check they're not empty
  const apiKey = (process.env.SENDGRID_API_KEY || "").trim();
  const toEmail = (process.env.TO_EMAIL || process.env.To_EMAIL || "").trim(); // Support both cases
  const fromEmail = (process.env.FROM_EMAIL || process.env.From_EMAIL || "").trim(); // Support both cases
  
  if (!apiKey) {
    throw new Error("SENDGRID_API_KEY environment variable is not set or is empty");
  }
  
  if (!toEmail) {
    throw new Error(`TO_EMAIL environment variable is not set or is empty. Current value: "${process.env.TO_EMAIL || process.env.To_EMAIL || 'undefined'}"`);
  }
  
  if (!fromEmail) {
    throw new Error(`FROM_EMAIL environment variable is not set or is empty. Current value: "${process.env.FROM_EMAIL || process.env.From_EMAIL || 'undefined'}"`);
  }

  try {
    sgMail.setApiKey(apiKey);

    // Escape user input to prevent XSS
    const escapedName = escapeHtml(name);
    const escapedEmail = escapeHtml(email);
    const escapedMessage = escapeHtml(message);
    const escapedService = service ? escapeHtml(service) : "";

    const msg = {
      to: toEmail,
      from: fromEmail,
      subject: "New Contact Form Submission",
      html: `
        <h3>New Contact Query</h3>
        <p><b>Name:</b> ${escapedName}</p>
        <p><b>Email:</b> ${escapedEmail}</p>
        ${escapedService ? `<p><b>Service:</b> ${escapedService}</p>` : ""}
        <p><b>Message:</b> ${escapedMessage.replace(/\n/g, "<br>")}</p>
      `
    };

    await sgMail.send(msg);
  } catch (error) {
    // Handle SendGrid specific errors
    if (error.response) {
      const { body, statusCode } = error.response;
      console.error("SendGrid API Error:", {
        status: statusCode,
        body: body,
        errors: body?.errors
      });
      
      // Provide more specific error messages
      if (statusCode === 401) {
        throw new Error("SendGrid authentication failed. Please check your API key.");
      } else if (statusCode === 403) {
        throw new Error("SendGrid authorization failed. Please check your API key permissions.");
      } else if (statusCode === 400) {
        const errorMsg = body?.errors?.[0]?.message || "Invalid email address or request format";
        throw new Error(`SendGrid validation error: ${errorMsg}`);
      } else {
        throw new Error(`SendGrid API error (${statusCode}): ${body?.errors?.[0]?.message || "Unknown error"}`);
      }
    }
    // Re-throw if it's not a SendGrid error
    throw error;
  }
}
