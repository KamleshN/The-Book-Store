let products = {
    data: [
      {
         bookName: "Hamlet",
        category: "Fiction",
        author: "William Shakespeare",
        image: "assets/hamlet.jpeg",
        year: 2018,
      },
      {
         bookName: "The India Story",
        category: "Non-Fiction",
        author: "Bimal Jalal",
        image: "assets/india-story.jpeg",
        year: 2020,
      },
      {
         bookName: "Tomb of Sand",
        category: "Fiction",
        author: "Geetanjali Shree",
        image: "assets/tomb-of-sand.jpeg",
        year: 2018,
      },
      {
         bookName: "Rich Dad Poor Dad",
        category: "Non-Fiction",
        author: "Robert Kiyosaki",
        image: "assets/rich-dad-poor-dad.jpeg",
        year: "<2018",
      },
      {
         bookName: "Harry Potter and The Philospher's Stone",
        category: "Fiction",
        author: "JK Rowling",
        image: "assets/harry-potter.jpeg",
        year: "<2018",
      },
      {
         bookName: "Women and Power",
        category: "Non-Fiction",
        author: "Mary Beard",
        image: "assets/women-and-power.jpeg",
        year: 2018,
      },
      {
         bookName: "The Gulf",
        category: "Non-Fiction",
        author: "Jack E. Davis",
        image: "assets/the-gulf.jpeg",
        year: 2019,
      },
      {
         bookName: "Long Walk to Freedom",
        category: "Autobiography",
        author: "Nelson Mandela",
        image: "assets/long-walk-to-freedom.jpeg",
        year: "<2018",
      },
      {
        bookName: "Gone Girl",
        category: "Thriller",
        author: "Gillian Flynn",
        image: "assets/gone-girl.jpeg",
        year: "<2012",

      },
      {
        bookName: "Death – An Inside Story",
        category: "Autobiography",
        author: "Sadhguru",
        image: "assets/death.jpeg",
        year: 2020,

      },
      {
        bookName: "Pride and Prejudice",
        category: "Fiction",
        author: "Jane Austen",
        image: "assets/pride.jpeg",
        year: 2018,

      },
      {
        bookName: "The Underground Railroad",
        category: "Fiction",
        author: "Colson Whitehead",
        image: "assets/underground.jpeg",
        year: 2019,

      },
      {
        bookName: "Asymmetry ",
        category: "Autobiography",
        author: "Lisa Halliday",
        image: "assets/asymmetry.jpeg",
        year: 2019,

      },
      {
        bookName: "Homegoing",
        category: "Thriller",
        author: "Yaa Gyasi",
        image: "assets/homegoing.jpeg",
        year: 2020,

      },
      {
        bookName: "What Belongs to You ",
        category: "Autobiography",
        author: "Garth Greenwell",
        image: "assets/what.jpeg",
        year: 2019,

      },
    ],
  };
  

  let visibleProducts = document.querySelector(".visible");
  let available = products.data.length;

  for (let i of products.data) {
    //Create Card
    let card = document.createElement("section");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category,i.year, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("book-name");
    name.innerText = i. bookName.toUpperCase();
    container.appendChild(name);
    //category name
    let category = document.createElement("h6");
    category.classList.add("category");
    category.innerText = "Category : "+ i.category.toUpperCase();
    container.appendChild(category);
    //author
    let author = document.createElement("h6");
    author.classList.add("author");
    author.innerText = "Author : "+ i.author.toUpperCase()
    container.appendChild(author);
    //year
    let year = document.createElement("h6");
    year.classList.add("year");
    year.innerText = "Year of Publish : " + i.year
    container.appendChild(year);
  
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {

    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    let buttonsYear = document.querySelectorAll(".button-value-year");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");


      } else {
        button.classList.remove("active");
      }

    });
    buttonsYear.forEach((button) => {
        //check if value equals innerText
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
          button.classList.add("active");
  
  
        } else {
          button.classList.remove("active");
        }
  
      });
  
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
    var total = document.getElementsByClassName("hide");

    visibleProducts.innerText = `Showing ${available- total.length}  results >>`
  }

  
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".book-name");
    let categories = document.querySelectorAll(".category");
    let authors = document.querySelectorAll(".author")
    let cards = document.querySelectorAll(".card");
  
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
        let totalCards = document.querySelectorAll(".card").length;
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  
    var total = document.getElementsByClassName("hide");
    visibleProducts.innerText = `Showing ${available - total.length}  results >>`
  });

    //Search button click
    document.getElementById("search-author").addEventListener("click", () => {
        //initializations
        let searchInput = document.getElementById("search-input-author").value;
        // let elements = document.querySelectorAll(".book-name");
        // let categories = document.querySelectorAll(".category");
        let authors = document.querySelectorAll(".author")
        let cards = document.querySelectorAll(".card");
      
        //loop through all elements
        authors.forEach((author, index) => {
          //check if text includes the search value
          if (author.innerText.includes(searchInput.toUpperCase())) {
            //display matching card
            cards[index].classList.remove("hide");
            let totalCards = document.querySelectorAll(".card").length;
          } else {
            //hide others
            cards[index].classList.add("hide");
          }
        });
      
        var total = document.getElementsByClassName("hide");
        visibleProducts.innerText = `Showing ${available- total.length}  results >>`
      });

  
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };
  let totalCards = document.querySelectorAll(".card");
document.getElementById("search-input").addEventListener("search",()=>{
    filterProduct('all')
})

document.getElementById("search-input-author").addEventListener("search",()=>{
    filterProduct('all')
})