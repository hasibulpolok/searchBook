// search button function 

const searchFun = () => {
    const searchField = document.getElementById('searchfield');
    const searchText = searchField.value;
    searchField.value = "";

    // displayspinner 
    toggleSpinner('block');
    document.getElementById('totalresult').style.display = 'none';
    document.getElementById('nomatch').style.display = 'none';
    
    const url = (`https://openlibrary.org/search.json?q=${searchText}`);
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchBooks(data.docs));

}


// spinner function
const toggleSpinner = displayStyle => {
    document.getElementById('spinner').style.display = displayStyle;
}

// display search result 

const displaySearchBooks = books => {
    const showResults = document.getElementById('results');
    showResults.textContent = '';

    document.getElementById('totalresult').style.display = 'block';
    //  result not found 
    if (books.length === 0) {
        document.getElementById('nomatch').style.display = 'block'
    }

    // number of result found 

    if (books.length > 0) {
        document.getElementById('totalresult').innerText = `Total ${books.length} match found`
        books.length
    }

    books.forEach(book => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
         <div class="bookdesk">
                <div class="card-group">
                    <div class="card mx-2">
                        <img class="rounded mx-auto mt-2 d-block" src="https://covers.openlibrary.org/w/id/${book.cover_i}-M.jpg"
                            alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title text-center">Title: ${book.title}</h5>
                            <h6 class="card-title text-center">Author: ${book.author_name}</h6>
                            <h6 class="card-title text-center">Published on: ${book.publish_date}
                            </h6>
                            <h6 class="card-title text-center">First Publish: ${book.first_publish_year}
                            </h6>
                            <h6 class="card-title text-center">Language: ${book.language}
                            </h6>
                            <h6 class="card-title text-center">Publisher: ${book.publisher}
                            </h6>
                            
                        </div>
                    </div>
                </div>
            </div>
         `;

        showResults.appendChild(div);
    });
    //  hide spinner 
    toggleSpinner('none')

}

