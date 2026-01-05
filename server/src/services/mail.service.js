import sgMail from "@sendgrid/mail";

export async function sendContactMail(data) {
  const { name, email, message } = data;
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: process.env.TO_EMAIL,
    from: process.env.FROM_EMAIL,
    subject: "New Contact Form Submission",
    html: `
      <h3>New Contact Query</h3>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Message:</b> ${message}</p>
    `
  };

  await sgMail.send(msg);
}
