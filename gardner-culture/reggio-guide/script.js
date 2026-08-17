const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('#site-nav');
const gradeTabs = [...document.querySelectorAll('[data-grade-tab]')];
const gradePanels = [...document.querySelectorAll('[data-grade-panel]')];

function selectGrade(tab) {
  const grade = tab.dataset.gradeTab;
  gradeTabs.forEach((item) => {
    const selected = item === tab;
    item.setAttribute('aria-selected', String(selected));
    item.tabIndex = selected ? 0 : -1;
  });
  gradePanels.forEach((panel) => {
    panel.hidden = panel.dataset.gradePanel !== grade;
  });
}

gradeTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectGrade(tab));
  tab.addEventListener('keydown', (event) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    let nextIndex = index;
    if (event.key === 'ArrowLeft') nextIndex = (index - 1 + gradeTabs.length) % gradeTabs.length;
    if (event.key === 'ArrowRight') nextIndex = (index + 1) % gradeTabs.length;
    if (event.key === 'Home') nextIndex = 0;
    if (event.key === 'End') nextIndex = gradeTabs.length - 1;
    selectGrade(gradeTabs[nextIndex]);
    gradeTabs[nextIndex].focus();
  });
});

menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

nav.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
});

lucide.createIcons();
