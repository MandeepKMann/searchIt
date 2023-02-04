const searchIt = {};

searchIt.googleSearch = () => {
    // select textarea and data inside, then change spaces to + and separate data by line
    const textElement = document.querySelector('textarea');
    const userSearch = textElement.value.replaceAll(' ', '+').split("\n");

    // add event listener to the form
    const formElement = document.querySelector('#search')
    formElement.addEventListener('submit', (e) => {
        e.preventDefault();
        // append links to the page for each search and replace '+' back to ' ' to make it easier to read
        userSearch.forEach(search => {
            const newLi = document.createElement('li')
            newLi.innerHTML = `<a href="https://www.google.com/search?q=${search}">${search.replaceAll('+', ' ')}</a>`
            const linksList = document.querySelector('.links')
            linksList.appendChild(newLi)
        });
    });

    // add event listener to button to allow it to open all links
    const openButton = document.querySelector('.openAll');
    openButton.addEventListener('click', (e) => {
        // for loop to iterate through array of strings to be searched
        for (let i = 0; i < userSearch.length; i++) {
            window.open(`https://www.google.com/search?q=${userSearch[i]}`)
        };
    });
}

// Init
searchIt.init = () => {
    searchIt.googleSearch()
}

searchIt.init();