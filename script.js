// Example book data with chapters and detailed content
const books = [
    {
        title: "Management Advisory Services",
        chapters: [
            {
                title: "Introduction to Management Advisory Services",
                content: "Detailed content for Introduction to Management Advisory Services."
            },
            {
                title: "Chapter 1: Overview",
                content: "Detailed content for Chapter 1: Overview."
            },
            {
                title: "Chapter 2: Key Concepts",
                content: "Detailed content for Chapter 2: Key Concepts."
            },
            // Add more chapters as needed
        ]
    },
    {
        title: "Auditing",
        chapters: [
            {
                title: "Introduction to Auditing",
                content: "Detailed content for Introduction to Management Advisory Services."
            },
            {
                title: "Chapter 1: Overview",
                content: "Detailed content for Chapter 1: Overview."
            },
            {
                title: "Chapter 2: Key Concepts",
                content: "Detailed content for Chapter 2: Key Concepts."
            },
            // Add more chapters as needed
        ]
    },
    {
        title: "Regulatory Framework for Business Transactions",
        chapters: [
            {
                title: "Introduction to Regulatory Framework for Business Transactions",
                content: "Detailed content for Introduction to Management Advisory Services."
            },
            {
                title: "Chapter 1: Overview",
                content: "Detailed content for Chapter 1: Overview."
            },
            {
                title: "Chapter 2: Key Concepts",
                content: "Detailed content for Chapter 2: Key Concepts."
            },
            // Add more chapters as needed
        ]
    },
    {
        title: "Taxation",
        chapters: [
            {
                title: "Introduction to Taxation",
                content: "Detailed content for Introduction to Management Advisory Services."
            },
            {
                title: "Chapter 1: Overview",
                content: "Detailed content for Chapter 1: Overview."
            },
            {
                title: "Chapter 2: Key Concepts",
                content: "Detailed content for Chapter 2: Key Concepts."
            },
            // Add more chapters as needed
        ]
    },
    {
        title: "Financial Accounting and Reporting Part",
        chapters: [
            {
                title: "Introduction to Financial Accounting and Reporting",
                content: "Detailed content for Introduction to Management Advisory Services."
            },
            {
                title: "Chapter 1: Overview",
                content: "Detailed content for Chapter 1: Overview."
            },
            {
                title: "Chapter 2: Key Concepts",
                content: "Detailed content for Chapter 2: Key Concepts."
            },
            // Add more chapters as needed
        ]
    },
    {
        title: "Advanced Financial Accounting and Reporting",
        chapters: [
            {
                title: "Introduction to Advanced Financial Accounting and Reporting",
                content: "Detailed content for Introduction to Management Advisory Services."
            },
            {
                title: "Chapter 1: Overview",
                content: "Detailed content for Chapter 1: Overview."
            },
            {
                title: "Chapter 2: Key Concepts",
                content: "Detailed content for Chapter 2: Key Concepts."
            },
            // Add more chapters as needed
        ]
    },
    // Add other books similarly
];

// DOM Elements
const bookList = document.getElementById('book-list');
const bookContent = document.getElementById('book-content');
const themeToggleButton = document.getElementById('theme-toggle');

// Pagination elements
let currentBookIndex = 0;
let currentChapterIndex = 0;

// Load books into the navigation
function loadBooks() {
    books.forEach((book, index) => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = '#';
        link.textContent = book.title;
        link.addEventListener('click', () => {
            currentBookIndex = index;
            currentChapterIndex = 0;
            showBookContent();
        });
        listItem.appendChild(link);
        bookList.appendChild(listItem);
    });
}

// Display the selected book's content with pagination
function showBookContent() {
    const book = books[currentBookIndex];
    const chapter = book.chapters[currentChapterIndex];
    let content = `<h2>${book.title}</h2>`;
    content += `<h3>${chapter.title}</h3>`;
    content += `<p>${chapter.content}</p>`;

    // Add pagination controls
    content += '<div class="pagination">';
    if (currentChapterIndex > 0) {
        content += '<button id="prev-chapter">Previous Chapter</button>';
    }
    if (currentChapterIndex < book.chapters.length - 1) {
        content += '<button id="next-chapter">Next Chapter</button>';
    }
    content += '</div>';

    bookContent.innerHTML = content;

    // Add event listeners for pagination
    const prevButton = document.getElementById('prev-chapter');
    const nextButton = document.getElementById('next-chapter');

    if (prevButton) {
        prevButton.addEventListener('click', () => {
            currentChapterIndex--;
            showBookContent();
        });
    }
    if (nextButton) {
        nextButton.addEventListener('click', () => {
            currentChapterIndex++;
            showBookContent();
        });
    }
}

// Function to toggle between light and dark mode
function toggleTheme() {
    const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    
    if (currentTheme === 'dark') {
        // Switch to light mode
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light'); // Save the light theme in local storage
    } else {
        // Switch to dark mode
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark'); // Save the dark theme in local storage
    }
}

// Load the saved theme from local storage
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
        // Apply the saved theme
        document.body.classList.add(savedTheme === 'dark' ? 'dark-mode' : 'light-mode');
    } else {
        // Default to light mode if no theme is saved
        document.body.classList.add('light-mode');
    }
}

// Initialize the theme on page load
loadTheme();

// Add event listener for the theme toggle button
themeToggleButton.addEventListener('click', toggleTheme);

// Initial setup
loadBooks();
