export async function handleServerResponse(response) {
  let errorMessage = "An unknown error occured";

  try {
    const data = await response.json();
    if (data?.message) {
      errorMessage = data.message;
    }
  } catch (e) {
    errorMessage = response.statusText || errorMessage;
  }

  return {
    status: response.status,
    message: errorMessage,
  };
}

export async function handleClientError(error) {
  let errorMessage = "An unknown error occured";

  console.log(error);

  try {
    const data = error;
    if (data?.message) {
      errorMessage = data.message;
    }
  } catch (e) {
    errorMessage = error.statusText || errorMessage;
  }

  return {
    status: response.status,
    message: errorMessage,
  };
}
