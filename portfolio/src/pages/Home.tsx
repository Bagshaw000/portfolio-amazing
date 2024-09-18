import React from "react";
import Header from "../component/Header";

export default function Home() {
  return (
    <>
      <Header
        heading="DIGITAL MARKETING AGENCY"
        quote={{
          authorQuote:
            "People do not buy goods and services. They buy relations, stories, and magic.",
          author: "Seth Godin",
        }}
        subheading = ''
      ></Header>
    </>
  );
}
