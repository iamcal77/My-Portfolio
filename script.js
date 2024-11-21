const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');



const activePage = ()=>{
    const header = document.querySelector('header');
    const barsBox = document.querySelector('.bars-animation');
    
    header.classList.remove('active');
    setTimeout(()=>{
        header.classList.add('active');
    },1100);

    navLinks.forEach(link =>{
        link.classList.remove('active');
    });
    barsBox.classList.remove('active');
    setTimeout(()=>{
        barsBox.classList.add('active');
    },1100);
    sections.forEach(section =>{
        section.classList.remove('active');
    });
}
navLinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        navLinks.forEach(nav => nav.classList.remove('active'));
        activePage();
        link.classList.add('active');
        setTimeout(()=>{
            sections[idx].classList.add('active');
        }, 1100);
    });

});

logoLink.addEventListener('click',()=>{
    if (!navLinks[0].classList.contains('active')){
        activePage();
    }
    navLinks[0].classList('active');
    setTimeout(()=>{
        sections[idx].classList.add('active');
    }, 1100);
});


const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll('.resume-detail');

        resumeBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        // Add 'active' class to the clicked button
        btn.classList.add('active');
        resumeDetails.forEach(detail =>{
            detail.classList.remove('active');
        })
        resumeDetails[idx].classList.add('active');
    });
        // Get the menu icon and nav
        const menuIcon = document.getElementById('menu-icon');
        const nav = document.querySelector('nav');
    
        // Toggle the menu when the icon is clicked
        menuIcon.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
});

const arrRight = document.querySelector('.portfolio-box .arrow-right');
const arrLeft = document.querySelector('.portfolio-box .arrow-left');
let index = 0;

const activatePortfolio = () => {
    const imgSlide = document.querySelector('.portfolio-carousel .image-slide');
    const portfolioDetails = document.querySelectorAll('.portfolio-detail');

    // Update the active portfolio detail and slide position
    const updatePortfolio = () => {
        // Update active portfolio details
        portfolioDetails.forEach((detail, i) => {
            detail.classList.toggle('active', i === index);
        });

        // Update slide position
        imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

        // Handle arrow disabling
        arrLeft.classList.toggle('disabled', index === 0);
        arrRight.classList.toggle('disabled', index === portfolioDetails.length - 1);
    };

    // Initialize portfolio view
    updatePortfolio();

    // Right arrow functionality
    arrRight.addEventListener('click', () => {
        if (index < portfolioDetails.length - 1) {
            index++;
            updatePortfolio();
        }
    });

    // Left arrow functionality
    arrLeft.addEventListener('click', () => {
        if (index > 0) {
            index--;
            updatePortfolio();
        }
    });
};

// Call the function to activate portfolio functionality
activatePortfolio();





