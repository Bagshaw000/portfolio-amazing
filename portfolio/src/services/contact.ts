import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";
import { IClientEnquiry } from "./types";
// import * as nodemailer from "nodemailer";
export async function clientEnquiry(data: IClientEnquiry) {
  const mailerSend = new MailerSend({
    apiKey:
      "mlsn.1f58e67bc8895e7eb66dd1248843f48f38518f144da4c86ead8dc554c6d8a21f",
  });

  const sentFrom = new Sender(
    "MS_mk6kdY@trial-z3m5jgrw0joldpyo.mlsender.net",
    "Amazing"
  );

  const recipients = [
    new Recipient("omieibibagshaw007@gmail.com", "New Client"),
  ];
  const emailParams = new EmailParams()
    .setFrom(sentFrom)
    .setTo(recipients)
    .setReplyTo(sentFrom)
    .setSubject("New client enquiry")
    .setHtml(
      `<body style="font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f9f9f9;">
    <div style="max-width: 600px; margin: auto; padding: 20px; background: white; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        <h2 style="color: #333;">Client Inquiry</h2>
        <p style="font-size: 1rem; line-height: 1.5; color: #555;">
            <span style="font-weight: bold; color: #222;">Full Name:</span> ${data.fname} ${data.lname}
        </p>
        <p style="font-size: 1rem; line-height: 1.5; color: #555;">
            <span style="font-weight: bold; color: #222;">Message:</span>  ${data.message}.
        </p>
    </div>
    </body>`
    )
    .setText("This is the text content");

  const sendEmail = await mailerSend.email.send(emailParams);

  return sendEmail;
}

// export async function sendEmail(data: IClientEnquiry) {
// //   const transporter = nodemailer.createTransport({
// //     host: "smtp.mailersend.net",
// //     port: 587,
// //     secure: false, // true for port 465, false for other ports
// //     auth: {
// //       user: "MS_mk6kdY@trial-z3m5jgrw0joldpyo.mlsender.net",
// //       pass: "fmSte5M4u7avnbKM",
// //     },
// //   });
  
// //   const info = await transporter.sendMail({
// //     from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
// //     to: "omieibibagshaw007@gmail.com", // list of receivers
// //     subject: "Hello ✔", // Subject line
// //     text: "Hello world?", // plain text body
// //     html: `<body style="font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f9f9f9;">
// //     <div style="max-width: 600px; margin: auto; padding: 20px; background: white; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
// //         <h2 style="color: #333;">Client Inquiry</h2>
// //         <p style="font-size: 1rem; line-height: 1.5; color: #555;">
// //             <span style="font-weight: bold; color: #222;">Full Name:</span> ${data.fname} ${data.lname}
// //         </p>
// //         <p style="font-size: 1rem; line-height: 1.5; color: #555;">
// //             <span style="font-weight: bold; color: #222;">Message:</span>  ${data.message}.
// //         </p>
// //     </div>
// //     </body>`, // html body
// //   });

// //   console.log("Message sent: %s", info.messageId);
 
//   const transporter = nodemailer.createTransport({
//     // Add your email service configuration here
//     host: "smtp.mailersend.net",
//     port: 587,
//     // service: 'gmail',
//     auth: {
//       user: "MS_mk6kdY@trial-z3m5jgrw0joldpyo.mlsender.net",
//       pass: "fmSte5M4u7avnbKM"
//     }
//   });

//   const mailOptions = {
//     from: data.email,
//     to: process.env.EMAIL_USER, // Your receiving email
//     subject: `New Contact from ${data.fname} ${data.lname}`,
//     text: data.message,
//     html: `<body style="font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f9f9f9;">
//     <div style="max-width: 600px; margin: auto; padding: 20px; background: white; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
//         <h2 style="color: #333;">Client Inquiry</h2>
//         <p style="font-size: 1rem; line-height: 1.5; color: #555;">
//             <span style="font-weight: bold; color: #222;">Full Name:</span> ${data.fname} ${data.lname}
//         </p>
//         <p style="font-size: 1rem; line-height: 1.5; color: #555;">
//             <span style="font-weight: bold; color: #222;">Message:</span>  ${data.message}.
//         </p>
//     </div>
//     </body>`
//   };

//   return await transporter.sendMail(mailOptions);
// }
