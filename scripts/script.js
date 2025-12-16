let mainEl = document.querySelector('main');

mainEl.style.backgroundColor = "var(--main-bg)";

mainEl.innerHTML = '<h1>DOM Maniputlation</h1>';

mainEl.classList.add('flex-ctr');

/////////// Part 2 /////////
const topMenuEL = document.getElementById("top-menu");

topMenuEL.style.height = "100%";

topMenuEL.style.backgroundColor = "var(--top-menu-bg)"

topMenuEL.classList.add("flex-around");

///////Part 3//////

// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
];

for (let link of menuLinks) {
    let anchor = document.createElement('a');
    anchor.setAttribute('href', link.href);
    anchor.textContent = link.text;
    topMenuEL.appendChild(anchor);
}
