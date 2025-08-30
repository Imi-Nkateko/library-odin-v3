const myLibrary = [];

function Book(title, author, pages, isRead, unId) {
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

}