const sectionOne = document.querySelector('.section1');
const sections = document.querySelector('section');

const options = {
  threshold: 0,
  rootMargin: "-150px"
};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    }
    console.log(entry.target);
    entry.target.classList.toggle("inverse")
    observer.unobserve(entry.target);
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
})