var slideIndex = 1; 
showDivs(slideIndex); // as soon as it compiles the page, it shows the first image by default

function changeDiv(n) // takes either a -1 or a 1 from the arrow buttons and transfers it to the main function
{
  showDivs(slideIndex += n); // slideIndex is the current image being shown, which is represented by a number (1 by default). if the left arrow is clicked then it will send " 1 + (-1)" to the showDivs function
}

function divActuel(n) // this function is taken from the onclick of the radio buttons underneath the images. It simply takes the actual number of the button that was clicked
{
  showDivs(slideIndex = n); // slideIndex takes the number of the button clicked and shows the image in that position
}

function showDivs(n) // this function takes the number passed down from the two functions above(or, if the page was just loaded, 1 by default) and does all the algorithm to both show the correct image AND change the visuals of the buttons underneath
{
  var i; // to be used on the loops
  var x = document.getElementsByClassName("myImages"); // gets all elements with the class name of "myImages" which are all 6 images
  var dots = document.getElementsByClassName("imgSelect"); // gets all elements with the class name of "imgSelect" which are the buttons underneath the images
  if (n > x.length) { // if the parameter is the last button/image and if you press +1, this "if" will make sure it will reset to the first image
    slideIndex = 1;
  }    
  if (n < 1) { // if the parameter is the first button/image and if you press -1, this "if" will make sure it will loop around and show the last image
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) // it hides every single image so that we can finally show the proper one on line 32
  {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) // the same concept as the last loop, it makes all the buttons underneath grey so that we can finally show the proper one on line 33
  {
    dots[i].className = dots[i].className.replace(" slide-button-red", " slide-button-empty"); // it replaces the active button style to the empty one
  }
  x[slideIndex-1].style.display = "block";  // this is where the magic happens, it changes the "display: none" we set in the loop(line 24) to display block so that the image we want "slideindex-1"(it's -1 because the x is an array and it starts with 0) is shown
  dots[slideIndex-1].className += " slide-button-red"; // again, the same concept as the above line, it changes the name of the active button's class to red
}

$(".bookbutton").click(function() // whenever you click on an element with the class name of bookbutton it launches this function
{
  if($(window).width() < 528) // pretty self explanatory, if the width of the window is smaller than 528 it goes in the if

  {
    $("#booklist").slideToggle(); // Display or hide the elements with the ID of booklist with a slide into your dm's move.
  }
})

$(".destbutton").click(function() // the exact same as the one above but for a different menu/list
{
  if($(window).width() < 528)
  {
    $("#destlist").slideToggle();
  }
})