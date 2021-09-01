 const searchFun = () => {
     const searchField = document.getElementById('searchfield');
     const searchText = searchField.value; 
     searchField.value = "";
     const url=(`http://openlibrary.org/search.json?q=${searchText}`);
     console.log(url);
     fetch(url)
     .then(res => res.json())
     .then(data => displaySearchBooks(data.docs));
 }

 const displaySearchBooks = books => {
     const showResults = document.getElementById('results');
     showResults.textContent = '';
     books.forEach(book =>{
         const div = document.createElement('div');
         div.classList.add('col');
         div.innerHTML =`
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
                            <h6 class="card-title text-center">Language: ${book.language}
                            </h6>
                            // <p class="card-text text-center">This is a wider card with supporting text below as a
                            //     natural lead-in to
                            //     additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
            </div>
         `;
         showResults.appendChild(div);
     })
 }