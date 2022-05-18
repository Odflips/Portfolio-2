const btn = document.getElementById('btn');

function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classlist.toggle('active');


    
}



btn.addEventListener('click', toggleMenu);