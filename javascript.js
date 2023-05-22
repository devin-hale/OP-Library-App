let library = [];

const bookGrid = document.getElementById('bookGrid');

/* Function that appends a new book Div.  Will add connectivity to library objects later.*/
function newBook(newBookGenerate) {
    /* Create Initial Div with book class*/
    let book = document.createElement('div');
    book.classList.add("book")

    /*Title element with title class*/
    let newTitle = document.createElement('p');
    newTitle.innerHTML = `${newBookGenerate.title}`;
    newTitle.classList.add("title");
    book.appendChild(newTitle);

    /* Icon Element with icon class and source image */
    let bookIcon = document.createElement('img');
    bookIcon.src = 'assets/book.svg';
    bookIcon.classList.add('icon');
    book.appendChild(bookIcon);

    /*AuthorInfo element with author, and author data elements as children.*/
    let newAuthorInfo = document.createElement('div');
    newAuthorInfo.classList.add("authorInfo")
    newAuthorInfo.classList.add("bookData")
    book.appendChild(newAuthorInfo);

        let newAuthor = document.createElement('p');
        newAuthor.innerHTML = 'Author:';
        newAuthor.classList.add("author")
        newAuthor.style.fontWeight = 'bold';
        newAuthorInfo.appendChild(newAuthor);
    
        let newAuthorData = document.createElement('p');
        /*Houses Library Data*/
        newAuthorData.innerHTML = `${newBookGenerate.author}`;
        newAuthorData.classList.add("authorData")
        newAuthorInfo.appendChild(newAuthorData);


    /*Pages element with children*/
    let newPagesInfo = document.createElement('div');
    newPagesInfo.classList.add("pagesInfo");
    newPagesInfo.classList.add("bookData");
    book.appendChild(newPagesInfo);

        let newPages = document.createElement('p');
        newPages.innerHTML = 'Page Count:';
        newPages.classList.add("pages")
        newPages.style.fontWeight = 'bold';
        newPagesInfo.appendChild(newPages);

        let newPagesData = document.createElement('p');
        /*Houses Library Data*/
        newPagesData.innerHTML = `${newBookGenerate.pages}`;
        newPagesData.classList.add("pagesData")
        newPagesInfo.appendChild(newPagesData);



    /*Read element with read class*/
    let newReadInfo = document.createElement('div');
    newReadInfo.classList.add("readInfo");
    newReadInfo.classList.add("bookData");
    book.appendChild(newReadInfo);

        let newRead = document.createElement('p');
        newRead.innerHTML = 'Read:';
        newRead.classList.add("read")
        newRead.style.fontWeight = 'bold';
        newReadInfo.appendChild(newRead);

        let newReadData = document.createElement('p');
        /*Houses Library Data*/
        newReadData.innerHTML = `${newBookGenerate.read}`;
        newReadData.classList.add("readData")
        newReadInfo.appendChild(newReadData);


    bookGrid.appendChild(book);
}

/* Book constructor function */
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

library.push(new Book('The Lord of the Rings','J.R.R. Tolkien', 1178, 'No'));
library.push(new Book('The Great Gatbsy', 'F. Scott Fitzgerald', 208, 'Yes'))
library.push(new Book('A Game of Thrones', 'George R.R. Martin', 694, 'No'))
console.log(library);

library.forEach(newBookGenerate => {
    newBook(newBookGenerate);
});