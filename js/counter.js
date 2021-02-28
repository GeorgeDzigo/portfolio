const data = [
      {
            "title": "Static or Dynamic Website",
            "content": [
                  {
                        "img": "./images/counter/1/1.png",
                        "price": 150,
                        "width" : 20,
                        "title": "Static",
                  },
                  {
                        "img": "./images/counter/1/2.png",
                        "price": 170,
                        "width" : 20,
                        "title": "Dynamic"
                  }
            ]
      },
      {
            "title": "Features",
            "content": [
                  {
                        "img": "./images/counter/2/1.png",
                        "width": 12,
                        "price": 20,
                        "title": "Mobile/Tablet version"
                  },
                  {
                        "img": "./images/counter/2/2.png",
                        "price": 30,
                        "width" : 12,
                        "title": "Image Slider",
                  },
                  {
                        "img": "./images/counter/2/3.png",
                        "price": 55,
                        "width" : 12,
                        "title": "Gallery",
                  }, {
                        "img": "./images/counter/2/4.png",
                        "price": 500,
                        "width" : 12,
                        "title": "E-mail contact form",
                  },
                  {
                        "img": "./images/counter/2/5.png",
                        "price": 3100,
                        "width" : 12,
                        "title": "Interactive address on a map",
                  },
                  {
                        "img": "./images/counter/2/6.png",
                        "price": 1210,
                        "width" : 12,
                        "title": "Live representative-visitor chat",
                  }
            ]
      },
      {
            "title": "Last Step",
            "content": [
                  {
                        "img": "./images/counter/3/1.png",
                        "price": 240,
                        "width" : 8,
                        "title": "Website"
                  }
            ]
      }
];
let pageIndicator = 0;
const saveData = buildHTML();

function buildHTML() {
      let arr = [];
      for (let i = 0; i < data.length; i++){
            let str;
            let title = data[i]["title"];
            str = `
<div class="container-counter-holder" id="box">
      <div class="container-counter-holder-headings-holder">
            <h1 class="container-holder-headings-h1">${title}</h1>
      </div>
      <div class="container-counter-services-holder-container">
            `;

            data[i]["content"].forEach(v => {
                  str += `
<div class="container-counter-services-holder">
      <img src="${v["img"]}" alt="" class="container-counter-services-holder-img">
      <p class="container-counter-services-holder-p">${v['title']}</p>
      <div class="choosedItem">
      </div>
</div>
                  `;
            });


            str += `</div> 
            <div class="previous-next-button-holder"> 
            </div>
            </div>`;
            arr.push(str);
      }
      return arr;
}
function display() { 
      let showContent = document.querySelector(".container-counter-services-content-holder");
      
      if (pageIndicator == 0) showContent.innerHTML = saveData[0];
      else if (pageIndicator == 1) {
            showContent.innerHTML = saveData[1];
            showContent.querySelector(".previous-next-button-holder").innerHTML = '<button class="next">NEXT</button><button class="previous">PREVIOUS</button>';
      }
      else if (pageIndicator == 2) {
            showContent.innerHTML = saveData[2];
            showContent.querySelector(".previous-next-button-holder").innerHTML = '<button class="next">NEXT</button><button class="previous">PREVIOUS</button>';
      }
      else {
            let html = 
            `     
            <div class="container-counter-holder" id="box">
                  <div class="container-counter-holder-headings-holder">
                        <h1 class="container-holder-headings-h1">Static or Dynamic Website</h1>
                  </div>
                  <div class="container-counter-services-cost-holder">

                  
            `;

            data.forEach(v => {
                  v["content"].forEach(x => {
                        for (let i = 0; i < choosedStuff.length; i++) {
                              if (choosedStuff[i] == x["title"]) {
                                    html += `<h1>${x["title"]} : ${x["price"]}$</h1>`;
                              }
                        }
                  });
            })

            html += `</div> 
            </div>`;
            showContent.innerHTML = html;
      }
      next();
}
display();

function next() { 
      if (pageIndicator == 0) {
            let btn = document.querySelectorAll('.container-counter-services-holder');
            btn.forEach(v => {
                  v.addEventListener('click', function () {
                        saveChoosedStuff(v);
                        pageIndicator++;
                        display();
                   });
            });
      }
      else {
            let next = document.querySelector(".next");
            let previous = document.querySelector('.previous');
            let choose = document.querySelectorAll(".container-counter-services-holder");
            choose.forEach(v => {
                  v.addEventListener('click', function () {
                        saveChoosedStuff(v);
                        showSelected();
                  });
            })
            next.addEventListener('click', function () {
                  pageIndicator++;
                  display();
                  showSelected();
            });
            previous.addEventListener('click', function () {
                  pageIndicator--;
                  display();
                  showSelected();
            });
      }
}

let choosedStuff = [];
let totalPrice = 0;
let width = 0;
function saveChoosedStuff(value) {
      let text = value.querySelector(".container-counter-services-holder-p").innerText;
      if (choosedStuff.indexOf(text) == -1) {
            choosedStuff.push(text);
            data[pageIndicator]["content"].forEach(v => {
                  let progressBar = document.querySelector('.container-counter-price-progress-highlighter');
                  let price = document.querySelector(".container-counter-price-pointer-holder");
                  if (text == v["title"]) {
                        progressBar.style.transition = '1s ease';
                        width += parseFloat(v["width"]);
                        totalPrice += v["price"];
                        progressBar.style.width = width + "%";
                        price.innerText = totalPrice + "$";
                  }
            });
      }
      else {
            // DELETE
            choosedStuff[choosedStuff.indexOf(text)] = '';
            choosedStuff = choosedStuff.filter(v => v != '');
            data[pageIndicator]["content"].forEach(v => {
                  let progressBar = document.querySelector('.container-counter-price-progress-highlighter');
                  let price = document.querySelector(".container-counter-price-pointer-holder");
                  if (text == v["title"]) {
                        progressBar.style.transition = '1s ease';
                        width -= parseFloat(v["width"]);
                        totalPrice -= v["price"];
                        progressBar.style.width = width + "%";
                        price.innerText = totalPrice + "$";
                  }
            });
            deselect(text);
            if(pageIndicator == 0) pageIndicator--;
      }
}

function showSelected() {
      let boxes = document.querySelectorAll(".container-counter-services-holder");
      for (let i = 0; i < boxes.length; i++) {
            let boxP = boxes[i].querySelector(".container-counter-services-holder-p").innerText;
            choosedStuff.forEach(v => {
                  if (v == boxP) {
                        boxes[i].querySelector(".choosedItem").innerHTML += 
                        `
                              <img src="./images/counter/check.png"/>
                        `;
                  }
            });
      }
}


function deselect(p) {
      let boxes = document.querySelectorAll(".container-counter-services-holder");
      

      for (let i = 0; i < boxes.length; i++) {
            let boxesP = boxes[i].querySelector(".container-counter-services-holder-p").innerText;
            
            if (boxesP == p) {
                  boxes[i].querySelector(".choosedItem").innerHTML = "";
            }
      }
}