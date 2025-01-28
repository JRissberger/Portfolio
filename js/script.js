window.onload = ()=>{
   document.querySelector("#previous").onclick = viewPrevious;
   document.querySelector("#next").onclick = viewNext;
   document.querySelector("#galleryPrevious").onclick = viewGalleryPrevious;
   document.querySelector("#galleryNext").onclick = viewGalleryNext;
   initialProjectView();
}

//counter for current featured image and total images
let galleryView = 0;
let galleryTotal = 5;

//counter for current project view and total number of projects
let projectView = 0;
let totalProjects = 3;

//scrolls between gallery images
function viewGalleryNext()
{
    galleryView++;

    //rolls over to min value if needed
    if (galleryView > galleryTotal - 1)
    {
        galleryView = 0;
    }

    //loads gallery image
    viewGalleryImage();
}
function viewGalleryPrevious()
{
    galleryView--;

    //rolls over to max value if needed
    if (galleryView < 0)
    {
        galleryView = galleryTotal - 1;
    }

    //loads view
    viewGalleryImage();
}

//displays image in featured gallery
function viewGalleryImage()
{
    //switch to check counter value
    switch(galleryView)
    {
        case 0:
            document.querySelector("#galleryImg").innerHTML = "<img src = 'media/AOTitle.png' alt = 'Astro Outlaw title screen'></img>";
            break;
        case 1:
            document.querySelector("#galleryImg").innerHTML = "<img src = 'media/AOScreenshot1.png' alt = 'Astro Outlaw gameplay'></img>";
            break;
        case 2:
            document.querySelector("#galleryImg").innerHTML = "<img src = 'media/AOScreenshot2.png' alt = 'Astro Outlaw gameplay'></img>";
            break;
        case 3:
            document.querySelector("#galleryImg").innerHTML = "<img src = 'media/AOScreenshot3.png' alt = 'Astro Outlaw gameplay'></img>";
            break;
        case 4:
            document.querySelector("#galleryImg").innerHTML = "<img src = 'media/AOScreenshot4.png' alt = 'Astro Outlaw gameplay'></img>";
            break;
        default:
            document.querySelector("#galleryImg").innerHTML = "image not found";
    }
}
//scrolls to previous project view
function viewPrevious(){
    //decreases counter by 1
    projectView--;

    //Checks value, rolls over to max value if needed
    if (projectView < 0)
    {
        projectView = totalProjects - 1;
    }

    //loads project view
    viewProject();
}

//scrolls to next project view
function viewNext(){

    //increments counter by 1
    projectView++;

    //checks view value, adjusts value if needed to prevent overflow
    if (projectView >= totalProjects)
    {
        projectView = 0;
    }

    //loads project view
    viewProject();
}

