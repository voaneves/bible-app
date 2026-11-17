// Load the JSON file
fetch("bible/structure.json")
  .then((response) => response.json())
  .then((data) => {
    // Get the book buttons container
    const bookButtonsContainer = document.getElementById("book-buttons");

    // Function to create book buttons with book names
    function createBookButtons() {
      // Clear the current book buttons
      bookButtonsContainer.innerHTML = "";

      // Loop through the books data and create buttons with book names
      data.bible.forEach((book) => {
        const button = document.createElement("button");
        button.textContent = book.abbrev;
        button.addEventListener("click", () => {
          createNumberedButtons(book);
        });
        bookButtonsContainer.appendChild(button);
      });
    }

    // Function to create numbered buttons for a specific book
    function createNumberedButtons(book) {
      // Clear the current book buttons
      bookButtonsContainer.innerHTML = "";

      // Create the back button
      const backButton = document.createElement("button");
      backButton.textContent = "🡄";
      backButton.addEventListener("click", () => {
        createBookButtons();
      });
      bookButtonsContainer.appendChild(backButton);

      // Loop through the chapters of the book and create numbered buttons
      for (let i = 1; i <= book.chapters; i++) {
        const button = document.createElement("button");
        button.textContent = i;
        button.addEventListener("click", () => {
          showChapter(book.abbrev, i);
        });
        bookButtonsContainer.appendChild(button);
      }
    }

    // Create the initial book buttons
    createBookButtons();
  })
  .catch((error) => {
    console.log("Error loading the JSON file:", error);
  });


// Show the verses of a chapter (book is the abbreviation, e.g. "Gen")
function showChapter(abbrev, chapterNumber) {
  const content = document.getElementById("content");
  let chapterText = document.getElementById("chapter-text");
  if (!chapterText) {
    chapterText = document.createElement("div");
    chapterText.id = "chapter-text";
    content.appendChild(chapterText);
  }

  fetch(`bible/${abbrev}.json`)
    .then((response) => response.json())
    .then((bookData) => {
      const chapter = bookData.chapters.find(
        (c) => String(c.chapter) === String(chapterNumber)
      );
      chapterText.innerHTML = "";

      const title = document.createElement("h2");
      title.textContent = `${bookData.book} ${chapterNumber}`;
      chapterText.appendChild(title);

      if (!chapter) {
        const missing = document.createElement("p");
        missing.textContent = "Capítulo não encontrado.";
        chapterText.appendChild(missing);
        return;
      }

      chapter.verses.forEach((v) => {
        const p = document.createElement("p");
        const number = document.createElement("sup");
        number.textContent = `${v.verse} `;
        p.appendChild(number);
        p.appendChild(document.createTextNode(v.text));
        chapterText.appendChild(p);
      });
    })
    .catch((error) => {
      console.log("Error loading the book:", error);
    });
}
