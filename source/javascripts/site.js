// const getParams = () => {
//   const params = new URLSearchParams(window.location.search).toString().replace('=', '');
//   if (params == "") {
//     return false;
//   } else {
//     return true;
//   }
// }

// import { smoothscroll } from 'smoothscroll-polyfill';
// smoothscroll.polyfill();

const revealFilters = () => {
  window.onscroll = () => {
    const filters = document.getElementById('filters');
    if (window.pageYOffset > 30) {
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
      const countToRemove = tag.querySelector('.count');
      console.log(countToRemove);
      countToRemove.style.display = "none";
    }
  })
}

const filterProjects = () => {
  const tags = document.querySelectorAll('.filter-tag');
  const anchor = document.getElementById('latest-projects');
  const projects = document.querySelectorAll('.card-project');

  tags.forEach((tag) => {
    const tagName = tag.querySelector('.tag-name');
    const count = tag.querySelector('.count');

    tag.addEventListener('click', (e) => {
      tag.classList.add('active-tag');
      count.style.display = "inline";

      deactivateTag(tags, tag);
      projects.forEach((project) => {
        if (project.dataset.tags.toUpperCase().split('/').includes(tagName.innerText.toUpperCase())) {
          project.style.display = 'block';
        } else if (tag.innerText === "VIEW ALL") {
          project.style.display = 'block';
        } else {
          project.style.display = 'none';
        }
      });
      anchor.scrollIntoView({behavior: 'smooth'});
    })
  })
}

// const pageTransition = () => {
//   const projectCovers = document.querySelectorAll('.img-card');
//   projectCovers.forEach((project) => {
//     project.addEventListener('click', (e) => {
//       e.preventDefault();
//       project.scrollIntoView({behavior: 'smooth'})
//     })
//   })
// }

window.onload = () => {
  revealFilters();
  filterProjects();
  // pageTransition();
}
