import fastify from "fastify";
import { MailtrapClient } from "mailtrap";
import cors from "@fastify/cors";
const server = fastify();
import { Static, Type } from "@sinclair/typebox";

const start = async () => {
  await server.register(cors, {
    origin: [
      "http://localhost:5173",
      "http://[::1]:8080",
      "https://portfolio-amazing.onrender.com",
      "https://44.226.145.213:10000",
      "https://54.187.200.255:10000",
      "https://34.213.214.55:10000",
      "https://35.164.95.156:10000",
      "https://44.230.95.183:10000",
      "https://44.229.200.200:10000",
    ],
  });
};

start();

const emailSchema = Type.Object({
  fname: Type.String(),
  lname: Type.String(),
  email: Type.String(),
  message: Type.String(),
  category: Type.String(),
});

server.post<{ Body: Static<typeof emailSchema> }>(
  "/email",
  async (request, reply) => {
    const TOKEN = "65ee2f769f5a1a5f1f7507ebb68168b6";
    const SENDER_EMAIL = "enquiry@demomailtrap.com";
    const RECIPIENT_EMAIL = "irechukwuamazing@gmail.com";
    const client = new MailtrapClient({ token: TOKEN });

    if (request.body.category == "new") {
      const response = await client.send({
        from: { name: "Amazing Irechukwu", email: SENDER_EMAIL },
        to: [{ email: RECIPIENT_EMAIL }],
        subject: "New Client Enquiry",
        // text: "Welcome to Mailtrap Sending!",
        html: `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Client Inquiry</title>
        </head>
        <body style="font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f9f9f9;">
            <div style="max-width: 600px; margin: auto; padding: 20px; background: white; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                <h2 style="color: #333;">Client Inquiry</h2>
                <p style="font-size: 1rem; line-height: 1.5; color: #555;">
                    <span style="font-weight: bold; color: #222;">Full Name: </span> ${request.body.fname}  ${request.body.lname} with email ${request.body.email}
                </p>
                <p style="font-size: 1rem; line-height: 1.5; color: #555;">
                    <span style="font-weight: bold; color: #222;">Message:</span> ${request.body.fname}  ${request.body.message}
                </p>
            </div>
        </body>
        </html>
      `,
      });

      if (response.success) {
        return reply.status(200).send({ message: "Email sent successfully" });
      } else {
        return reply.status(500).send({ message: "Failed to send email" });
      }
    } else if (request.body.category == "subscribe") {
      const response = await client.send({
        from: { name: "Amazing Irechukwu", email: SENDER_EMAIL },
        to: [{ email: RECIPIENT_EMAIL }],
        subject: "Subscription to news letter",
        // text: "Welcome to Mailtrap Sending!",
        html: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Subscribe to Newletter</title>
  </head>
  <body style="font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f9f9f9;">
      <div style="max-width: 600px; margin: auto; padding: 20px; background: white; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <h2 style="color: #333;">News Letter</h2>
          <p style="font-size: 1rem; line-height: 1.5; color: #555;">
              <span style="font-weight: bold; color: #222;">Full Name: </span> with email ${request.body.email}
          </p>
          <p style="font-size: 1rem; line-height: 1.5; color: #555;">
              <span style="font-weight: bold; color: #222;">Message:</span> ${request.body.email}  ${request.body.message}
          </p>
      </div>
  </body>
  </html>
  `,
      });
    } else {
      const response = await client.send({
        from: { name: "Amazing Irechukwu", email: SENDER_EMAIL },
        to: [{ email: RECIPIENT_EMAIL }],
        subject: "Subscription to news letter",
        // text: "Welcome to Mailtrap Sending!",
        html: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Client Inquiry</title>
  </head>
  <body style="font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f9f9f9;">
      <div style="max-width: 600px; margin: auto; padding: 20px; background: white; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <h2 style="color: #333;">News Letter</h2>
          <p style="font-size: 1rem; line-height: 1.5; color: #555;">
              <span style="font-weight: bold; color: #222;">Full Name: </span> ${request.body.fname}  ${request.body.lname} with email ${request.body.email}
          </p>
          <p style="font-size: 1rem; line-height: 1.5; color: #555;">
              <span style="font-weight: bold; color: #222;">Message:</span> ${request.body.fname}  ${request.body.message}
          </p>
      </div>
  </body>
  </html>
  `,
      });

      if (response.success) {
        return reply.status(200).send({ message: "Email sent successfully" });
      } else {
        return reply.status(500).send({ message: "Failed to send email" });
      }
    }
  }
);

server.get("/",  (request, reply)=> {
console.log("Test")
})

server.listen({ port: 10000, host: "0.0.0.0" }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
