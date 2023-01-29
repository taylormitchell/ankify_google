function createAnkiCard({ front, back, reference }) {
  fetch("http://127.0.0.1:8765", {
    method: "POST",
    body: JSON.stringify({
      action: "addNote",
      version: 6,
      params: {
        note: {
          deckName: "2-Recent",
          modelName: "Basic",
          fields: {
            front,
            back,
            reference,
          },
        },
      },
    }),
  })
    .then((response) => response.json())
    .then((res) => {
      if (res.error) {
        alert(res.error);
      } else {
        alert("successfully ankified");
      }
    })
    .catch((err) => alert(err));
}

function ankifySelectionOnGoogle() {
  createAnkiCard({
    front: document.querySelector("input[name='q']").value,
    back: window.getSelection().toString(),
    reference: window.location.href,
  });
}

ankifySelectionOnGoogle();
