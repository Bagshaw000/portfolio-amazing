import { IClientEnquiry } from "./types";
import { MailtrapClient } from "mailtrap";

export async function clientEnquiry(data: IClientEnquiry) {
  try {
    console.log(data);
    const TOKEN = "65ee2f769f5a1a5f1f7507ebb68168b6";

    const client = new MailtrapClient({
      token: TOKEN,
    });

    const sender = {
      email: "hello@demomailtrap.com",
      name: "hello@demomailtrap.com",
    };
    const recipients = [
      {
        email: "irechukwuamazing@gmail.com",
      },
    ];

    client
      .send({
        from: sender,
        to: recipients,
        subject: "You are awesome!",
        text: "Congrats for sending test email with Mailtrap!",
        category: "Integration Test",
      })
      
  } catch (error) {
    console.error("Error sending message:", error);
    throw error;
  }
}
