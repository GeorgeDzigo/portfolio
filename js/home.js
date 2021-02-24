// This is portfolio works/projects
function works() {
      let data = [
            {
                  "img": "./images/works/1.jpg",
                  "title": "CODE",
                  "desc": "This is my old portfolio, which is being replaced with the one you are seeing now.",
                  "link": "./page.html?p=code"
            }, 
            {
                  "img": "./images/works/2.jpg",
                  "title": "Job Junior Task",
                  "desc": "This is the task with ",
                  "link": "./page.html?p=phptask"
            }, 
            {
                  "img": "./images/works/3.jpg",
                  "title": "Jobs Finder",
                  "desc": "This website allows companies to publish their vacancies and others too see company's vacancies",
                  "link": "./page.html?p=jobsfinder"
            }, 
            {
                  "img": "./images/works/4.jpg",
                  "title": "Smart Village",
                  "desc": "This WebSite is still in process, It is like amazon but it has everything",
                  "link": "./page.html?p=sv"
            },
      ]

      let holder = document.getElementById("timeline-works-holder");
      for (let i = 0; i < data.length; i++) {
            holder.innerHTML += `
            <div class="timeline-works-holder-work" id="box" style="background-image: url('${data[i]["img"]}')">
                  <div class="timeline-works-holder-work-headings">
                        <h1 class="timeline-works-holder-work-headings-h1" id="timeline-works-holder-work-headings-title">${data[i]["title"]}</h1>
                        <p class="timeline-works-holder-work-headings-p" id="timeline-works-holder-work-heaings-desc">
                              ${data[i]["desc"]}
                        </p>
                        <a href="${data[i]["link"]}" class="timeline-works-holder-work-headings-a" id="timeline-works-holder-work-headings-link">Check Out The WebSite ></a>
                  </div>
            </div>
            
            `;
      }

      let btn = document.querySelectorAll('.timeline-works-holder-work');
      let toD = document.querySelectorAll('.timeline-works-holder-work-headings');
      for (let i = 0; i < btn.length; i++) {
            btn[i].addEventListener('mouseover', function () { 
                  toD[i].style.transform = "translate(0px, -165px)";
                  toD[i].style.transition = ".85s ease";
            });
            btn[i].addEventListener("mouseout", function () {
                  toD[i].style.transform = "translate(0px, 0px)";
                  toD[i].style.transition = ".85s ease";
            });
      }
}
works();
// This is my education history
function education() { 
      let data = [
            {
                  "title": "Johns Hopkins University",
                  "date": "feb, 2020",
                  "role": "Student",
                  "learned": "Build Dynamic Web Site With HTML/CSS/JS And AJAX/JSON",
                  "link": "https://www.coursera.org/account/accomplishments/verify/6WYSPPLKXDJH",
            },
            {
                  "title": "Johns Hopkins University",
                  "date": "feb, 2020",
                  "role": "Student",
                  "learned": "Build Dynamic Web Site With HTML/CSS/JS And AJAX/JSON",
                  "link": "https://www.coursera.org/account/accomplishments/verify/6WYSPPLKXDJH",
            },
      ];

      let holder = document.querySelector(".timeline-eduhis-holder");
      for (let i = 0; i < data.length; i++) {
            
            holder.innerHTML += `
                        <div class="timeline-eduhis-box-container">
                              <div class="timeline-eduhis-holder-box" id="box">
                                          <div class="timeline-eduhis-holder-box-headings">
                                                <div class="pointer"></div>
                                                <div class="timeline-pointer"></div>
                                                <h1 class="timeline-eduhis-holder-box-headings-unvn">
                                                      ${data[i]["title"]}
                                                </h1>
                                                <div class="timeline-eduhis-holder-box-headings-date">
                                                ${data[i]["date"]}
                                                </div>
                                                <h3 class="timeline-eduhis-holder-box-headings-role">
                                                      ${data[i]["role"]}
                                                </h3>
                                                <p class="timeline-eduhis-holder-box-headings-p">
                                                      ${data[i]["learned"]}
                                                </p>

                                                <a href="${data[i]["link"]}" class="timeline-eduhis-holder-box-headings-a"> DIPLOMA > </a>

                                          </div>
                                    </div>
                              <div class="timeline-eduhis-line"></div>
                              </div>
                              
                              `

            
      }
}
education();

// This is my work history
function work() { 
      let data = [
            {
                  "title": "KitchenDesign",
                  "date": "Summer, 2019",
                  "role": "Front-End Developer",
                  "theme": "This Is Basic Front-End Web, Just For Practice. HTML/CSS/JS are used technologies",
                  "link": "https://www.coursera.org/account/accomplishments/verify/6WYSPPLKXDJH",
            },
            {
                  "title": "CODE",
                  "date": "June, 2020 - Aug, 2020",
                  "role": "Front-End Developr",
                  "theme": "THis Is Basic Front-End Web, Just For Practice. HTML/CSS/JS are used technologies",
                  "link": "https://www.coursera.org/account/accomplishments/verify/6WYSPPLKXDJH",
            },
      ];

      let holder = document.querySelector(".timeline-workhis-holder");
      for (let i = 0; i < data.length; i++) {
            
            holder.innerHTML += `
                        <div class="timeline-workhis-box-container">
                              <div class="timeline-workhis-holder-box" id="box">
                                          <div class="timeline-workhis-holder-box-headings">
                                                <div class="pointer"></div>
                                                <div class="timeline-pointer"></div>
                                                <h1 class="timeline-workhis-holder-box-headings-unvn">
                                                      ${data[i]["title"]}
                                                </h1>
                                                <div class="timeline-workhis-holder-box-headings-date">
                                                ${data[i]["date"]}
                                                </div>
                                                <h3 class="timeline-workhis-holder-box-headings-role">
                                                      ${data[i]["role"]}
                                                </h3>
                                                <p class="timeline-workhis-holder-box-headings-p">
                                                      ${data[i]["theme"]}
                                                </p>

                                                <a href="${data[i]["link"]}" class="timeline-workhis-holder-box-headings-a"> DIPLOMA > </a>

                                          </div>
                                    </div>
                              <div class="timeline-workhis-line"></div>
                              </div>
                              
                              `

            
      }
}
work();

