//Page Render/Read/Write Module Pattern
const myPage = (() => {
    //Renders HTML
    const renderPage = () => {
        //Header
        let header = document.createElement('header');
        header.classList = 'header';
            //Text for Header
            let hText = document.createElement('p');
            hText.innerHTML = 'The Library';
            header.appendChild(hText);

            //Logo for header
            let hLogo = document.createElement('i')
            hLogo.classList = "fa-brands fa-square-github";
            hLogo.style = "color: #ffffff;";
            header.appendChild(hLogo)
            hLogo.addEventListener('click', () => window.location.href="https://github.com/dwhale2")

        document.body.appendChild(header);

        
        //Book Grid
        let gridDiv = document.createElement('div');
        gridDiv.id = 'bookGrid';
        document.body.appendChild(gridDiv);
    };

    //Renders Book Div to Grid

    const renderBook = (object) => {
        // Get DridDiv
        let gridDiv = document.getElementById('bookGrid');

        // Outer Book Div
        let bookDiv = document.createElement('div');
        bookDiv.classList = 'bookDiv';

        // Inner Title Div
        let titleDiv = document.createElement('h1');
        titleDiv.classList = 'titleDiv';
        titleDiv.innerHTML = object.title;
        bookDiv.appendChild(titleDiv);

        // Book Logo
        let bLogo = document.createElement('i')
        bLogo.classList = "fa-solid fa-book bLogo";
        bLogo.style = "color: #2e5e3c;"
        bookDiv.appendChild(bLogo)
        bLogo.addEventListener('click', a => {
            
            console.log(Array.from(document.querySelectorAll('.bookDiv')).indexOf(a.target.parentNode));
        })

        let textDiv = document.createElement('div');
        textDiv.classList = 'textContainer';
        bookDiv.appendChild(textDiv);

        // Author
        let bAuth = document.createElement('p');
        bAuth.classList = "bAuth"
        bAuth.innerHTML = object.author
        textDiv.appendChild(bAuth);

        //Pages
        let bPages = document.createElement('p');
        bPages.classList = 'bPages';
        bPages.innerHTML = `${object.pages} Pages`;
        textDiv.appendChild(bPages);

        //Read?
        let bRead = document.createElement('p');
        bRead.classList = 'bRead';
        bRead.innerHTML = object.read;
        textDiv.appendChild(bRead)

        //Edit Button
        let bEdit = document.createElement('i');
        bEdit.classList = 'fa-solid fa-pencil bEdit';
        bookDiv.appendChild(bEdit);


        //Delete Button
        let bDel = document.createElement('i');
        bDel.classList = 'fa-solid fa-x bDel';
        bookDiv.appendChild(bDel);

        gridDiv.appendChild(bookDiv);
        
    }

    const renderPlus = () => {

        let gridDiv = document.getElementById('bookGrid');

        let bookDiv = document.createElement('div');
        bookDiv.classList = 'add-bookDiv';

        let bAdd = document.createElement('i');
        bAdd.classList = 'fa-solid fa-plus bAdd';
        bookDiv.appendChild(bAdd);

        gridDiv.appendChild(bookDiv);
    }

    const renderModal = () => {
        let modalBKG = document.createElement('div');
        modalBKG.id = 'modalBKG';
        let modalWin = document.createElement('div');
        modalWin.id = 'modalWin';
        modalBKG.appendChild(modalWin);
        document.body.appendChild(modalBKG);
    }

    const renderBookAdd = () => {
        let modalWin = document.getElementById('modalWin');

        let bookForm = document.createElement('form')

        let bookField = document.createElement('fieldset');
        bookForm.appendChild(bookField);

        let titleInput = document.createElement('input');
        titleInput.type = 'text';
        titleInput.placeholder = 'Book Title';
        titleInput.minLength = '1'
        titleInput.maxLength = '20';
        titleInput.name = 'title';
        bookField.appendChild(titleInput);

        let authorInput = document.createElement('input');
        authorInput.type = 'text';
        titleInput.minLength = '1'
        authorInput.placeholder = 'Book Author';
        authorInput.maxLength = '20';
        authorInput.name = 'author';
        bookField.appendChild(authorInput);

        let pagesInput = document.createElement('input');
        pagesInput.type = 'number';
        pagesInput.placeholder = 'Pages';
        pagesInput.min = '1';
        pagesInput.name = 'pages';
        bookField.appendChild(pagesInput);

        let inputRRLable = document.createElement('label');
        inputRRLable.for = 'Read';
        inputRRLable.innerHTML = 'Read'
        bookField.appendChild(inputRRLable);

        let inputRadioR = document.createElement('input');
        inputRadioR.type = 'Radio'
        inputRadioR.name = 'Read'
        inputRadioR.value = 'Read'
        inputRadioR.id = 'Read'
        bookField.appendChild(inputRadioR);

        let inputRURLable = document.createElement('label');
        inputRURLable.for = 'Not Read';
        inputRURLable.innerHTML = 'Not Read'
        bookField.appendChild(inputRURLable);

        let inputRadioUR = document.createElement('input');
        inputRadioUR.type = 'Radio'
        inputRadioUR.name = 'Read'
        inputRadioUR.required = true;
        inputRadioUR.value = 'Not Read'
        inputRadioUR.id = 'Not Read'
        bookField.appendChild(inputRadioUR);

        let addSave = document.createElement('button')
        addSave.type = 'button'
        addSave.id = 'Save'
        addSave.innerHTML = 'Save'
        bookField.appendChild(addSave);

        let addCancel = document.createElement('button')
        addCancel.type = 'button'
        addCancel.id = 'Cancel'
        addCancel.innerHTML = 'Cancel'
        bookField.appendChild(addCancel);



        modalWin.appendChild(bookForm);
        
    }
    

    return {renderPage, renderBook, renderPlus, renderModal, renderBookAdd};
})();

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    
}



myPage.renderPage();
myPage.renderPlus();
myPage.renderModal();
myPage.renderBookAdd();
console.log('Hey');