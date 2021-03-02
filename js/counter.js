const data = [
      {
            "title": "Static or Dynamic Website",
            "content": [
                  {
                        "img": "./images/counter/1/1.png",
                        "price": 150,
                        "width": 20,
                        "title": "Static",
                  },
                  {
                        "img": "./images/counter/1/2.png",
                        "price": 170,
                        "width": 20,
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
                        "price": 260,
                        "title": "Mobile/Tablet version"
                  },
                  {
                        "img": "./images/counter/2/2.png",
                        "price": 20,
                        "width": 12,
                        "title": "Image Slider",
                  },
                  {
                        "img": "./images/counter/2/3.png",
                        "price": 20,
                        "width": 12,
                        "title": "Gallery",
                  }, {
                        "img": "./images/counter/2/4.png",
                        "price": 30,
                        "width": 12,
                        "title": "E-mail contact form",
                  }, {
                        "img": "./images/counter/2/5.png",
                        "price": 390,
                        "width": 12,
                        "title": "Code provisions for GDPR compliance",
                  },
                  {
                        "img": "./images/counter/2/6.png",
                        "price": 3100,
                        "width": 12,
                        "title": "Interactive address on a map",
                  },
                  {
                        "img": "./images/counter/2/7.png",
                        "price": 1210,
                        "width": 12,
                        "title": "Live representative-visitor chat",
                  }
            ]
      },
      {
            "title": "Additional services",
            "content": [
                  {
                        "img": "./images/counter/3/1.png",
                        "price": 20,
                        "width": 8,
                        "title": "Website traffic statistics"
                  },
                  {
                        "img": "./images/counter/3/2.png",
                        "price": 220,
                        "width": 8,
                        "title": "Website optimization for search engines"
                  },
                  {
                        "img": "./images/counter/3/3.png",
                        "price": 60,
                        "width": 8,
                        "title": "Add web page content by our team (per page)"
                  },
                  {
                        "img": "./images/counter/3/4.png",
                        "price": 20,
                        "width": 8,
                        "title": "SSL certificate for secure transmission of information"
                  },
                  {
                        "img": "./images/counter/3/5.png",
                        "price": 110,
                        "width": 8,
                        "title": "Newsletter integration"
                  },
                  {
                        "img": "./images/counter/3/6.png",
                        "price": 80,
                        "width": 8,
                        "title": "Creating a social media presence in 5 networks"
                  },
                  {
                        "img": "./images/counter/3/7.png",
                        "price": 230,
                        "width": 8,
                        "title": "Social media presence management (per month)"
                  },
                  {
                        "img": "./images/counter/3/8.png",
                        "price": 12,
                        "width": 8,
                        "title": "Create a Google AdWords Campaign (per keyword)"
                  },
                  {
                        "img": "./images/counter/3/9.png",
                        "price": 180,
                        "width": 8,
                        "title": "Manage Google AdWords Ad Campaign (per month)"
                  },
            ]
      },
      {
            "title": "Latest information",
            "content": [
                  {
                        "width": 12,
                        "price": 20,
                        "title": "Domain Name"
                  },
                  {
                        "price": 249,
                        "width": 12,
                        "title": "Image Slider",
                  },
                  {
                        "price": 350,
                        "width": 12,
                        "title": "Gallery",
                  }
            ]
      },
];

let pageIndicator = 0;
const saveData = buildHTML();

function buildHTML() {
      let arr = [];
      for (let i = 0; i < data.length; i++){
            console.log(i);
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
                        if(i == 3) {
                              str += `<div class="container-counter-services-holder">
                                    <p class="container-counter-services-holder-p">${v['title']}</p>
                                    <label class="switch">
                                          <input type="checkbox">
                                          <span class="slider round"></span>
                                    </label>
                                    </div>`; 
                        }
                        else {
                        str += `<div class="container-counter-services-holder">
                                    <img src="${v[" img"]}" alt = "" class="container-counter-services-holder-img" >    
                                    <p class="container-counter-services-holder-p">${v['title']}</p>
                                    <div class="choosedItem">
                                    </div>
                              </div>`;
                        }
                        
                      
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
      else if (pageIndicator == 3) {
            showContent.innerHTML = saveData[3];
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
                        showPreviousSelected();
                  });
            })
            next.addEventListener('click', function () {
                  pageIndicator++;
                  display();
            });
            previous.addEventListener('click', function () {
                  deleteEveryPrevious();
                  pageIndicator--;
                  display();          
                  showPreviousSelected();
            });
      }
}

let choosedStuff = [];
let totalPrice = 0;
let width = 0;
function saveChoosedStuff(value) {
      if(pageIndicator != 3) {
      let text = value.querySelector(".container-counter-services-holder-p").innerText;
      if (choosedStuff.indexOf(text) == -1) {
                  choosedStuff.push(text);
                  data[pageIndicator]["content"].forEach(v => {
                        let progressBar = document.querySelector('.container-counter-price-progress-highlighter');
                        let price = document.querySelector(".container-counter-price-pointer-holder");
                        if (text == v["title"]) {
                              progressBar.style.transition = '1s ease';
                              if ((width + parseFloat(v["width"])) >= 100) {
                                    width = 100;
                                    totalPrice += v["price"];
                                    progressBar.style.width = width + "%";
                                    price.innerText = totalPrice + "$";
                              }
                              else {
                                    width += parseFloat(v["width"]);
                                    totalPrice += v["price"];
                                    progressBar.style.width = width + "%";
                                    price.innerText = totalPrice + "$";
                              }
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
}


// Show previous selected stuff
function showPreviousSelected() {
      let boxes = document.querySelectorAll(".container-counter-services-holder");
      for (let i = 0; i < boxes.length; i++) {
            let boxP = boxes[i].querySelector(".container-counter-services-holder-p").innerText;
            choosedStuff.forEach(v => {
                  if (v == boxP) {
                        boxes[i].querySelector(".choosedItem").innerHTML =
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

/*
*     this function deletes every selected item
*     when the previous button has been clicked
*/ 
function deleteEveryPrevious() { 
      let container = document.querySelectorAll(".container-counter-services-holder");
      for (let i = 0; i < container.length; i++) {
            let cp = container[i].querySelector(".container-counter-services-holder-p").innerText;
            let cm = container[i].querySelector(".choosedItem");
            // In choosedstuff[] array
            for (let o = 0; o < choosedStuff.length; o++) {
                  let v = choosedStuff[o];
                  if (v == cp) {
                        // In data array object
                        data[pageIndicator]['content'].forEach(x => {
                              // Get the progressBar and the price as variables
                              let progressBar = document.querySelector(".container-counter-price-progress-highlighter");
                              let price = document.querySelector(".container-counter-price-pointer-holder");
                              if (x["title"] == v) {
                                    totalPrice -= x["price"];                                    
                                    width -= x["width"];
                                    progressBar.style.width = width + "%";
                                    price.innerText = totalPrice + "$";

                                    // Delete check logo
                                    cm.innerHTML = "";
                                    // Delete from choosedStuff
                                    choosedStuff[o] = "";
                                    choosedStuff = choosedStuff.filter(v => v != "");
                              }
                        });
                  }  
            }
      }
}