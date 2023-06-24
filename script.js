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
