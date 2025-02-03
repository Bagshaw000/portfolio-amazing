import fastify from "fastify";
import { MailtrapClient } from "mailtrap";
import cors from "@fastify/cors";
const server = fastify();
import { Static, Type } from "@sinclair/typebox";
import "dotenv/config";
import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";

server.withTypeProvider<TypeBoxTypeProvider>();
await server.register(cors);

server.listen(
  { port: parseInt(process.env.SERVER_PORT || "8000"), host: "0.0.0.0" },
  (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server listening at ${address}`);
  }
);

const bodySchema = Type.Object({
  fname: Type.Optional(Type.String()),
  lname: Type.Optional(Type.String()),
  email: Type.String(),
  message: Type.Optional(Type.String()),
  category: Type.String(),
});

export type bodySchemaType = Static<typeof bodySchema>;

server.get("/", (response, reply) => {
  console.log("Server deployed");
  reply.send("Server deployed")
});

server.post<{ Body: bodySchemaType }>(
  "/email",
  {
    schema: {
      body: bodySchema,
    },
  },
  async (request, reply) => {
    const TOKEN = "65ee2f769f5a1a5f1f7507ebb68168b6";
    const SENDER_EMAIL = "enquiry@demomailtrap.com";
    const RECIPIENT_EMAIL = "irechukwuamazing@gmail.com";
    const client = new MailtrapClient({ token: TOKEN });

    if (request.body.category == "new") {
      console.log("new print");
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
      console.log("subscribe print");
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
      if (response.success) {
        return reply.status(200).send({ message: "Email sent successfully" });
      } else {
        return reply.status(500).send({ message: "Failed to send email" });
      }
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

// server.get("/", (request, reply) => {
//   console.log("Test");
// });
