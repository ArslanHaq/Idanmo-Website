"use server";
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function sendEmail(body: any) {
  try {
    const response = await fetch(BACKEND_URL + "/Email", {
      method: "POST", // Set the request method to POST
      headers: {
        "Content-Type": "application/json", // Specify that you're sending JSON
      },
      body: JSON.stringify(body), // Convert formValues to a JSON string
    });

    console.log("email send successfully");
  } catch (error) {
    console.error("Error sending email:", error);
  }
}
