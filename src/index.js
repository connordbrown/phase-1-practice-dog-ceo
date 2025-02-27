
document.addEventListener('DOMContentLoaded', () => {

    // fetch dog images and add each one to DOM
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
                data.message.forEach(element => {
                    let img = document.createElement('img');
                    img.src = element;
                    const images = document.querySelector('#dog-image-container');
                    images.appendChild(img);
                });

        });


    // declare dataArr in global scope to allow unrestricted access
    let dataArr;

    // fetch dog breeds and add each one to DOM breed list
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
                // parse breed objects into dataArray
                dataArr = Object.keys(data.message);
                const breeds = document.querySelector('#dog-breeds');
                dataArr.forEach(element => addBreedToDOM(element, breeds));
        });
    

    // grab all li elements, change individual li color if clicked
    const dogs = document.querySelectorAll('#dog-breeds');
    for (let dog of dogs) {
        dog.addEventListener('click', (e) => e.target.style.color = 'red');
    };


    // grab dropdown list and add event listener
    const selectLetter = document.querySelector('#breed-dropdown');
    selectLetter.addEventListener('change', filterDogs);

    // filter dog breeds using dropdown list
    function filterDogs() {
        // create array filtered by first letter
        let newArr = dataArr.filter((dogBreed) => dogBreed.startsWith(selectLetter.value));
        // grab breed list
        const breeds = document.querySelector('#dog-breeds');
        // clear out breedlist by setting ul to empty string
        breeds.textContent = "";
        // append filtered array elements to breeds
        newArr.forEach(element => (addBreedToD(element, breeds)));
    }

    function addBreedToDOM(breedType, breedList) {
        let breed = document.createElement('li');
        breed.textContent = breedType;
        breedList.appendChild(breed);
    }
    
})