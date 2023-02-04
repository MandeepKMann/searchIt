const searchIt = {};

searchIt.googleSearch = () => {
    // select textarea and data inside, then change spaces to + and separate data by line
    const textElement = document.querySelector('textarea');
    const linksUl = document.querySelector('.linksUl')
    
    // add event listener to the form
    const formElement = document.querySelector('#search')
    formElement.addEventListener('submit', (e) => {
        e.preventDefault();
        const userSearch = textElement.value.replaceAll(' ', '+').split("\n");
        // append links to the page for each search and replace '+' back to ' ' to make it easier to read
        linksUl.innerHTML = '';
        userSearch.forEach(search => {
            const newLi = document.createElement('li')
            newLi.innerHTML = `<a href="https://www.google.com/search?q=${search}">${search.replaceAll('+', ' ')}</a>`
            linksUl.appendChild(newLi)
        });
        userSearch.length = 0;
    });
    // add event listener to button to allow it to open all links
    const openButton = document.querySelector('.openAll');
    openButton.addEventListener('click', (e) => {
        const userLink = textElement.value.replaceAll(' ', '+').split("\n");
        // for loop to iterate through array of strings to be searched
        for (let i = 0; i < userLink.length; i++) {
            window.open(`https://www.google.com/search?q=${userLink[i]}`)
        };
    });
}

// Init
searchIt.init = () => {
    searchIt.googleSearch()
}

searchIt.init();