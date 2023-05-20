import request from "request";
import { google } from "googleapis";
import key from "./service_account.json";

export function Indexe(url: string) {
    const jwtClient = new google.auth.JWT(
        key.client_email,
        "",
        key.private_key,
        ["https://www.googleapis.com/auth/indexing"],
        ""
      );
      
      jwtClient.authorize((err, tokens) => {
        if (err) {
          console.log(err);
          return;
        }
        const options = {
          url: "https://indexing.googleapis.com/v3/urlNotifications:publish",
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          auth: { "bearer": `${tokens?.access_token}`},
          json: {
            "url": url,
            "type": "URL_UPDATED"
          }
        };
        request(options, (error, response, body) => {
          console.log(body);
        });
      });
}