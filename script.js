fetch("events.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    return response.json();
  })
  .then((events) => {
    const list = document.querySelector("#starred");
    const status = document.querySelector("#status");

    events.forEach((event) => {
      const item = document.createElement("li");
      const link = document.createElement("a");
      link.href = event.url;
      link.textContent = `${event.owner}/${event.name}`;
      link.setAttribute("aria-label", `View ${event.owner}/${event.name} on GitHub`);
      item.append(link, ` — starred ${event.starredAt}`);
      list.appendChild(item);
    });

    status.textContent = `${events.length} starred repositories loaded.`;
  })
  .catch((error) => {
    const status = document.querySelector("#status");
    status.textContent = "Unable to load starred repositories. Please try again later.";
    status.setAttribute("role", "alert");
    console.error(error);
  });
