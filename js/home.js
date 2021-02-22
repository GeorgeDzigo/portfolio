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
            console.log(toD[i].style);
      });
      btn[i].addEventListener("mouseout", function () {
            toD[i].style.display = "none";
      });
}