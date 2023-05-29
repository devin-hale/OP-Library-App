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

    const renderBook = (title, author, pages, read) => {
        // Get DridDiv
        let gridDiv = document.getElementById('bookGrid');

        // Outer Book Div
        let bookDiv = document.createElement('div');
        bookDiv.classList = 'bookDiv';

        // Inner Title Div
        let titleDiv = document.createElement('h1');
        titleDiv.classList = 'titleDiv';
        titleDiv.innerHTML = title;
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
        bAuth.innerHTML = author
        textDiv.appendChild(bAuth);

        //Pages
        let bPages = document.createElement('p');
        bPages.classList = 'bPages';
        bPages.innerHTML = `${pages} Pages`;
        textDiv.appendChild(bPages);

        //Read?
        let bRead = document.createElement('p');
        bRead.classList = 'bRead';
        bRead.innerHTML = read;
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

    

    return {renderPage, renderBook, renderPlus};
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
myPage.renderBook('Harry Potter and the Pee Pee Poo Poo', 'Bobby Hill', 492, 'Read');
myPage.renderBook('Bobby', 'Bobby Hill', 492, 'Read');
myPage.renderPlus();
console.log('Hey');