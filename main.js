const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenuIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

/*
menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}
*/
/*
const menuDesktop = document.querySelector('.inactive')
const navEmail = document.querySelector('.navbar-email');

navEmail.addEventListener('click', () => {
    menuDesktop.classList.toggle('inactive');
});
*/


/* Buenas practicas si voy a usar funcion anonima

Las buenas prácticas no recomiendan esto, ya que si te ves en la necesidad de remover el evento, al ser anónimo, no podrás hacerlo. Una alternativa si quieres usar funciones flecha es esto:

navEmail.addEventListener("click", toggleDesktopMenu);

const toggleDesktopMenu = () => {
  desktopMenu.classList.toggle("inactive");
};

*/


menuEmail.addEventListener("click", function(){toggleDesktopMenu(desktopMenu)});
burguerMenuIcon.addEventListener("click", function(){toggleDesktopMenu(mobileMenu)});

function toggleDesktopMenu(elemento){

    elemento.classList.toggle("inactive");
    console.log('ei')
   
}



    

    