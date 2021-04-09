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
      countToRemove.style.display = "none";
    }
  })
}

const filterProjects = () => {
  const tags = document.querySelectorAll('.filter-tag');
  const anchor = document.getElementById('latest-projects');
  const projects = document.querySelectorAll('.card-project');
  // const whiteRefresh = document.getElementById('white-refresh');

  tags.forEach((tag) => {
    const tagName = tag.querySelector('.tag-name');
    const countElement = tag.querySelector('.count');

    tag.addEventListener('click', (e) => {
      let count = 0;

      projects.forEach((project) => {
        if (project.dataset.tags.toUpperCase().split('/').includes(tagName.innerText.toUpperCase())) {
          count += 1;
          project.style.display = 'block';
        } else if (tagName.innerText === "VIEW ALL") {
          count = tags.length - 1;
          project.style.display = 'block';
        } else {
          project.style.display = 'none';
        }

        project.classList.add('white-refresh');
        project.addEventListener('animationend', () => {
          project.classList.remove('white-refresh');
        });
      });


      tag.classList.add('active-tag');
      countElement.innerText = ` (${count})`;
      countElement.style.display = "inline";
      deactivateTag(tags, tag);
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
