const data = [
      {
            "title": "Static Or Dynamic",
            "desc": "<span>Static Website</span> : reduced cost, specific properties <br /> <span>Dynamic Website</span> : value for money cost, fully managed, fully scalable",
            "content": [
                  {
                        "img": "./images/counter/1/1.png",
                        "title": "<span>Static</span>(HTML 5)",
                        "desc": "Marketing Websites <br /> Websites Application <br /> Landing Pages <br /> Microsites"
                  },
                  {
                        "img": "./images/counter/1/2.png",
                        "title": "<span>Dynamics</span> (WordPress CMS)",
                        "desc": "Personal Websites <br /> Corporate Websites <br /> Online Stores <br /> News Portals"
                  },
            ]
      }
];

/*
*     This function creates first html on the page
*/
function firstHTML() {
      let a = data[0];
      let html =
            `
<div class="container-counter-holder">
      <div class="container-counter-holder-headings-holder">
            <h1 class="container-counter-holder-headings-holder-h1">${a["title"]}</h1>
            <p class="container-counter-holder-headings-holder-p">${a["desc"]}</p>
      </div>
      <div class="container-counter-services-holder-container">`;
      
      a["content"].forEach(v => {
            html +=
                  `
            <div class="container-counter-services-holder">
                  <div class="container-counter-services-img-holder">
                        <img class="container-counter-services-img" src="${v["img"]}"/>
                  </div>
                  <div class="container-counter-services-headings-holder">
                        <h1 class="container-counter-services-headings-holder-h1">${v["title"]}</h1>
                        <p class="container-counter-services-headings-holder-p">${v["desc"]}</p>
                  </div>
                  
            </div>
            `
      });
html +=
      `
      </div>
</div>
`
      return html;
}


document.querySelector(".container-counter-services-content-holder").innerHTML = firstHTML();