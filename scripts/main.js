// Set all elements that are to be changed
var header = document.getElementsByTagName("header")[0];
var nav = document.getElementsByTagName("nav")[0];
var blanket = document.getElementById("blanket");

// Moves navigation to show
var openNav = () =>
{
    // Set open navigation styles
    nav.style.marginLeft = 0;
    blanket.style.opacity = 0.8;
    blanket.style.pointerEvents = "auto";
}

// Moves navigation to hide
var closeNav = () =>
{
    // Set close navigation styles
    nav.style.marginLeft = "-400px";
    blanket.style.opacity = 0;
    blanket.style.pointerEvents = "none";
}

// When user scrolls
var scroll = () =>
{
    
    // Checks if document has been scrolled more than 350px from top
    if (document.getElementsByTagName("html")[0].scrollTop > 100)
    {
        // Moves up, adds background and border 
        header.classList.add("scroll");
    }
    else
    {
        // Moves down, takes away background and border
        header.classList.remove("scroll");
    }
}

// When user presses down arrow
var moveDown = () =>
{
    // Scroll to bottom of image
    window.scrollTo({
        // Height of window before header
        top: window.innerHeight - 94, 
        // smooth scroll
        behavior: 'smooth' 
    });
}