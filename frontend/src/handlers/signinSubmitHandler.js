import { signInDoneMsg, showMessage } from "../util/uiHandler";
import { handleServerResponse, handleClientError } from "../util/errorHandler";

export async function handleSigninSubmit(form) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const formDataObject = Object.fromEntries(formData);
    const formDataStringify = JSON.stringify(formDataObject);

    try {
      const response = await fetch("http://localhost:3000/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: formDataStringify,
      });

      if (response.ok) {
        signInDoneMsg();
        console.log("Signin form submission successful");
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
