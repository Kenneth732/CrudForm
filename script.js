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

// Function to render the book list
function renderBookList() {
    // Clear the book list
    bookList.innerHTML = '';

    // Loop through the books array and create list items
    books.forEach(book => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="book-info">${book.title} by ${book.author}</span>
            <button class="delete-button">Delete</button>
        `;

        // Add event listener to the delete button
        const deleteButton = li.querySelector('.delete-button');
        deleteButton.addEventListener('click', () => deleteBook(book.id));

        // Append the list item to the book list
        bookList.appendChild(li);
    });
}

// Add event listener to the form's submit event
form.addEventListener('submit', addBook);

// Initial rendering of the book list
renderBookList();
