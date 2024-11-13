const getBooks = function () {
  fetch('https://striveschool-api.herokuapp.com/books', {})
    .then((response) => {
      console.log('oggetto del response', response)
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('Errore: risposta del server non è OK')
      }
    })
    .then((books) => {
      console.log('ECCO I LIBRI', books)
      const booksRow = document.getElementById('books-row')
      books.forEach((book) => {
        const newCard = document.createElement('div')
        newCard.classList.add('col', 'col-6', 'col-md-4', 'col-lg-3')
        newCard.innerHTML = `
        <div class="card border border-3 border-dark rounded-3 shadow-lg">
          <img
            src="${book.img}"
            class="card-img-top"
            alt="book-cover"
          />
          <div class="card-body">
            <h5 class="card-title">${book.title}</h5>
            <p class="card-text">Prezzo: ${book.price} $</p>
            <button class="btn btn-warning border border-1 border-dark shadow-lg">Scarta</button>
            <button class="btn btn-dark border border-1 border-light shadow-lg">Compra</button>
          </div>
        </div>
        `
        booksRow.appendChild(newCard)
      })
    })
    .catch((error) => {
      console.log(error)
    })
}

getBooks()
