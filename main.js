/*This is burger menu */
(function() {
  var body = document.body;
  var burgerMenu = document.getElementsByClassName('b-menu')[0];
  var burgerContain = document.getElementsByClassName('b-container')[0];
  var burgerNav = document.getElementsByClassName('b-nav')[0];

  burgerMenu.addEventListener('click', function toggleClasses() {
    [body, burgerContain, burgerNav].forEach(function (el) {
      el.classList.toggle('open');
    });
  }, false);
})();

/*This is prevent */
var element = document.querySelector('form');
element.addEventListener('submit', event => {
  event.preventDefault();
  console.log('Form submission cancelled.');
  alert ("You can not submit.");
});

























/*example */

// var hamberger = document.getElementById("hamberger");
// var main_nav = document.querySelector("header nav")
// hamberger.addEventListener("click", function(){
//     console.log('thing');
//     main_nav.classList.toggle("submit");
// })