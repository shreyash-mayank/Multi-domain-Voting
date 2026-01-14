const API = "/api";

async function loadPoll() {
  const res = await fetch(`${API}/poll`);
  const data = await res.json();

  document.getElementById("question").innerText = data.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  Object.keys(data.options).forEach(opt => {
    const btn = document.createElement("button");
    btn.innerText = `${opt} (${data.options[opt]})`;
    btn.onclick = () => vote(opt);
    optionsDiv.appendChild(btn);
  });
}

async function vote(option) {
  await fetch(`${API}/vote`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ option })
  });
  loadPoll();
}

loadPoll();
