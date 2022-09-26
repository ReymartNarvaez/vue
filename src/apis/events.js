const baseURL = "http://localhost:3011/events";

export const fetchEvents = async () => {
  const response = await fetch(`${baseURL}`)
  return await response.json()
};

export const storeEvent = async (event) => {
  console.log("Envents.js-StoreEvent",event);
  return await fetch(`${baseURL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(event)
  });
};

export const mutateEvent = async (event, id) => {
  return await fetch(`${baseURL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(event),
  });
};

export const destroyEvent = async (id) => {
  return await fetch(`${baseURL}/${id}`, {
    method: "DELETE",
  });
};