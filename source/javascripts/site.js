
const getParams = () => {
  const params = new URLSearchParams(window.location.search).toString().replace('=', '');
  const mainContent = document.querySelector('.wrapper-index');
  if (params != "") {
    mainContent.style.paddingTop = '40px';
  }
}

const revealFilters = () => {
  getParams();
  const params = new URLSearchParams(window.location.search).toString().replace('=', '');
  window.onscroll = () => {
    const filters = document.getElementById('filters');
    if (window.pageYOffset > 60 && params == "") {
      filters.style.top = "0";
    } else {
      filters.style.top = "-40px";
    }
  }
}

window.onload = () => {
  revealFilters();
}
