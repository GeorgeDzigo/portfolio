const data = [
      {
            "title": "Static or Dynamic Website",
            "content": [
                  {
                        "img": "./images/counter/1/1.png",
                        "title": "Static",
                  },
                  {
                        "img": "./images/counter/1/2.png",
                        "title": "Dynamic"
                  }
            ]
      },
      {
            "title": "Features",
            "content": [
                  {
                        "img": "./images/counter/2/1.png",
                        "title": "Mobile/Tablet version"
                  },
                  {
                        "img": "./images/counter/2/2.png",
                        "title": "Image Slider",
                  },
                  {
                        "img": "./images/counter/2/3.png",
                        "title": "Gallery",
                  }, {
                        "img": "./images/counter/2/4.png",
                        "title": "E-mail contact form",
                  },
                  {
                        "img": "./images/counter/2/5.png",
                        "title": "Interactive address on a map",
                  },
                  {
                        "img": "./images/counter/2/6.png",
                        "title": "Live representative-visitor chat",
                  }
            ]
      },
      {
            "title": "Last Step",
            "content": [
                  {
                        "img": "./images/counter/3/1.png",
                        "title": "Website"
                  }
            ]
      }
];
let pageIndicator = 0;

function save() {
      let arr = [];
      for (let i = 0; i < data.length; i++){
            let str;
            let title = data[i]["title"];
            str = `
<div class="container-counter-holder" >
      <div class="container-counter-holder-headings-holder">
            <h1 class="container-holder-headings-h1">${title}</h1>
      </div>
            `;

            data[i]["content"].forEach(v => {
                  str += `
<div class="container-counter-services-holder" id="box">
      <img src="${v["img"]}" alt="" class="container-counter-services-holder-img">
      <p class="container-counter-services-holder-img">${v['title']}</p>
</div>
                  `;
            });
            str += `</div>`;
            arr.push(str);
      }
      return arr;
}

function display() { 
      const saveData = save();
      let showContent = document.querySelector(".container-counter");
      console.log(showContent.innerHTML);

      if (pageIndicator == 0) showContent.innerHTML += saveData[0];
      else if (pageIndicator == 1) showContent.innerHTML += saveData[1];
      else showContent.innerHTMl += saveData(2);

}
display();