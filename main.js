const myLibrary = [];

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const isRead = document.querySelector("#isRead");
const addBookBtn = document.querySelector(".addBtn");

const cardsContainer = document.querySelector(".cards-container");


function Book(title, author, pages, isRead, unId,) {
    if (!new.target) {
        throw Error("new is missing from the constructor")
    }

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.unId = unId;
    this.info = function() {
        return `
        ${this.title} by ${this.author}, 
        ${this.pages} pages has 
        ${this.isRead ? "been" : "not been"} read.
        `
    }
}

function addBookToLibrary() {
  let newBook = new Book(
    title.value,
    author.value,
    pages.value,
    isRead.checked,
    crypto.randomUUID()
  );
  myLibrary.push(newBook);
  console.log(myLibrary);

  // Create and append card ONLY for the new book
  let card = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("data-id", newBook.unId);

  card.innerHTML = `<div class="card__title">${newBook.title}</div>
  <button id="delete_btn">X</button>
       <div class="card__title">${newBook.author}</div>
       <div class="card__subtitle">
         ${newBook.info()}
       </div>
       <div class="card__indicator">
         <span class="card__indicator-amount">135</span> Works /
         <span class="card__indicator-percentage">${newBook.pages}</span>
       </div>`;

  cardsContainer.appendChild(card);
}




addBookBtn.addEventListener("click", () => {
    addBookToLibrary()
   title.value = "";
   author.value = "";
   pages.value ="";
   isRead.checked = false;
})

let deleteBtn = document.querySelector("#delete_btn");

deleteBtn.addEventListener((e) => {
  if (e.target.classList.contains("delete_btn")) {
    const card = e.target.closest(".card");
    const unId = card.getAttribute("data-id");

    // Remove from DOM
    card.remove();

    // Remove from library array
    const index = myLibrary.findIndex((book) => book.unId === unId);
    if (index !== -1) {
      myLibrary.splice(index, 1);
    }

    console.log("Deleted book with ID:", unId);
    console.log("Updated Library:", myLibrary);
  }
})
