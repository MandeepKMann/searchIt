const searchIt = {};

searchIt.googleSearch = () => {

    const formElement = document.querySelector('#search')
    formElement.addEventListener('submit', function (e) {
        e.preventDefault();

        const textElement = document.querySelector('textarea');
        const userSearch = textElement.value.replaceAll(' ', '+').split("\n");
        console.log(userSearch)

        // userSearch.forEach(search => {
        //     const newLi = document.createElement('li')
        //     newLi.innerHTML = `<a href="https://www.google.com/search?q=${search}">Click Me!</a>`
        //     const linksList = document.querySelector('.links')
        //     linksList.appendChild(newLi)
        // });
        
        for (let i = 0; i < userSearch.length; i++) {
            window.open(`https://www.google.com/search?q=${userSearch[i]}`)
        };
        

    })

    // const url = `https://www.google.com/search?${userSearch}`
}

//https://www.google.com/search?q=29+baylawn+circle



// Init
searchIt.init = () => {
    searchIt.googleSearch()
}

searchIt.init();