export default class BookShelf {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('book')) || [{ title: 'title 1', author: 'author 2' }, { title: 'title 1', author: 'author 2' }];
  }

  add(title, author) {
    this.books.push({ title, author });
    localStorage.setItem('book', JSON.stringify(this.books));
  }

  remove(book) {
    this.books = this.books.filter((b) => b !== book);
    localStorage.setItem('book', JSON.stringify(this.books));
  }

  render() {
    const bookList = document.querySelector('#book-list');
    bookList.innerHTML = '';

    if (this.books.length === 0) {
      const li = document.createElement('li');
      li.innerHTML = 'Add a Book';
      li.style.color = 'red';
      bookList.appendChild(li);
    }
    
    for (let i = 0; i < this.books.length; i += 1) {
      const book = this.books[i];
      const li = document.createElement('li');
      li.innerHTML = `${book.title} by ${book.author}`;
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Remove';
      deleteButton.classList.add('deleteButton');
      deleteButton.addEventListener('click', () => {
        this.remove(book);
        this.render();
      });
      li.appendChild(deleteButton);
      bookList.appendChild(li);

      if (i % 2 === 0) {
        li.style.backgroundColor = '#e9e9e9';
      }
    }
  }
}
