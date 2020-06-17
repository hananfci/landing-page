

$(function(){

  /**
* Global Variables
* 
*/
const newli = document.createElement('li');
const navbarlist = document.getElementById("navbar__list");
const sections = Array.prototype.slice.call(document.getElementsByTagName('section'));
const numsection= sections.length;
console.log(sections)
/**
* End Global Variables
* Start scrollto Functions
* 
*/

function scrollto(position){
debugger;

var elr = document.getElementById(position);

// Scroll to section on link click
elr.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
/* build dynamic menu items */
function rendermenu () {
  const homeli = document.createElement('li');
  homeli.innerText = 'Home';
// Set Home sections as active
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
// Set sections as active
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




