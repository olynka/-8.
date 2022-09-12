
(() => {
  const refs = {
    openMenuBtn: document.querySelector(".button-menu"),
    closeMenuBtn: document.querySelector(".button"),
    menu: document.querySelector(".menu"),
    body: document.querySelector(".body"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
  }
})();
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import NewApiServise from './api-servise';
import TrendingMovesfilm from './trendingMovies'
import CardTemplates from './cardTemplates';
//об'єкт налаштувань
const options = {
    totalItems: 0,
    itemsPerPage: 20,
    visiblePages: 5,
    page: 1,
}
//повертає поточну сторінку

const formEl = document.querySelector('input__wraper')
console.log(formEl);
const container = document.querySelector('#pagination');
const pagination = new Pagination(container, options);

const page = pagination.getCurrentPage();
console.log(page);//повертає поточну сторінку


const ApiServise = new NewApiServise();

const cardTemplates=new CardTemplates()

ApiServise.getTrendingMovie(page).then(({ total_results }) => { pagination.reset(total_results) }).catch(error=>(error.masage))

 ApiServise
    .getTrendingMovies()
    .then(data => {
      const movieCard = createMovieCard(data.results);
     console.log(movieCard);
    })
    .then(data => {
      refs.mainList.insertAdjacentHTML('beforeend', data);
    });





//  pagіnation.on('afterMove',upDatePagіnation)

// function upDatePagіnation(e) {
//      const currentPage = e.page;
//     console.log(currentPage);
 
//   ApiServise
//     .getTrendingMovies(currentPage)
//       .then(({data,total_results}) => {
//         pagination.reset(total_results)
//       const movieCard = createMovieCard(data.results);
//       return movieCard;
//     })
//     .then(data => {
//       refs.mainList.insertAdjacentHTML('beforeend', data);
//     });

//      ApiServise
//     .getTrendingMovies(currentPage)
//       .then(({data,total_results}) => {
//         pagination.reset(total_results)
//       const movieCard = createMovieCard(data.results);
//       return movieCard;
//     })
//     .then(data => {
//       refs.mainList.insertAdjacentHTML('beforeend', data);
//     });
// }
