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
});
