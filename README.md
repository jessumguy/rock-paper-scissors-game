[DEMO](https://jessumguy.github.io/rock-paper-scissors-game/ "Rock Paper Scissors")

# Update 31/01/2021

v0.7 released! I've finally come back to this project, and have decided to power through along in my journal to be a Developer after self-reflection on my life in general, but that is a story for another day...

---

I've completed the section on [DOM Manipulation](https://www.theodinproject.com/lessons/dom-manipulation) and proceeded to refactor my existing code in adding of buttons and such for interactivity. Boy was it difficult - Countless house spent googling everything, checking other other's code to see how they did it, and even more time in trial and error. 

**New Stuff Added and Learnt:**

1. Actual buttons on the page that do things: 
* i. Clicking each of the Rock, Paper, Scissors buttons to start the game
* ii. A `RESET` button that triggers a `confirm()` prompt giving the user a Cancel/Ok choice where the latter would reset the game. This button then changes to `PLAY AGAIN` where its sole function is to reload the page. 
* iii. An `ABOUT` button that toggles a `<div>` container to show/hide.

2. DOM Manipulation of various `<div>` containers and `<p>` elements. Notably to display the Scores after each round has been computed, and the Final Game Score once a player gains 5 points, along with general use of `querySelectors` and `getElementById` to link elements in the HTML to logic in the script.

3. General use of Chrome's Dev Tools in placing breakpoints to debug when the code wasn't working as expected. 
* The earlier console-only version of the game relied on the `prompt()` method as a way to `pause` the code mid exectution. Upon removing it, the entire game would play itself out to 5 points after clicking on one of the rock-paper-scissors button once (eg: Clicking Rock would assign that as my playerSelection, and the game would proceed to run until 5 points were achieved by either player.)

**Future Additions:**

1. Add images for each button
2. Use of CSS to beautify the page
3. Make page mobile friendly
4. Share this on the Odin Project

---

# Prologue

Game was originally added to the repository back in 21/06/2020.

The original game now titled "index(console-only-game).html" could only be played via the console.  It worked pretty well using the inbuilt `prompt()` method as a way 'pause' for user input in between function exectutions. 

**Notable logic**

It also had conditions to accept both lower and upper case inputs (eg: pApEr, ROCK, etc), cancel condition to quit the game if the user clicked 'cancel' in the prompt() box, and would also loop the input prompt() if an unrecognised input was submitted.


# What is this

Rock Paper Scissors Project from [THE ODIN PROJECT - Foundations](https://www.theodinproject.com/courses/foundations)