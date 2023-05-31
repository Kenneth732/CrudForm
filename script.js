// Get the form, input fields, and book list elements
const form = document.getElementById('bookForm');
const titleInput = document.getElementById('titleInput');
const authorInput = document.getElementById('authorInput');
const bookList = document.getElementById('bookList');

// Array to store books
let books = [];

// Function to handle form submission
function addBook(event) {
    event.preventDefault();