//displays new project
function viewProject()
{
    //switch to check counter value
    switch(projectView)
    {
        case 0:
            document.querySelector("#othercontent").innerHTML = 
            "<h5>Genetically Engineered Bubbles</h5>" +
            "<p>Create bubbles out of a variety of strange materials, then pit them against each other in a battle simulation! </p>" +
            "<ul>" +
                "<li>Worked with 2 other people to create this game in Godot over the course of 48 hours for the 2025 Global Game Jam.</li>" +
                "<li>Developed the “creation screen”, where the player drags and drops their selected materials and the stats of the created bubble are calculated based on the materials placed in the bowl.</li>" +
                "<li>Programmed a system to dynamically update the images of the custom bubbles in the arena to accurately reflect the materials selected by the player.</li>" +
               "<li>Assisted in the creation the mechanics used to store and transfer the player's created bubble stats to the opponent bubble after the player's bubble wins a battle.</li>
                "<li><a href = 'https://globalgamejam.org/games/2025/4'>Site Link</a></li>" + 
               "<li><a href = 'https://github.com/JRissberger/bubble'>Github</a></li>" +
            "</ul>";
             document.querySelector("#otherimg").innerHTML = 
            "<img src = 'media/bubble.png' alt = 'gameplay screenshot of bubble creation screen'></img>";
            break;
        //card flip game
        case 1:
            document.querySelector("#othercontent").innerHTML = 
            "<h5>Card Flip Game</h5>" +
            "<p>Match as many cards as you can before you run out of moves or time in this unofficial Pokemon fan game." +
                " Scoring is based on the elemental type the player is assigned, and how it matches up against the flipped card's elemental type. </p>" +
            "<ul>" +
                "<li>Solo project created using HTML, CSS, and JavaScript.</li>" +
                "<li>Utilized manipulation of CSS class lists to simulate cards being flipped, and managed the board and card states with JavaScript.</li>" +
                "<li>JavaScript was also used to track the current state of the game, shuffle the cards, and reset the board/end the game as needed. </li>" +
                "<li><a href = 'https://people.rit.edu/jbr4368/235/project3/'>Site Link</a></li>" + 
            "</ul>";
            document.querySelector("#otherimg").innerHTML = 
            "<img src = 'media/cardgame.png' alt = 'gameplay screenshot of card game'></img>";
            break;

        //possum parenthood
        case 2:
            document.querySelector("#othercontent").innerHTML = "<h5>'Possum Parenthood</h5>" +
            "<p>Play as a mother possum, sneaking around to find food for her children. Avoid the humans and hide in boxes to collect all the food" +
            "before time runs out! But watch out--if you get caught, you'll lose precious time playing dead!" +
        "</p><ul>" +
            "<li>A group project made with 4 other students</li>" +
            "<li>Programmed in C#, using Monogame</li>" +
            "<li>Areas worked on: " +
                "<ul>"+
                    "<li>Initial class framework</li>"+
                    "<li>Enemy movement</li>" +
                    "<li>Enemy interaction with player</li> " +
                    "<li>Player 'play dead'  mechanism</li>" +
                    "<li>General bug fixes</li>"+
                "</ul>"+
            "</li><li><a href = 'https://github.com/macarenzie/ggg'>Github</a></li></ul>";
            document.querySelector("#otherimg").innerHTML = "<img src = 'media/possum_gameplay.png' alt = 'gameplay screenshot of possum game'>";
            break;
        default:
            document.querySelector("#othercontent").innerHTML = "project not found";
            document.querySelector("#otherimg").innerHTML = "image not found";
    }
}

//used to load the initial view
function initialProjectView()
{
    //Featured project gallery TODO: add images
    document.querySelector("#galleryImg").innerHTML = "<img src = 'media/AOTitle.png' alt = 'Astro Outlaw title screen'></img>";

    //Other projects
    document.querySelector("#othercontent").innerHTML = 
            "<h5>Genetically Engineered Bubbles</h5>" +
            "<p>Create bubbles out of a variety of strange materials, then pit them against each other in a battle simulation! </p>" +
            "<ul>" +
                "<li>Worked with 2 other people to create this game in Godot over the course of 48 hours for the 2025 Global Game Jam.</li>" +
                "<li>Developed the “creation screen”, where the player drags and drops their selected materials and the stats of the created bubble are calculated based on the materials placed in the bowl.</li>" +
                "<li>Programmed a system to dynamically update the images of the custom bubbles in the arena to accurately reflect the materials selected by the player.</li>" +
               "<li>Assisted in the creation the mechanics used to store and transfer the player's created bubble stats to the opponent bubble after the player's bubble wins a battle.</li>
                "<li><a href = 'https://globalgamejam.org/games/2025/4'>Site Link</a></li>" + 
               "<li><a href = 'https://github.com/JRissberger/bubble'>Github</a></li>" +
            "</ul>";
             document.querySelector("#otherimg").innerHTML = 
            "<img src = 'media/bubble.png' alt = 'gameplay screenshot of bubble creation screen'></img>";
}
