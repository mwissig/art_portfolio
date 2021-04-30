{
  console.log("hi");
}

var art = [
  {
    title: "title",
    year: 2016,
    medium: "Oil on Panel",
    description: "description",
    filename: "pie.jpg",
    category: "Paintings 2014-present"
  },
  {
    title: "title",
    year: 2015,
    medium: "Oil on Panel",
    description: "description",
    filename: "staples.jpg",
    category: "Paintings 2014-present"
  },
  {
    title: "title",
    year: 2014,
    medium: "Oil on Panel",
    description: "description",
    filename: "hottub.jpg",
    category: "Paintings 2014-present"
  },
  {
    title: "title",
    year: 2015,
    medium: "Oil on Panel",
    description: "description",
    filename: "hoist.jpg",
    category: "Paintings 2014-present"
  },
  {
    title: "title",
    year: 2010,
    medium: "Oil on Panel",
    description: "description",
    filename: "florida.jpg",
    category: "Paintings 2010-2014"
  },
  {
    title: "title",
    year: 2013,
    medium: "Oil on Panel",
    description: "description",
    filename: "018.jpg",
    category: "Paintings 2010-2014"
  },
  {
    title: "title",
    year: 2013,
    medium: "Oil on Panel",
    description: "description",
    filename: "019.jpg",
    category: "Paintings 2010-2014"
  },
  {
    title: "title",
    year: 2013,
    medium: "Oil on Panel",
    description: "description",
    filename: "020.jpg",
    category: "Paintings 2010-2014"
  },
  {
    title: "title",
    year: 2013,
    medium: "Oil on Panel",
    description: "description",
    filename: "021.jpg",
    category: "Paintings 2010-2014"
  },
  {
    title: "title",
    year: 2013,
    medium: "Oil on Panel",
    description: "description",
    filename: "022.jpg",
    category: "Paintings 2010-2014"
  },
  {
    title: "title",
    year: 2014,
    medium: "Oil on Panel",
    description: "description",
    filename: "haircut.jpg",
    category: "Paintings 2010-2014"
  },
  {
    title: "Metro Drawings",
    year: "2019-2020",
    medium: "Conte and Pencil on Dyed Paper",
    description: "description",
    filename: "metro01.jpg",
    category: "Metropolitan Bar Drawings"
  },
  {
    title: "Metro Drawings",
    year: "2019-2020",
    medium: "Conte and Pencil on Dyed Paper",
    description: "description",
    filename: "metro02.jpg",
    category: "Metropolitan Bar Drawings"
  },
  {
    title: "Metro Drawings",
    year: "2019-2020",
    medium: "Conte and Pencil on Dyed Paper",
    description: "description",
    filename: "metro03.jpg",
    category: "Metropolitan Bar Drawings"
  },
  {
    title: "Metro Drawings",
    year: "2019-2020",
    medium: "Conte and Pencil on Dyed Paper",
    description: "description",
    filename: "metro04.jpg",
    category: "Metropolitan Bar Drawings"
  },
  {
    title: "Metro Drawings",
    year: "2019-2020",
    medium: "Conte and Pencil on Dyed Paper",
    description: "description",
    filename: "metro05.jpg",
    category: "Metropolitan Bar Drawings"
  },
  {
    title: "Metro Drawings",
    year: "2019-2020",
    medium: "Conte and Pencil on Dyed Paper",
    description: "description",
    filename: "metro06.jpg",
    category: "Metropolitan Bar Drawings"
  },
  {
    title: "Metro Drawings",
    year: "2019-2020",
    medium: "Conte and Pencil on Dyed Paper",
    description: "description",
    filename: "metro07.jpg",
    category: "Metropolitan Bar Drawings"
  },
  {
    title: "Metro Drawings",
    year: "2019-2020",
    medium: "Conte and Pencil on Dyed Paper",
    description: "description",
    filename: "metro08.jpg",
    category: "Metropolitan Bar Drawings"
  },
  {
    title: "Metro Drawings",
    year: "2019-2020",
    medium: "Conte and Pencil on Dyed Paper",
    description: "description",
    filename: "metro09.jpg",
    category: "Metropolitan Bar Drawings"
  },
  {
    title: "Metro Drawings",
    year: "2019-2020",
    medium: "Conte and Pencil on Dyed Paper",
    description: "description",
    filename: "metro10.jpg",
    category: "Metropolitan Bar Drawings"
  }
];

var lightbox_container = document.getElementById("lightbox_container");

function printLightbox() {
  var i;
  for (i = 0; i < art.length; i++) {

    if (i <= 0) {
      var addTitle = document.createElement("h3");
      addTitle.innerHTML = art[i].category;
      lightbox_container.appendChild(addTitle);
    }
    else if (art[i].category != art[i - 1].category) {
      var addTitle = document.createElement("h3");
      addTitle.innerHTML = art[i].category;
      lightbox_container.appendChild(addTitle);
    };

  var addArt = document.createElement("div");
  addArt.setAttribute("id", "filename" + i);
  addArt.setAttribute("class", "lightbox_entry");
  addArt.style.backgroundImage = `url("images/${art[i].filename}")`;
  addArt.innerHTML = `<a href="images/${art[i].filename}" data-lightbox="${art[i].category}" data-title="${art[i].title}" data-description="${art[i].description}" data-year="${art[i].year}" data-medium="${art[i].medium}"><img src="images/${art[i].filename}" class="thumbnail"></a>`;
  lightbox_container.appendChild(addArt);
}
};

printLightbox();
