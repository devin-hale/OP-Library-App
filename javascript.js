let library = [];

const bookGrid = document.getElementById('bookGrid');

/* Function that appends a new book Div.*/
function newBook(newBookGenerate) {
    /* Create Initial Div with book class*/
    let book = document.createElement('div');
    book.classList.add("book");

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
    newAuthorInfo.classList.add("authorInfo");
    newAuthorInfo.classList.add("bookData");
    book.appendChild(newAuthorInfo);

        let newAuthor = document.createElement('p');
        newAuthor.innerHTML = 'Author:';
        newAuthor.classList.add("author");
        newAuthor.style.fontWeight = 'bold';
        newAuthorInfo.appendChild(newAuthor);
    
        let newAuthorData = document.createElement('p');
        /*Houses Library Data*/
        newAuthorData.innerHTML = `${newBookGenerate.author}`;
        newAuthorData.classList.add("authorData");
        newAuthorInfo.appendChild(newAuthorData);


    /*Pages element with children*/
    let newPagesInfo = document.createElement('div');
    newPagesInfo.classList.add("pagesInfo");
    newPagesInfo.classList.add("bookData");
    book.appendChild(newPagesInfo);

        let newPages = document.createElement('p');
        newPages.innerHTML = 'Page Count:';
        newPages.classList.add("pages");
        newPages.style.fontWeight = 'bold';
        newPagesInfo.appendChild(newPages);

        let newPagesData = document.createElement('p');
        /*Houses Library Data*/
        newPagesData.innerHTML = `${newBookGenerate.pages}`;
        newPagesData.classList.add("pagesData");
        newPagesInfo.appendChild(newPagesData);



    /*Read element with read class*/
    let newReadInfo = document.createElement('div');
    newReadInfo.classList.add("readInfo");
    newReadInfo.classList.add("bookData");
    book.appendChild(newReadInfo);

        let newRead = document.createElement('p');
        newRead.innerHTML = 'Read:';
        newRead.classList.add("read");
        newRead.style.fontWeight = 'bold';
        newReadInfo.appendChild(newRead);

        let newReadData = document.createElement('select');
        newReadData.classList.add("readData");
        newReadData.id = 'readInput';
        newReadInfo.appendChild(newReadData);
            
            let readDataOptionYes = document.createElement('option');
            readDataOptionYes.innerHTML = 'Yes';
            readDataOptionYes.value = 'Yes';
            newReadData.appendChild(readDataOptionYes)

            let readDataOptionNo = document.createElement('option');
            readDataOptionNo.innerHTML = 'No';
            readDataOptionNo.value = 'No';
            newReadData.appendChild(readDataOptionNo);
    
    if (newBookGenerate.read == 'Yes') {
        readDataOptionYes.setAttribute("selected", "");
    } else {
        readDataOptionNo.setAttribute("selected", "");
    };
    
    /*I'm leaving this here as a comparison */

    /*newReadData.addEventListener('change', a => {
        let bookList = document.querySelectorAll('.book');
        console.log(bookList);
        for (i = 0; i < (bookList.length) - 1; i++) {
            let bookListReadValue = bookList[i].querySelector('#readInput');
            if (library[i].read !== bookListReadValue.value) {
                library[i].read = bookListReadValue.value;
            }
        }
    })*/

    // I'm so hyped that I was able to make this.  It's beautiful.  It's a revised one line version of the above eventlistener that doesn't require a loop.
    newReadData.addEventListener('change', a => {library[Array.from(a.target.parentNode.parentNode.parentNode.children).indexOf(a.target.parentNode.parentNode)].read = a.target.value;})

    let removeButton = document.createElement('button');
    removeButton.classList.add('removeButton');
    removeButton.type = 'button';
    removeButton.innerHTML = 'X'
    book.appendChild(removeButton);

    removeButton.addEventListener('click', a => a.target.parentNode.remove())



    bookGrid.appendChild(book);
}

/* Custom Book Button */
function customBookButton() {
    let customBook = document.createElement('div');
    customBook.classList.add("book")
    customBook.id = 'newBookDiv';
    let customBookAddButton = document.createElement('img');
    customBookAddButton.src = 'assets/plus-circle.svg';
    customBookAddButton.id = 'customBookButton';
    customBook.appendChild(customBookAddButton);
    bookGrid.appendChild(customBook);
    document.getElementById('customBookButton').addEventListener('click', a => {
        document.getElementById('newBookDiv').remove();
        customBookForm();
    });
};

/* Custom Book Form */
function customBookForm() {
    /* Create Initial Div with book class*/
    let book = document.createElement('div');
    book.classList.add("book");
    book.id = 'customBookForm';

    /*Title element with title class*/
    let newTitle = document.createElement('input');
    newTitle.classList.add("title");
    newTitle.id = 'titleInput'
    newTitle.placeholder = 'Title'
    newTitle.type = 'text';
    book.appendChild(newTitle);

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
    
        let newAuthorData = document.createElement('input');
        /*Houses Library Data*/
        newAuthorData.type = 'text';
        newAuthorData.classList.add("authorData")
        newAuthorData.id = 'authorInput'
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

        let newPagesData = document.createElement('input');
        /*Houses Library Data*/
        newPagesData.type = 'number';
        newPagesData.min = 1;
        newPagesData.classList.add("newPagesData")
        newPagesData.id = 'pagesInput'
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

        let newReadData = document.createElement('select');
        newReadData.classList.add("readData")
        newReadData.id = 'readInput'
        newReadInfo.appendChild(newReadData);
            
            let readDataOptionYes = document.createElement('option');
            readDataOptionYes.innerHTML = 'Yes';
            readDataOptionYes.value = 'Yes';
            newReadData.appendChild(readDataOptionYes)

            let readDataOptionNo = document.createElement('option');
            readDataOptionNo.innerHTML = 'No';
            readDataOptionNo.value = 'No';
            newReadData.appendChild(readDataOptionNo)



    let buttonDiv = document.createElement('div');
    buttonDiv.classList.add('buttonDiv');
    book.appendChild(buttonDiv);


    let newButton = document.createElement('button');
    newButton.innerHTML = 'Add Book'
    newButton.classList.add('addBookButton');
    newButton.id = 'addBookButton'
    buttonDiv.appendChild(newButton)

    let cancelButton = document.createElement('button');
    cancelButton.innerHTML = 'Cancel'
    cancelButton.classList.add('cancelBookButton');
    cancelButton.id = 'cancelBookButton'
    buttonDiv.appendChild(cancelButton)
    
    bookGrid.appendChild(book);

    document.getElementById('addBookButton').addEventListener('click', a => {
        let titleinput = document.getElementById('titleInput');
        let authorinput = document.getElementById('authorInput');
        let pagesinput = document.getElementById('pagesInput')
        let readinput = document.getElementById('readInput');
        library.push(new Book(
            `${titleinput.value}`,
            `${authorinput.value}`,
            `${pagesinput.value}`,
            `${readinput.value}`
        ))
        while (bookGrid.firstChild) {
            bookGrid.removeChild(bookGrid.firstChild)
        }
        generateGrid();
    });

    document.getElementById('cancelBookButton').addEventListener('click', a => {
        document.getElementById('customBookForm').remove();
        customBookButton();
    });
    
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

function generateGrid() {
    library.forEach(newBookGenerate => {
        newBook(newBookGenerate);
    });

    customBookButton();

}

generateGrid();