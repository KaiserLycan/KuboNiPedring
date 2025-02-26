


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