// This is my services 
function services() {
      let data = [
            {
                  "title": "Web Development",
                  "desc": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores ratione neque expedita sint tempora animi corporis veritatis dolor! Deleniti unde similique officiis eos commodi harum labore quis voluptatem molestias assumenda."
            },
            {
                  "title": "Full Stack",
                  "desc": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores ratione neque expedita sint tempora animi corporis veritatis dolor! Deleniti unde similique officiis eos commodi harum labore quis voluptatem molestias assumenda."
            },
            {
                  "title": "Front End",
                  "desc": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores ratione neque expedita sint tempora animi corporis veritatis dolor! Deleniti unde similique officiis eos commodi harum labore quis voluptatem molestias assumenda."
            },
            {
                  "title": "Back End",
                  "desc": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores ratione neque expedita sint tempora animi corporis veritatis dolor! Deleniti unde similique officiis eos commodi harum labore quis voluptatem molestias assumenda."
            },
            {
                  "title": "UI/UX Design",
                  "desc": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores ratione neque expedita sint tempora animi corporis veritatis dolor! Deleniti unde similique officiis eos commodi harum labore quis voluptatem molestias assumenda."
            },
            {
                  "title": "Web Design",
                  "desc": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores ratione neque expedita sint tempora animi corporis veritatis dolor! Deleniti unde similique officiis eos commodi harum labore quis voluptatem molestias assumenda."
            },
      ];

      let sh = document.querySelector(".timeline-services");
      for (let i = 0; i < data.length; i++) {
            sh.innerHTML += `
            
            <div class="timeline-service-box" id="box">
            <div class="timeline-service-box-headings">
                  <h1 class="timeline-service-box-h1">${data[i]["title"]}</h1>
                  <p class="timeline-services-box-p">
                        ${data[i]["desc"]}
                  </p>
                  <a href="#" class="timeline-services-box-a">
                        ORDER NOW  >
                  </a>
            </div>
      </div>
            
            `;
      }
}
services();

// This Is My Recommendations
function recoms() {
      let data = [
            {
                  "img": "images/recom/1.jpg",
                  "name": "Paul Trueman",
                  "specialty": "Template Author",
                  "recom" : "Working with Artur has been a pleasure. Better yet - I alerted them of a minor issue before going to sleep. The issue was fixed the next morning. I couldn't ask for better support. Thank you Artur! This is easily a 5 star freelancer.",
                  "rating" : "XXXXX"
            },
            {
                  "img": "images/recom/2.jpg",
                  "name": "Paul Trueman",
                  "specialty": "Template Author",
                  "recom" : "Working with Artur has been a pleasure. Better yet - I alerted them of a minor issue before going to sleep. The issue was fixed the next morning. I couldn't ask for better support. Thank you Artur! This is easily a 5 star freelancer.",
                  "rating" : "XXXXX"
            },
            {
                  "img": "images/recom/3.jpg",
                  "name": "Paul Trueman",
                  "specialty": "Template Author",
                  "recom" : "Working with Artur has been a pleasure. Better yet - I alerted them of a minor issue before going to sleep. The issue was fixed the next morning. I couldn't ask for better support. Thank you Artur! This is easily a 5 star freelancer.",
                  "rating" : "XXXXX"
            },
            {
                  "img": "images/recom/4.jpg",
                  "name": "Paul Trueman",
                  "specialty": "Template Author",
                  "recom" : "Working with Artur has been a pleasure. Better yet - I alerted them of a minor issue before going to sleep. The issue was fixed the next morning. I couldn't ask for better support. Thank you Artur! This is easily a 5 star freelancer.",
                  "rating" : "XXXXX"
            },
      ];

      let rh = document.querySelector(".recoms-holder");

      for (let i = 0; i < data.length; i++) {
            rh.innerHTML += `
            <div class="recoms-holder-box" id="box">
                  <img src="${data[i]["img"]}" class="recoms-holder-recom-img">
                  <div class="recoms-holder-recom-headings">
                        <h1 class="recoms-holder-recom-headings-name">${data[i]["name"]}</h1>
                        <h2 class="recoms-holder-recom-headings-specialty">${data[i]["specialty"]}</h2>
                        <p class="recoms-holder-recom-headings-recomendation">${data[i]["recom"]}</p>
                        <div class="recoms-holder-recom-headings-rating">${data[i]["rating"]}</div>
                  </div>
            </div>
            `;
      }
}
recoms()

// This Is Slider Function 
function slider() { 

      let left = document.querySelector(".recoms-arrow-left");
      let right = document.querySelector(".recoms-arrow-right");
      let slider = document.querySelector(".recoms-holder");
      let i = 0;
      let trans = 0;
      right.addEventListener('click', function () {
            if (i != 2) {
                  i++;
                  trans -= 545;
                  slider.style.transform = "translate("+trans+"px, 0)";
                  slider.style.transition = ".85s ease";
            }
      });
      left.addEventListener('click', function () {
            if (i != 0) {
                  i--;
                  trans += 545;
                  slider.style.transform = "translate("+trans+"px, 0)";
                  slider.style.transition = ".85s ease";
            }
      });
}
slider();