let myLibrary = [];
let bookGrid = document.getElementById("bookGrid");
let addBook = document.getElementById("addBook");
let addModal = document.getElementById("bookModal");
let shadow = document.getElementById("shadow");
let addForm = document.getElementById("bookForm");
let addBtn = document.getElementById("addBtn");

function Book(title, author, read, pages) {
  this.title = title;
  this.author = author;
  this.read = read;
  this.pages = pages;
  this.info = function () {
    console.log(
      `${this.title} by ${this.author}, ${this.pages} pages,${
        this.read ? " read" : " not read yet"
      }`
    );
  };
}

addBook.addEventListener("click", (e) => {
  addModal.classList.add("active");
  shadow.classList.add("active");
});

shadow.addEventListener("click", (e) => {
  addModal.classList.remove("active");
  shadow.classList.remove("active");
});

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("page").value;
  let read = document.getElementById("read").value;
  let book = new Book(title, author, read, pages);
  myLibrary.push(book);
  localStorage.setItem(book.title, book);
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("page").value = "";
  document.getElementById("read").value = "";
  displayBooks();
  addModal.classList.remove("active");
  shadow.classList.remove("active");
});

function displayBooks() {
  bookGrid.innerHTML = "";
  myLibrary.forEach((book) => {
    let cardDiv = document.createElement("div");
    let titleP = document.createElement("p");
    let authorP = document.createElement("p");
    let pageP = document.createElement("p");
    let readBtn = document.createElement("button");
    let removeBtn = document.createElement("button");

    authorP.innerText = book.author;
    titleP.innerText = book.title;
    pageP.innerText = book.pages + " pages";
    readBtn.innerText = "Read";
    removeBtn.innerText = "Remove";
    cardDiv.classList.add("book-card");
    titleP.classList.add("book-card-item");
    authorP.classList.add("book-card-item");
    pageP.classList.add("book-card-item");
    readBtn.classList.add("readBtn", "btn");
    removeBtn.classList.add("removeBtn", "btn");

    cardDiv.appendChild(titleP);
    cardDiv.appendChild(authorP);
    cardDiv.appendChild(pageP);
    cardDiv.appendChild(readBtn);
    cardDiv.appendChild(removeBtn);
    bookGrid.appendChild(cardDiv);
  });
}
