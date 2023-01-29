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
        alert("added");
      }
    })
    .catch((err) => alert(err));
}

function ankifyGoogleSnippet() {
  createAnkiCard({
    front: document.querySelector("input[name='q']").value,
    back: document.querySelector(".g-blk div[data-tts]").dataset.ttsText,
    reference: document.querySelector(".g-blk a").href,
  });
}

function addAnkifyButton() {
  const featureSnippet = document.querySelector(".M8OgIe");
  b = document.createElement("button");
  b.innerHTML = "ankify";
  b.style.position = "absolute";
  b.style.top = "0px";
  b.style.right = "0px";
  b.style.zIndex = "1000";
  b.addEventListener("click", ankifyGoogleSnippet);
  featureSnippet.appendChild(b);
}

addAnkifyButton();
