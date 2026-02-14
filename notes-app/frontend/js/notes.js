const userId = "123"; // demo user id

async function addNote() {
  const res = await fetch("http://localhost:5000/api/notes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId,
      title: title.value,
      content: content.value,
      color: color.value
    })
  });

  loadNotes();
}

async function loadNotes() {
  const res = await fetch(`http://localhost:5000/api/notes/${userId}`);
  const notes = await res.json();

  document.getElementById("notes").innerHTML = "";
  notes.forEach(n => {
    document.getElementById("notes").innerHTML += `
      <div class="note" style="background:${n.color}">
        <h3>${n.title}</h3>
        <p>${n.content}</p>
        <button onclick="deleteNote('${n._id}')">Delete</button>
      </div>
    `;
  });
}

async function deleteNote(id) {
  await fetch(`http://localhost:5000/api/notes/${id}`, { method: "DELETE" });
  loadNotes();
}

loadNotes();
