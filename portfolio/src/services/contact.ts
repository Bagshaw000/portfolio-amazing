import axios from "axios";
import { IClientEnquiry } from "./types";
// import * as MailtrapClient from "mailtrap";

export async function clientEnquiry(data: IClientEnquiry) {
  try {
    console.log(data);
    const newData = await axios.post(
      "https://portfolio-amazing-backend.onrender.com:10000/email",
      data
    );

    return newData;
  } catch (error) {
    console.error("Error sending message:", error);
    throw error;
  }
}
