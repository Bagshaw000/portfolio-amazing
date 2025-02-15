import axios from "axios";
import { IClientEnquiry } from "./types";
// import * as MailtrapClient from "mailtrap";

export async function clientEnquiry(data: IClientEnquiry) {
  try {
    // console.log(data);
    const newData = await axios.post(
      "https://portfolio-amazing-backend.onrender.com:10000/email",
      data
    );

    if(newData.status === 200){
      return true
    }
    return false;
  } catch (error) {
    console.error("Error sending message:", error);
    throw error;
  }
}
// "https://portfolio-amazing-backend.onrender.com:10000/email",
// "http://127.0.0.1:10000/email
