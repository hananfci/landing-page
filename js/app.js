/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

$(function(){

    /**
 * Define Global Variables
 * 
*/
const newli = document.createElement('li');
const navbarlist = document.getElementById("navbar__list");
const sections = Array.prototype.slice.call(document.getElementsByTagName('section'));
const numsection= sections.length;
console.log(sections)
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function scrollto(position){
  debugger;

  var elr = document.getElementById(position);
  $("html, body").animate({ scrollTop: $(elr ).offset().top }, 'slow');
   //elmnt.scrollIntoView();
}
  function rendermenu () {
    const homeli = document.createElement('li');
    homeli.innerText = 'Home';
    homeli.classList.add("menu__link", "navbar-active");    
    homeli.addEventListener('click', function (e) {
      document.querySelector('.navbar-active').classList.remove('navbar-active')
      e.target.classList.add('navbar-active')
      scrollto("home")
     });
   
    navbarlist.appendChild(homeli);
    sections.forEach(section => {
        
       const elmid = section.id;
       const value = $('#'+elmid).attr('data-nav')
       console.log(value);
       const newli = document.createElement('li');
        newli.innerText = value.toUpperCase();        
        newli.className="menu__link";
       
        newli.addEventListener('click', function (e) {
          document.querySelector('.navbar-active').classList.remove('navbar-active')
          e.target.classList.add('navbar-active')
         scrollto(elmid)
         
    });

        navbarlist.appendChild(newli);
});
    
   }
   rendermenu()

})

// Scroll to section on link click

// Set sections as active


