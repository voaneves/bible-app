# bible-app: Site da Bíblia

Protótipo de leitor da Bíblia feito com HTML, CSS e JavaScript puros, sem frameworks nem build. Os livros e capítulos vêm de arquivos JSON locais.

## O que faz hoje

- Carrega `bible/structure.json` e gera, dinamicamente, um botão por livro.
- Ao clicar num livro, mostra botões numerados com os capítulos, com botão de voltar à lista de livros.
- Ao clicar num capítulo, `showChapter` carrega o JSON do livro e exibe os versículos do capítulo abaixo dos botões.

## Como rodar

O app usa `fetch` para ler os JSON, então precisa de um servidor estático (abrir o `index.html` direto via `file://` não funciona):

```bash
gh repo clone voaneves/bible-app
cd bible-app
python -m http.server 8000
```

Acesse http://localhost:8000.

## Estrutura

```
index.html      página
script.js       botões de livros e capítulos, e exibição dos versículos
styles.css      estilos
bible/          structure.json (livros e nº de capítulos) e um JSON por livro (ex.: Gen.json)
LICENSE
```

Cada JSON de livro segue o formato `livro > capítulos > versículos` (`verse`, `text`); os textos em `bible/` estão em inglês.

## Stack e aprendizados

HTML5, CSS3, JavaScript (DOM, `fetch`, geração dinâmica de elementos) e dados em JSON.

## Licença

MIT. Veja [LICENSE](LICENSE).
