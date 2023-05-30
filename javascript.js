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

        bEdit.addEventListener('click', a => {
            let bookEdIndex = Array.from(document.querySelectorAll('.bookDiv')).indexOf(a.target.parentNode);
            myPage.renderModal();
            myPage.renderBookEdit(Lib[bookEdIndex], bookEdIndex);

        })


        //Delete Button
        let bDel = document.createElement('i');
        bDel.classList = 'fa-solid fa-x bDel';
        bookDiv.appendChild(bDel);

        bDel.addEventListener('click', a => {
            let bookEdIndex = Array.from(document.querySelectorAll('.bookDiv')).indexOf(a.target.parentNode);
            myPage.renderModal();
            myPage.renderBookDel(Lib[bookEdIndex], bookEdIndex);
        })

        gridDiv.appendChild(bookDiv);
        
    }

    const renderPlus = () => {

        let gridDiv = document.getElementById('bookGrid');

        let bookDiv = document.createElement('div');
        bookDiv.classList = 'add-bookDiv';
        bookDiv.id = 'add-bookDiv'

        let bAdd = document.createElement('i');
        bAdd.classList = 'fa-solid fa-plus bAdd';
        bookDiv.appendChild(bAdd);

        bAdd.addEventListener('click', a => {
            myPage.renderModal();
            myPage.renderBookAdd();
        })

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
        bookForm.id = 'bookForm'

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

        addSave.addEventListener('click', () => {
            let formEl = document.getElementById('bookForm');
            let formElData = new FormData(formEl);
            let formDataObject = Object.fromEntries(formElData.entries());
            let newBook = new Book(formDataObject);
            newBook.storeBook();
            document.getElementById('modalBKG').remove();
            Array.from(document.querySelectorAll('.bookDiv')).forEach(a => a.remove())
            document.getElementById('add-bookDiv').remove();
            Lib.forEach(object => myPage.renderBook(object));
            myPage.renderPlus();
            
        } )

        let addCancel = document.createElement('button')
        addCancel.type = 'button'
        addCancel.id = 'Cancel'
        addCancel.innerHTML = 'Cancel'
        bookField.appendChild(addCancel);

        addCancel.addEventListener ('click', () => {
            document.getElementById('modalBKG').remove();
        })



        modalWin.appendChild(bookForm);
        
    }

    const renderBookEdit = (object, index) => {
        let modalWin = document.getElementById('modalWin');

        let bookForm = document.createElement('form')
        bookForm.id = 'bookForm'

        let bookField = document.createElement('fieldset');
        bookForm.appendChild(bookField);

        let titleInput = document.createElement('input');
        titleInput.type = 'text';
        titleInput.value = object.title
        titleInput.minLength = '1'
        titleInput.maxLength = '20';
        titleInput.name = 'title';
        bookField.appendChild(titleInput);

        let authorInput = document.createElement('input');
        authorInput.type = 'text';
        titleInput.minLength = '1'
        authorInput.placeholder = 'Book Author';
        authorInput.value = object.author;
        authorInput.maxLength = '20';
        authorInput.name = 'author';
        bookField.appendChild(authorInput);

        let pagesInput = document.createElement('input');
        pagesInput.type = 'number';
        pagesInput.placeholder = 'Pages';
        pagesInput.value = object.pages;
        pagesInput.min = '1';
        pagesInput.name = 'pages';
        bookField.appendChild(pagesInput);

        let inputRRLable = document.createElement('label');
        inputRRLable.for = 'Read';
        inputRRLable.innerHTML = 'Read'
        bookField.appendChild(inputRRLable);

        let inputRadioR = document.createElement('input');
        inputRadioR.type = 'Radio'
        inputRadioR.name = 'read'
        inputRadioR.value = 'Read'
        inputRadioR.id = 'Read'
        bookField.appendChild(inputRadioR);
        if (object.read == 'Read') {
            inputRadioR.checked = true;
        }

        let inputRURLable = document.createElement('label');
        inputRURLable.for = 'Not Read';
        inputRURLable.innerHTML = 'Not Read'
        bookField.appendChild(inputRURLable);

        let inputRadioUR = document.createElement('input');
        inputRadioUR.type = 'Radio'
        inputRadioUR.name = 'read'
        inputRadioUR.required = true;
        inputRadioUR.value = 'Not Read'
        inputRadioUR.id = 'Not Read'
        bookField.appendChild(inputRadioUR);
        if (object.read == 'Not Read') {
            inputRadioUR.checked = true;
        }

        let addSave = document.createElement('button')
        addSave.type = 'button'
        addSave.id = 'Save'
        addSave.innerHTML = 'Save'
        bookField.appendChild(addSave);

        addSave.addEventListener('click', () => {
            let formEl = document.getElementById('bookForm');
            let formElData = new FormData(formEl);
            let formDataObject = Object.fromEntries(formElData.entries());
            Book.updateBook(formDataObject);
            document.getElementById('modalBKG').remove();
            Array.from(document.querySelectorAll('.bookDiv')).forEach(a => a.remove())
            document.getElementById('add-bookDiv').remove();
            Lib.forEach(object => myPage.renderBook(object));
            myPage.renderPlus();
            
        } )

        let addCancel = document.createElement('button')
        addCancel.type = 'button'
        addCancel.id = 'Cancel'
        addCancel.innerHTML = 'Cancel'
        bookField.appendChild(addCancel);

        addCancel.addEventListener ('click', () => {
            document.getElementById('modalBKG').remove();
        })



        modalWin.appendChild(bookForm);
        
    }

    const renderBookDel = (object, index) => {
        let modalWin = document.getElementById('modalWin');

        let delDiv = document.createElement('div');
        delDiv.id = 'delDiv'

        let delText = document.createElement('p');
        delText.innerHTML = `Delete "${object.title}"?`;
        delDiv.appendChild(delText);

        let addSave = document.createElement('button')
        addSave.type = 'button'
        addSave.id = 'Confirm'
        addSave.innerHTML = 'Confirm'
        delDiv.appendChild(addSave);

        addSave.addEventListener('click', () => {
            Book.removeBook(index);
            document.getElementById('modalBKG').remove();
            Array.from(document.querySelectorAll('.bookDiv')).forEach(a => a.remove())
            document.getElementById('add-bookDiv').remove();
            Lib.forEach(object => myPage.renderBook(object));
            myPage.renderPlus();
            
        } )

        let addCancel = document.createElement('button')
        addCancel.type = 'button'
        addCancel.id = 'Cancel'
        addCancel.innerHTML = 'Cancel'
        delDiv.appendChild(addCancel);

        addCancel.addEventListener ('click', () => {
            document.getElementById('modalBKG').remove();
        })

        modalWin.appendChild(delDiv);
    }
    

    return {renderPage, renderBook, renderPlus, renderModal, renderBookAdd, renderBookEdit, renderBookDel};
})();

const Lib = [];

class Book {
    constructor(object) {
        this.title = object.title;
        this.author = object.author;
        this.pages = object.pages;
        this.read = object.read;
    }

    storeBook() {
        Lib.push(this);
    }

    static findBook(object) {
        return Lib.findIndex(object);
    }

    static updateBook(object, bookIndex) {
        Lib.splice(bookIndex, 1, object)
    }

    static removeBook(index) {
        Lib.splice(index, 1);
    }
    
}

let updateFlag = false;

let Bobby =new Book({title:'Bobby', author:'Billy', pages:52, read:'Not Read'})
Bobby.storeBook();

myPage.renderPage();
Lib.forEach(object => myPage.renderBook(object))
myPage.renderPlus();
console.log(Lib);
console.log('Hey');