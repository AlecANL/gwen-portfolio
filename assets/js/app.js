import { projects } from './data.js';
import { Project } from './components/Project.js';

const $projects = document.getElementById('projects-list'),
  $navList = document.getElementById('nav'),
  $closeIcon = document.querySelector('.close-icon'),
  $iconMenu = document.querySelector('.icon-menu');

function showMenu() {
  $navList.classList.add('active');
  $closeIcon.style.display = 'block';
}
function closeMenu() {
  $navList.classList.remove('active');
  $closeIcon.style.display = 'none';
}

function loadComponent(project) {
  const el = document.createElement('div');
  el.innerHTML = Project(project);
  return el.firstElementChild;
}

function renderDOM() {
  projects.forEach(el => {
    $projects.appendChild(loadComponent(el));
  });
}
document.addEventListener('DOMContentLoaded', renderDOM);
$iconMenu.addEventListener('click', showMenu);
$closeIcon.addEventListener('click', closeMenu);
