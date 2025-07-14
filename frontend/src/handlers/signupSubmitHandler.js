import { handleServerResponse, handleClientError } from "../util/errorHandler";
import { showMessage, signUpDoneMsg } from "../util/uiHandler";

export async function handleSignupSubmit(form) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent default form submission

    console.log(form);

    const formData = new FormData(form);
    const formDataObject = Object.fromEntries(formData); // converted into JS
    const formDataStringify = JSON.stringify(formDataObject); // conveted into JSON

    try {
      const response = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: formDataStringify,
      });

      if (response.ok) {
        signUpDoneMsg();
        console.log("Form submitted successfully!");
      } else {
        const errData = await handleServerResponse(response);
        showMessage(errData);
        console.log(`Error: ${errData.message}`);
      }
    } catch (error) {
      const errData = await handleClientError(error);
      console.log(`Client-side error: ${errData.message}`);
    }
  });
}
