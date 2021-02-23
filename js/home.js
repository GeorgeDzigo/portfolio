function works() {
      let data = [
            {
                  "img": "./images/works/1.jpg",
                  "title": "CODE",
                  "desc": "This is my old portfolio, which is being replaced with the one you are seeing now",
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
            <div class="timeline-works-holder-work"id="timeline-works-holder-work-headings-bgimg" style="background-image: url('${data[i]["img"]}')">
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

      let btn = document.querySelectorAll('#timeline-works-holder-work-headings-bgimg');
      let toD = document.querySelectorAll('.timeline-works-holder-work-headings');
      console.log(toD);
      for (let i = 0; i < btn.length; i++) {
            btn[i].addEventListener('mouseover', function () { 
                  toD[i].style.display = "block";
            });
            btn[i].addEventListener("mouseout", function () {
                  toD[i].style.display = "none";
            });
      }
}
works();
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
                              <div class="timeline-eduhis-holder-box">
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


function work() { 
      let data = [
            {
                  "title": "KitchenDesign",
                  "date": "Summer, 2019",
                  "role": "Front-End Developer",
                  "theme": "This Is Basic Front-End Web, Just For Practice",
                  "link": "https://www.coursera.org/account/accomplishments/verify/6WYSPPLKXDJH",
            },
            {
                  "title": "CODE",
                  "date": "June, 2020 - Aug, 2020",
                  "role": "Front-End Developr",
                  "theme": "THis Is Basic Front-End Web, Just For Practice",
                  "link": "https://www.coursera.org/account/accomplishments/verify/6WYSPPLKXDJH",
            },
      ];

      let holder = document.querySelector(".timeline-workhis-holder");
      for (let i = 0; i < data.length; i++) {
            
            holder.innerHTML += `
                        <div class="timeline-workhis-box-container">
                              <div class="timeline-workhis-holder-box">
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