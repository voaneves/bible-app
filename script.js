// script.js

// Função para exibir um versículo aleatório na página inicial
function showRandomVerse() {
    // Lógica para obter um versículo aleatório do arquivo JSON
    const randomVerse = /* Obtenha um versículo aleatório */;
    document.getElementById('verse').innerHTML = randomVerse;
}

// Função para exibir os capítulos de um livro
function showBook(book) {
    // Lógica para obter os capítulos do livro selecionado do arquivo JSON
    const chapters = /* Obtenha os capítulos do livro */;
    const chapterList = document.getElementById('chapter-list');
    chapterList.innerHTML = ''; // Limpa a lista de capítulos

    chapters.forEach(function(chapter) {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = '#';
        link.onclick = function() {
            showChapter(book, chapter);
        };
        link.textContent = chapter;
        listItem.appendChild(link);
        chapterList.appendChild(listItem);
    });

    document.getElementById('book-title').textContent = book;
    document.getElementById('book-chapters').style.display = 'block';
    document.getElementById('chapter-content').style.display = 'none';
}

// Função para exibir o conteúdo de um capítulo
function showChapter(book, chapter) {
    // Lógica para obter o conteúdo do capítulo selecionado do arquivo JSON
    const chapterContent = /* Obtenha o conteúdo do capítulo */;
    const verses = document.getElementById('verses');
    verses.innerHTML = ''; // Limpa o conteúdo dos versículos

    chapterContent.forEach(function(verse) {
        const p = document.createElement('p');
        p.textContent = verse;
        verses.appendChild(p);
    });

    document.getElementById('chapter-title').textContent = book + ' ' + chapter;
    document.getElementById('book-chapters').style.display = 'none';
    document.getElementById('chapter-content').style.display = 'block';
}