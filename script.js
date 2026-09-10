fetch("events.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    return response.json();
  })
  .then((events) => {
    const list = document.querySelector("#starred");

    events.forEach((event) => {
      const item = document.createElement("li");
      item.textContent = `${event.owner}/${event.name} — starred ${event.starredAt}`;
      list.appendChild(item);
    });
  })
  .catch((error) => {
    console.error(error);
  });
