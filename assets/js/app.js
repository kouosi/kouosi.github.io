"use strict";
/* Giscus management */
function sendMsg2Giscus(message) {
    const iframe = document.querySelector('iframe.giscus-frame');
    if (!iframe) return;
    iframe.contentWindow.postMessage({ giscus: message }, 'https://giscus.app');
}

/* Theme management */
const themeSwitcher = document.getElementById('theme-switcher');
/* Change icon according to them */
function changeIcon() {
    const isLightMode = document.documentElement.getAttribute('data-theme') === 'light';
    if (isLightMode) {
        themeSwitcher.innerHTML = "<i class='fa fa-moon' title='Switch to dark mode'></i>";
    } else {
        themeSwitcher.innerHTML = "<i class='fa fa-sun' title='Switch to light mode'></i>";
    }
}

/* Add event to change theme */
themeSwitcher.addEventListener('click', () => {
    const isLightMode = document.documentElement.getAttribute('data-theme') === 'light';
    const newTheme = isLightMode ? 'dark' : 'light';
    if (!isLightMode) {
        document.documentElement.setAttribute('data-theme', 'light');
    } else {
        document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem('theme', newTheme);
    changeIcon();
    sendMsg2Giscus({ setConfig: { theme: "gruvbox_" + newTheme } });
});

/* Set icon and comment theme on load */
const currentTheme = localStorage.getItem('theme') || 'dark';
changeIcon();
sendMsg2Giscus({ setConfig: { theme: "gruvbox_" + currentTheme } });

/* Navbar management */
const dropdown_toggle = document.getElementById('dropdown-toggle');
const nav_bar = document.querySelector('nav');

/* Toggle navbar */
dropdown_toggle.addEventListener('click', () => {
    nav_bar.classList.toggle('open');
});

/* Disable navbar */
document.addEventListener('click', (e) => {
    if (!nav_bar.contains(e.target) && !dropdown_toggle.contains(e.target)) {
        nav_bar.classList.remove('open');
    }
});
