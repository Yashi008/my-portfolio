var typed = new Typed('#element', {
    strings: ['<i> a learning web developer</i>', '<i>an ML enthusiast<i>', 'a Python Developer'],
    typeSpeed: 50,
});

function scrollToSection(sectionId) {
const section = document.getElementById(sectionId);
if (section) {
section.scrollIntoView({ behavior: 'smooth' });
}
}