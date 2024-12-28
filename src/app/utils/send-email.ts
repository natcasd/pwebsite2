import { FormData } from "../components/contactform";

export function sendEmail(data: FormData) {
  console.log(data);
  const apiEndpoint = "/api/email";

  return new Promise((resolve, reject) => {
    fetch(apiEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) {
          // If response is not ok, throw an error to go to the catch block
          throw new Error("Network response was not ok.");
        }
        return res.json();
      })
      .then((response) => {
        // Resolve the promise with the response
        resolve(response);
      })
      .catch((err) => {
        // Reject the promise with the error
        reject(err);
      });
  });
}
