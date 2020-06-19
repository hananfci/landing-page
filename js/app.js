

$(function(){

  /**
* Global Variables
* 
*/
const newli = document.createElement('li');
const navbarlist = document.getElementById("navbar__list");
const sections = Array.prototype.slice.call(document.getElementsByTagName('section'));

/**
* End Global Variables
* Start scrollto Functions
* 
*/


function scrollto(position){


const elr = document.getElementById(position);

// Scroll to section on link click
elr.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
//function to show if section in viewport or not 

function isElementInView(element) {
  const bounds = element.getBoundingClientRect();
  return (
    bounds.top >= 0 &&
    bounds.left >= 0 &&
    bounds.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    bounds.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function OnScrollWindow() {
  let NavLinks = document.querySelectorAll("nav ul li ");
  let homeid = document.getElementById("home");
  sections.forEach(section => section.classList.remove('section-active'));
  if (isElementInView(homeid)) {
      navbarlist.childNodes[0].classList.add('navbar-active');
      navbarlist.childNodes.forEach((Link, index) =>
        index && Link.classList.remove('navbar-active'));
      homeid.classList.add("section_active")
  
  } else {

      NavLinks.forEach(link => {
       
       let sectionname= link.innerText.toLowerCase();
       
       let section =document.getElementById(sectionname); 
       if (isElementInView(section)) {
        document.querySelector('.navbar-active').classList.remove('navbar-active')
        document.querySelector('.section_active').classList.remove('section_active')
        link.classList.add("navbar-active");
        section.classList.add("section_active")
       }
      
      });
     }
  
  
}

window.onscroll = OnScrollWindow;

/* build dynamic menu items */
function rendermenu () {
  const homesectionid= document.getElementById("home")
  const homeli = document.createElement('li');
  homeli.innerText = 'Home';
// Set Home sections as active
  homeli.classList.add("menu__link", "navbar-active");    
  homeli.addEventListener('click', function (e) {
    document.querySelector('.navbar-active').classList.remove('navbar-active')
    e.target.classList.add('navbar-active')
    document.querySelector('.section_active').classList.remove('section_active')
    homesectionid.classList.add('section_active')
    scrollto("home")
   });
 
  navbarlist.appendChild(homeli);
  sections.forEach(section => {
      
     const elmid = section.id;
     const newli = document.createElement('li');
      newli.innerText = elmid.toUpperCase(); 
     const sectionselector =  document.getElementById(elmid)
      newli.className="menu__link";
// Set sections as active
      newli.addEventListener('click', function (e) {
        document.querySelector('.navbar-active').classList.remove('navbar-active')
        e.target.classList.add('navbar-active')
        document.querySelector('.section_active').classList.remove('section_active')
        sectionselector.classList.add('section_active')
       scrollto(elmid)
       
  });

      navbarlist.appendChild(newli);
});
  
 }

 
 rendermenu();

 OnScrollWindow();



})




