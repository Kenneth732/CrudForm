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

    // Get the book details from the input fields
    const title = titleInput.value.trim();
    const author = authorInput.value.trim();

    if (title === '' || author === '') {
        alert('Please enter both title and author.');
        return;
    }

    // Create a new book object
    const book = {
        id: Date.now().toString(),
        title: title,
        author: author
    };

    // Add the book to the array
    books.push(book);

    // Clear the input fields
    titleInput.value = '';
    authorInput.value = '';

    // Render the book list
    renderBookList();
}

// Function to delete a book
function deleteBook(id) {
    // Remove the book from the array
    books = books.filter(book => book.id !== id);

    // Render the book list
    renderBookList();
}

