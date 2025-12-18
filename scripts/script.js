let mainEl = document.querySelector('main');

mainEl.style.backgroundColor = "var(--main-bg)";

mainEl.innerHTML = '<h1>DOM Maniputlation</h1>';

mainEl.classList.add('flex-ctr');

/////////// Part 2 /////////
let topMenuEL = document.getElementById("top-menu");

topMenuEL.style.height = "100%";

topMenuEL.style.backgroundColor = "var(--top-menu-bg)"

topMenuEL.classList.add("flex-around");



///////////////// Part 3.2 
let subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)"
subMenuEl.classList.add("flex-around");


// Hiding css properties
subMenuEl.style.position = 'absolute';
subMenuEl.style.top = '0';



///////Part 3//////

// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    {
        text: 'catalog', href: '#', subLinks: [
            { text: 'all', href: '/catalog/all' },
            { text: 'top selling', href: '/catalog/top' },
            { text: 'search', href: '/catalog/search' },
        ]
    },
    {
        text: 'orders', href: '#', subLinks: [
            { text: 'new', href: '/orders/new' },
            { text: 'pending', href: '/orders/pending' },
            { text: 'history', href: '/orders/history' },
        ]
    },
    {
        text: 'account', href: '#', subLinks: [
            { text: 'profile', href: '/account/profile' },
            { text: 'sign out', href: '/account/signout' },
        ]
    },
];
for (let link of menuLinks) {
    let anchor = document.createElement('a');
    anchor.setAttribute('href', link.href);
    anchor.textContent = link.text;
    topMenuEL.appendChild(anchor);
}

// Lab 4.2
// const topMenuLinks = topMenuEl.querySelectorAll('a');
topMenuEL.addEventListener('click', function (hClicker) {
    hClicker.preventDefault();
    if (hClicker.target.tagName !== 'A') {
        return;
    }
    // console.log(hClicker.target.textContent);


});


const topMenuLinks = topMenuEL.querySelectorAll("a");

topMenuEL.addEventListener("click", function (cPress) {

    cPress.preventDefault();
    if (cPress.target.tagName !== "A") {
        return;
    }
    console.log(cPress.target.textContent.toLowerCase());

    for (const link of topMenuLinks) {
        link.classList.remove("active");
    }
    cPress.target.classList.toggle("active");

    let clickedLink = cPress.target;
    



});



// const topMenuLinks = document.querySelectorAll("a");

// for (const link of topMenuLinks) {
//   link.addEventListener("click", function () {

//     for (const otherLink of topMenuLinks) {
//       otherLink.classList.remove("active");
//     }

//     this.classList.toggle("active");
//   });
// }
