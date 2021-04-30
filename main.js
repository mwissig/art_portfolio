{console.log("hi");}

var art = [
          {title: "title",
          year: 2010,
          medium: "Oil on Panel",
          description: "description",
          filename: "florida.jpg",
        },
          {title: "title",
          year: 2014,
          medium: "Oil on Panel",
          description: "description",
          filename: "haircut.jpg",
        },
          {title: "title",
          year: 2014,
          medium: "Oil on Panel",
          description: "description",
          filename: "hottub.jpg",
        },

          {title: "title",
          year: 2015,
          medium: "Oil on Panel",
          description: "description",
          filename: "staples.jpg",
                  }
          ];

var lightbox_container = document.getElementById("lightbox_container");

function printLightbox () {
var i;
for (i = 0; i < art.length; i++) {
  var addArt = document.createElement("div");
  addArt.setAttribute("id", "filename"+i);
  addArt.setAttribute("class", "lightbox_entry");
  addArt.style.backgroundImage = `url("images/${art[i].filename}")`;
  addArt.innerHTML = `<a href="images/${art[i].filename}" data-lightbox="art" data-title="${art[i].title}" data-description="${art[i].description}" data-year="${art[i].year}" data-medium="${art[i].medium}"><img src="images/${art[i].filename}" class="thumbnail"></a>`;
  lightbox_container.appendChild(addArt);
}
}

printLightbox();
