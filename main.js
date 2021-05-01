{
  console.log("hi");
}

var art = [
  {
    title: "title",
    year: 2016,
    medium: "Oil on Panel",
    description: "description",
    filename: "pie",
    category: "Paintings 2014-present"
  },
  {
    title: "title",
    year: 2015,
    medium: "Oil on Panel",
    description: "description",
    filename: "staples",
    category: "Paintings 2014-present"
  },
  {
    title: "title",
    year: 2014,
    medium: "Oil on Panel",
    description: "description",
    filename: "hottub",
    category: "Paintings 2014-present"
  },
  {
    title: "title",
    year: 2015,
    medium: "Oil on Panel",
    description: "description",
    filename: "hoist",
    category: "Paintings 2014-present"
  },
  {
    title: "title",
    year: 2010,
    medium: "Oil on Panel",
    description: "description",
    filename: "florida",
    category: "Paintings 2010-2014"
  },
  {
    title: "title",
    year: 2013,
    medium: "Oil on Panel",
    description: "description",
    filename: "018",
    category: "Paintings 2010-2014"
  },
  {
    title: "title",
    year: 2013,
    medium: "Oil on Panel",
    description: "description",
    filename: "019",
    category: "Paintings 2010-2014"
  },
  {
    title: "title",
    year: 2013,
    medium: "Oil on Panel",
    description: "description",
    filename: "020",
    category: "Paintings 2010-2014"
  },
  {
    title: "title",
    year: 2013,
    medium: "Oil on Panel",
    description: "description",
    filename: "021",
    category: "Paintings 2010-2014"
  },
  {
    title: "title",
    year: 2013,
    medium: "Oil on Panel",
    description: "description",
    filename: "022",
    category: "Paintings 2010-2014"
  },
  {
    title: "title",
    year: 2014,
    medium: "Oil on Panel",
    description: "description",
    filename: "haircut",
    category: "Paintings 2010-2014"
  },
  {
    title: "Metro Drawings",
    year: "2019-2020",
    medium: "Conte and Pencil on Dyed Paper",
    description: "description",
    filename: "metro01",
    category: "Metropolitan Bar Drawings"
  },
  {
    title: "Metro Drawings",
    year: "2019-2020",
    medium: "Conte and Pencil on Dyed Paper",
    description: "description",
    filename: "metro02",
    category: "Metropolitan Bar Drawings"
  },
  {
    title: "Metro Drawings",
    year: "2019-2020",
    medium: "Conte and Pencil on Dyed Paper",
    description: "description",
    filename: "metro03",
    category: "Metropolitan Bar Drawings"
  },
  {
    title: "Metro Drawings",
    year: "2019-2020",
    medium: "Conte and Pencil on Dyed Paper",
    description: "description",
    filename: "metro04",
    category: "Metropolitan Bar Drawings"
  },
  {
    title: "Metro Drawings",
    year: "2019-2020",
    medium: "Conte and Pencil on Dyed Paper",
    description: "description",
    filename: "metro05",
    category: "Metropolitan Bar Drawings"
  },
  {
    title: "Metro Drawings",
    year: "2019-2020",
    medium: "Conte and Pencil on Dyed Paper",
    description: "description",
    filename: "metro06",
    category: "Metropolitan Bar Drawings"
  },
  {
    title: "Metro Drawings",
    year: "2019-2020",
    medium: "Conte and Pencil on Dyed Paper",
    description: "description",
    filename: "metro07",
    category: "Metropolitan Bar Drawings"
  },
  {
    title: "Metro Drawings",
    year: "2019-2020",
    medium: "Conte and Pencil on Dyed Paper",
    description: "description",
    filename: "metro08",
    category: "Metropolitan Bar Drawings"
  },
  {
    title: "Metro Drawings",
    year: "2019-2020",
    medium: "Conte and Pencil on Dyed Paper",
    description: "description",
    filename: "metro09",
    category: "Metropolitan Bar Drawings"
  },
  {
    title: "Metro Drawings",
    year: "2019-2020",
    medium: "Conte and Pencil on Dyed Paper",
    description: "description",
    filename: "metro10",
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
  addArt.style.backgroundImage = `url("images/${art[i].filename}.jpg")`;
  addArt.innerHTML = `<a href="images/${art[i].filename}.jpg" data-lightbox="${art[i].category}" data-title="${art[i].title}" data-description="${art[i].description}" data-year="${art[i].year}" data-medium="${art[i].medium}"><img src="thumbnails/${art[i].filename}.jpg" class="thumbnail"></a>`;
  lightbox_container.appendChild(addArt);
}
};

printLightbox();
