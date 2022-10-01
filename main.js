const menuEmail = document.querySelector('.navbar-email');
const burguerMenuIcon = document.querySelector('.menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu')
const aside = document.querySelector('.product-detail')
const cardsContainer = document.querySelector('.cards-container');

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
menuCarritoIcon.addEventListener("click", function(){toggleDesktopMenu(aside)})

function toggleDesktopMenu(elemento){

    

    const isAsideClosed = aside.classList.contains('inactive');
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');


    //funciona medio mal porque que ladilla crear otras funciones
    if (isAsideClosed) {
        aside.classList.add('inactive'); 
    }

    if (isMobileMenuClosed) {
        mobileMenu.classList.add('inactive'); 
        console.log(isMobileMenuClosed)
      }

      elemento.classList.toggle("inactive");
}



const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Pantalla',
  price: 220,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Compu',
  price: 620,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});


  for (product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    // product= {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './assets/icons/mail.svg');
  
    productInfoFigure.appendChild(productImgCart);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);
  }



    

    