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

  tags.forEach((tag) => {
    const tagName = tag.querySelector('.tag-name');
    const countElement = tag.querySelector('.count');

    tag.addEventListener('click', (e) => {
      let count = 0;

      projects.forEach((project) => {
        const projectImage = project.querySelector('.container-img');
        if (project.dataset.tags.toUpperCase().split('/').includes(tagName.innerText.toUpperCase())) {
          count += 1;
          project.style.display = 'block';
        } else if (tagName.innerText === "VIEW ALL") {
          count = tags.length - 1;
          project.style.display = 'block';
        } else {
          project.style.display = 'none';
        }

        projectImage.classList.add('fade');
        projectImage.addEventListener('animationend', () => {
          projectImage.classList.remove('fade');
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
  ScrollReveal().reveal('.container-img', { delay: 100 });
}
