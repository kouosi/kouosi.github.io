/* Switch theme */
function changeIcon() {
    if (document.body.dataset.theme == 'light') {
        themeSwitcher.innerHTML = "<i class='fa fa-sun'></i>";
    } else {
        themeSwitcher.innerHTML = "<i class='fa fa-moon'></i>";
    }
}
const themeSwitcher = document.getElementById('theme-switcher');

document.body.dataset.theme = localStorage.getItem('theme') || 'dark';
changeIcon();

function sendMsg2Giscus(message) {
    const iframe = document.querySelector('iframe.giscus-frame');
    if (!iframe) return;
    iframe.contentWindow.postMessage({ giscus: message }, 'https://giscus.app');
}

themeSwitcher.addEventListener('click', () => {
    const currentTheme = document.body.dataset.theme;
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    document.body.dataset.theme = newTheme;
    localStorage.setItem('theme', newTheme);
    changeIcon();
    sendMsg2Giscus({ setConfig: { theme: "gruvbox_" + newTheme } });
});

/* Toggle navbar */
document.getElementById('dropdown-toggle').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('open');
});

/* Disable navbar on click */
document.addEventListener('click', function(event) {
    const nav = document.querySelector('nav');
    const toggle = document.getElementById('dropdown-toggle');

    // Check if the click is outside the navigation menu and the toggle button
    if (!nav.contains(event.target) && !toggle.contains(event.target)) {
        nav.classList.remove('open');
    }
});
