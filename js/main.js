var o = 0;
function menuB() {
      let toS = document.querySelectorAll(".menu-content-div");
      let menu = document.querySelector(".menu");
      let leftSide = document.querySelector(".left-side");

      let btn = document.querySelector(".menu-burger-button");
      btn.addEventListener("click", function () {
            if (o == 0) {
                  toS.forEach(v => {
                        menu.style.transition = '1s ease';
                        menu.style.zIndex = "1";
                        menu.style.width = "234px";
                        toX();
                        blackout();
                        move();
                        leftSide.style.zIndex = 9;
                        v.style.transition = "1s ease";
                        v.style.transform = "translate(-75px, 0)";
                  });
                  o++;
            }
            else {
                  o--;
                  menu.style.transition = '1s ease';
                  menu.style.width = "80px";
                  bToburger();
                  whiteout();
                  moveBack();
                  toS.forEach(v => {
                        v.style.transition = "1s ease";
                        v.style.transform = "translate(75px, 0)";
                  });
      
            }
      });
}



// MOVINGS
function move() { 
      let mv = document.querySelector("#middle-section");
      mv.style.transition = "1s ease";
      mv.style.marginLeft = "-154px";
}
function moveBack() {
      let back = document.querySelector("#middle-section");
      back.style.transition = "1s ease";
      back.style.marginLeft = "0px";
}

// Blackout
function blackout() {
      let w = document.querySelector(".wrapper");

      w.style.transition = "1s ease";
      w.style.opacity = "1";
      w.style.width = "100%";
      w.style.height = "477%"
      w.style.position = "absolute";
      w.style.background = "rgba(30,30,40,.48)";
}

function whiteout() { 
      let w = document.querySelector(".wrapper");

      w.style.transition = "1s ease";

      w.style.opacity = "0";
}

function toX() { 
      let b1 = document.querySelector(".bar1");
      let b2 = document.querySelector(".bar2");
      let b3 = document.querySelector(".bar3");
      let holder = document.querySelector(".menu-burger-button");


      b1.style.transition = "1s ease";
      b2.style.transition = ".1s ease";
      b3.style.transition = "1s ease";

      b1.style.transform = "rotate(-45deg)";
      b1.style.position = "absolute";
      b2.style.opacity = "0";
      holder.style.height = '18px';
      b2.style.display = "none";
      b3.style.transform = "rotate(45deg)";
      b3.style.position = "absolute";
      
      b1.style.marginTop = "10px";
      b3.style.marginTop = "10px";

}

function bToburger() { 
      let b1 = document.querySelector(".bar1");
      let b2 = document.querySelector(".bar2");
      let b3 = document.querySelector(".bar3");

      b1.style.transition = "1s ease";
      b2.style.transition = ".9s ease";
      b3.style.transition = "1s ease";

      b1.style.transform = "rotate(0deg)";
      b1.style.position = "unset";
      b2.style.opacity = "1";
      b2.style.display = "block";
      b3.style.transform = "rotate(0deg)";
      b3.style.position = "unset";
      
      b1.style.marginTop = "3px";
      b3.style.marginTop = "3px";
}

// Close menu on click
function menuDirect() {
      let links = document.querySelectorAll(".menu-content-div");
      let menu = document.querySelector(".menu");
      links.forEach(v => {
            v.addEventListener('click', function () { 
                  menuB();
            });    
      });
}