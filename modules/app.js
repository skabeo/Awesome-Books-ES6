export default function initializePage() {
  const sections = document.getElementsByTagName('section');
  for (let i = 1; i < sections.length; i += 1) {
    sections[i].style.display = 'none';
  }

  const navLinks = document.querySelectorAll('nav a');
  navLinks[0].style.color = 'blue';

  for (let i = 0; i < navLinks.length; i += 1) {
    navLinks[i].addEventListener('click', function update(event) {
      event.preventDefault();
      for (let j = 0; j < sections.length; j += 1) {
        sections[j].style.display = 'none';
      }
      const target = this.getAttribute('href').substr(1);
      document.getElementById(target).style.display = 'block';

      for (let k = 0; k < navLinks.length; k += 1) {
        navLinks[k].style.color = 'black';
      }
      this.style.color = 'blue';
    });
  }

  sections[0].style.display = 'block';
}
