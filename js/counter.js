const data = {
      "title": "Static Or Dynamic",
      "desc": "<span>Static Website</span> : reduced cost, specific properties <br /> <span>Dynamic Website</span> : value for money cost, fully managed, fully scalable",
      "content": [
            {
                  "img": "./images/counter/1/1.png",
                  "title": "<span>Static</span>(HTML 5)",
                  "query": "static",
                  "desc": "Marketing Websites <br /> Websites Application <br /> Landing Pages <br /> Microsites"
            },
            {
                  "img": "./images/counter/1/2.png",
                  "title": "<span>Dynamics</span> (WordPress CMS)",
                  "query": "dynamic",
                  "desc": "Personal Websites <br /> Corporate Websites <br /> Online Stores <br /> News Portals"
            },
      ]
}
/*
*     All variables that 
*     will be used in 
*     counter.js file
*/

let choosed = [];



/*
*     This function creates first html on the page
*/
function firstHTML() {
      
      let html =
            `
<div class="container-counter-holder">
      <div class="container-counter-holder-headings-holder">
            <h1 class="container-counter-holder-headings-holder-h1">${data["title"]}</h1>
            <p class="container-counter-holder-headings-holder-p">${data["desc"]}</p>
      </div>
      <div class="container-counter-services-holder-container">`;
      
      data["content"].forEach(v => {
            html +=
                  `
            <div class="container-counter-services-holder">
                  <a href="./?tab=counter&t=${v["query"]}">
                        <div class="container-counter-services-img-holder">
                              <img class="container-counter-services-img" src="${v["img"]}"/>
                        </div>
                        <div class="container-counter-services-headings-holder">
                              <h1 class="container-counter-services-headings-holder-h1">${v["title"]}</h1>
                              <p class="container-counter-services-headings-holder-p">${v["desc"]}</p>
                        </div>
                  </a>
            </div>
            `
      });
html +=
      `
      </div>
</div>
`
      document.querySelector(".container-counter-services-content-holder").innerHTML = html;
}
firstHTML();
// This function gets queries by name
const getParameterByName = function (name, url = window.location.href) {
      name = name.replace(/[\[\]]/g, '\\$&');
      var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
          results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
const t = getParameterByName("t");

if (t == "static") {
      const static = [
            {
                  "price": 20,
                  "pwidth": 7,
                  "imgUrl": ""
            }
      ];
}
else if (t == "dynamic");
else {
      document.querySelector(".container-counter-services-content-holder").innerHTML = "<h1>Page can't be found 404</h1>"
}