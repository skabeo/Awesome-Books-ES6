import BookShelf from './modules/bookshelf.js';
import initializePage from './modules/app.js';
import { DateTime } from './modules/luxon.js';

const myBookShelf = new BookShelf();

const addBook = document.querySelector('#add-book');
addBook.addEventListener('click', (event) => {
  event.preventDefault();
  const titleInput = document.querySelector('#title');
  const authorInput = document.querySelector('#author');
  const title = titleInput.value;
  const author = authorInput.value;
  if (title !== '' && author !== '') {
    myBookShelf.add(title, author);
    myBookShelf.render();
    titleInput.value = '';
    authorInput.value = '';
  }
});

myBookShelf.render();
initializePage();

function displayDateTime() {
  const dateTimeString = DateTime.now().toLocaleString(DateTime.DATETIME_FULL);
  document.querySelector('#date-time').innerHTML = dateTimeString;
}
setInterval(displayDateTime, 1000);
