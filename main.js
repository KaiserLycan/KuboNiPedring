


// Functions for menu button
// Opens the menu dropdown then the user clicks on the button

function toggleDropDown(menu) {
    let dropmenu;
    console.log("Event activated --> toggle dropdown");
    try {
        if(menu.attributes.getNamedItem("data-menu-type").value == 'icon') {
            dropmenu = document.querySelector(".menu-3 .drop-content");
        }
    }
    catch {
        dropmenu = document.querySelector(".menu-2 .drop-content");
    }

    dropmenu.classList.toggle("show-drop-content")
}


//Closes the menu drop down when the user clicks elsewhere
function closeDropDown() {
    console.log("Event activated --> closeDropDown");
    let dropmenu = document.querySelectorAll(".drop-content");
    for(let menu of dropmenu) {
        menu.classList.remove("show-drop-content");''
    }
}

// Function to toggle FAQ answers
function toggleAnswer(element) {
    let answer = element.nextElementSibling;
    let icon = element.querySelector("i");

    if (answer.style.display === "none" || answer.style.display === "") {
        answer.style.display = "block";
        icon.classList.remove("fa-chevron-right");
        icon.classList.add("fa-chevron-down");
    } else {
        answer.style.display = "none";
        icon.classList.remove("fa-chevron-down");
        icon.classList.add("fa-chevron-right");
    }
}

function nextImage() {
    let images = document.querySelectorAll(".images img");
    for(let i = 0; i < images.length; i++ ) {
        if(!images[i].classList.contains("hidden")) {
            images[i].classList.add("hidden");

            if(i + 1 == images.length) {
                images[0].classList.remove("hidden");
            }
            else {
                images[i + 1].classList.remove("hidden");
            }
            break;
        }
    }
}


function previousImage() {
    let images = document.querySelectorAll(".images img");
    for(let i = images.length-1; i >= 0; i-- ) {
        if(!images[i].classList.contains("hidden")) {
            images[i].classList.add("reduced");
            setTimeout(() => {
                images[i].classList.add("hidden");

                if( i-1 <= -1) {
                    images[images.length-1].classList.remove("hidden");
                    images[images.length-1].classList.remove('reduced');
                }
                else {
                    images[i - 1].classList.remove("hidden");
                    images[i-1].classList.remove('reduced');
                }
            }, 600);
            
            break;
        }
    }
}

// Array of images with their titles and descriptions
const images = [
    {
        src: "Assets/Images/Billiards room.1.jpg",
        title: "Billiards Room",
        description: "Enjoy a relaxing game of billiards in our fully equipped lounge."
    },
    {
        src: "Assets/Images/Campsite.jpg",
        title: "Campsite",
        description: "Experience the great outdoors with our scenic camping grounds."
    },
    {
        src: "Assets/Images/Huge space.jpg",
        title: "Spacious Venue",
        description: "A vast open space, perfect for gatherings and events."
    },
    {
        src: "Assets/Images/Pool 1.jpg",
        title: "Swimming Pool",
        description: "Take a dip and cool off in our refreshing swimming pool."
    }
];

// Get HTML elements for the gallery
let currentIndex = 0;
const galleryImage = document.getElementById("galleryImage");
const galleryTitle = document.getElementById("galleryTitle");
const galleryDescription = document.getElementById("galleryDescription");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Function to update image, title, and description
function updateGallery(index) {
    galleryImage.style.opacity = "0";

    setTimeout(() => {
        galleryImage.src = images[index].src;
        galleryTitle.innerHTML = images[index].title; 
        galleryDescription.innerHTML = images[index].description;
        galleryImage.style.opacity = "1";
    }, 300);
}

// Event Listeners for Buttons
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateGallery(currentIndex);
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateGallery(currentIndex);
});

// Initial load
updateGallery(currentIndex);
