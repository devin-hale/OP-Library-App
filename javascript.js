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

        document.body.appendChild(header);

        hLogo.addEventListener('click', () => window.location.href="https://github.com/dwhale2")
        
        //Book Grid
        let gridDiv = document.createElement('div');
        gridDiv.id = 'bookGrid'
        document.body.appendChild(gridDiv);
    };



    

    return {renderPage};
})();

myPage.renderPage();
console.log('Hey');