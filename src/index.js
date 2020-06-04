import './css/styles.css';
import menuItemTemplate from './templates/menuItem.hbs';
import menu from './storage/menu.json';
import Theme from './utils/theme';
import moduleLs from './moduleLs/moduleLs';

const refs = {
  menu: document.querySelector('.js-menu'),
  body: document.querySelector('body'),
  input: document.querySelector('#theme-switch-control'),
};

if (moduleLs.load('theme') === Theme.DARK) {
  refs.body.classList.add(Theme.DARK);
  refs.input.setAttribute('checked', true);
} else {
  refs.body.class = Theme.LIGHT;
}

refs.input.addEventListener('change', ({ currentTarget }) => {
  if (currentTarget.checked) {
    refs.body.classList.remove(Theme.LIGHT);
    refs.body.classList.add(Theme.DARK);
    moduleLs.save('theme', Theme.DARK);
  } else {
    refs.body.classList.remove(Theme.DARK);
    refs.body.classList.add(Theme.LIGHT);
    moduleLs.save('theme', Theme.LIGHT);
  }
});

function buildListItem() {
  const markup = menu.map(el => menuItemTemplate(el)).join('');

  refs.menu.insertAdjacentHTML('beforeend', markup);
}

buildListItem();
