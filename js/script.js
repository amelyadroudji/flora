/////////STICKY NAVBAR
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar-nav");

var sticky = 40;

function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
}

try{

var options ={
  root:document.querySelector('#container'),
  rootMargin:"100px 0px",
  treshold: 0.5
};


  var imgAbout = document.querySelector(".img-about");
  var observer = new IntersectionObserver((entries) => {
      if(entries[0].intersectionRatio > 0){
        entries[0].target.classList.add("anim");
      }

  }, options);
  observer.observe(imgAbout);

var aboutPara = document.querySelector(".para-about");
observer1 =  new IntersectionObserver((entries) => {
    if(entries[0].intersectionRatio > 0){
      entries[0].target.classList.add("about-para");
    }

});

observer1.observe(aboutPara);

var hOneBlog = document.querySelector(".blog-h1");

observer2 =  new IntersectionObserver((entries) => {
    if(entries[0].intersectionRatio > 0){
      entries[0].target.classList.add("blog-h1-anim");
    }

}, options);

observer2.observe(hOneBlog);

var blogCards = document.querySelectorAll(".card");
observer3 =  new IntersectionObserver((entries) => {


    entries.forEach(entry => {
      if(entry.intersectionRatio > 0){
        entry.target.classList.add("card-animation");
      }

    })
}, options)

  blogCards.forEach(cards => {
    observer3.observe(cards);
  });
} catch {

}
  //TEST EMAIL, NAME INSTAGRAM
  var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  var name1 = document.querySelector(".first-name");
  var email = document.querySelector(".input-email");
  var subscribe = document.querySelector(".subscribe-btn");
  function test(){
      if(name1.value == "" || email.value == "" || mailformat.test(email.value) === false){
        console.log("field empty or you have entered an invalid email");

      }else {
            console.log("correct");
      }
  }

  subscribe.addEventListener("click", test);


/////CHANGE ITEM NAVBAR COLOR
function changeActive(){
  var currentLocation = location.href.split('#')[0];
  var links = document.querySelectorAll(".navbarNav li a");
   for(var i = 0; i<links.length; i++) {
       if(links[i].href.split("#")[0] === currentLocation){
          links[i].className += " active";
       }
   }


}
window.onload=changeActive;
