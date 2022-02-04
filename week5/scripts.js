document
  .getElementById("mybtn")
  .addEventListener(
    "click",
    function () {
      let newchapter =
        document.getElementById(
          "favchap"
        ).value;
      console.log(newchapter);
      if (newchapter !== "") {
        const newBTN =
          document.createElement(
            "button"
          );
        newBTN.innerHTML = "\u274c";

        const newLI =
          document.createElement("li");
        newLI.textContent = newchapter;
        newLI.appendChild(newBTN);

        document
          .getElementById("favs")
          .appendChild(newLI);

        document.getElementById(
          "favchap"
        ).value = "";

        newBTN.onclick = function (e) {
          list.removeChild(newLI);
        };
        input.focus();
      }
    }
  );
