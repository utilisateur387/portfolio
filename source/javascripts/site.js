
const getParams = () => {
  const params = new URLSearchParams(window.location.search).toString().replace('=', '');
  if (params == "") {
    return false;
  } else {
    return true;
  }
}

const revealFilters = () => {
  window.onscroll = () => {
    const filters = document.getElementById('filters');
    if (window.pageYOffset > 60 && getParams() == false) {
      filters.style.top = "0";
    } else if (getParams()) {
      filters.style.top = "0";
    } else {
      filters.style.top = "-40px";
    }
  }
}

window.onload = () => {
  revealFilters();
}
