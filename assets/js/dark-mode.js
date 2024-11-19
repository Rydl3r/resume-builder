const togglerBtn = document.querySelector('.toggler-btn');
const currentTheme = localStorage.getItem('theme') || null;

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
}

const switchTheme = () => {
  const isDarkMode =
    document.documentElement.getAttribute('data-theme') === 'dark';
  const newMode = isDarkMode ? 'light' : 'dark';

  document.documentElement.setAttribute('data-theme', newMode);
  localStorage.setItem('theme', newMode);
};

togglerBtn.addEventListener('click', switchTheme, false);
