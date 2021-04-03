// // This is where it all goes :)
// require("turbolinks").start()

// import { revealFilters } from 'components/filters';

// document.addEventListener('turbolinks:load', () => {
//   // Call your functions here, e.g:
//   revealFilters();

// });

const revealFilters = () => {

  window.onscroll = () => {
    const filters = document.getElementById('filters');

    if (window.pageYOffset > 200) {
      filters.style.top = "0";
    } else {
      filters.style.top = "-40px";
    }
  }
}

revealFilters();
