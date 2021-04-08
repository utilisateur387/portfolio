
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

const filterProjects = () => {
  const tags = document.querySelectorAll('.filter-tag');
  console.log(tags);
  const projects = document.querySelectorAll('.card-project');
  // const projectList = {};
  projects.forEach((project) => {
    console.log(project.dataset.tags.split('/'));
    // project.style.display = "none";
  });
}

window.onload = () => {
  revealFilters();
  filterProjects();
}
