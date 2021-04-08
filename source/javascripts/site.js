
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
    if (window.pageYOffset > 30 && getParams() == false) {
      filters.style.top = "0";
    } else if (getParams()) {
      filters.style.top = "0";
    } else {
      filters.style.top = "-40px";
    }
  }
}

const deactivateTag = (tags, currentTag) => {
  tags.forEach((tag) => {
    if (tag != currentTag) {
      tag.classList.remove('active-tag');
    }
  })
}

const filterProjects = () => {
  const tags = document.querySelectorAll('.filter-tag');
  const anchor = document.getElementById('latest-projects');
  const projects = document.querySelectorAll('.card-project');

  tags.forEach((tag) => {
    tag.addEventListener('click', (e) => {
      tag.classList.add('active-tag');
      deactivateTag(tags, tag);
      projects.forEach((project) => {
        console.log(tag.innerText);
        if (project.dataset.tags.toUpperCase().split('/').includes(tag.innerText.toUpperCase())) {
          project.style.display = 'block';
        } else if (tag.innerText === "VIEW ALL") {
          project.style.display = 'block';
        } else {
          project.style.display = 'none';
        }
      });
      anchor.scrollIntoView();
    })
  })
}

window.onload = () => {
  revealFilters();
  filterProjects();
}
