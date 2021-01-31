# Update 31/01/2021

I've finally come back to this project, and have decided to power through along in my journal to be a Developer after self-reflection on my life in general, but that is a story for another day...

---

I've completed the section on [DOM Manipulation](https://www.theodinproject.com/lessons/dom-manipulation) and proceeded to refactor my existing code in adding of buttons and such for interactivity. Boy was it difficult - Countless house spent googling everything and even more in trial and error. 

**New Stuff Added and Learnt:**

1. Actual buttons on the page that do things: 
* i. Clicking each of the Rock, Paper, Scissors buttons to start the game
* ii. A `RESET` button that triggers a `confirm()` prompt giving the user a Cancel/Ok choice where the latter would reset the game. This button then changes to `PLAY AGAIN` where its sole function is to reload the page. 
* iii. An `ABOUT` button that toggles show/hide a `<div>` container containing more information.

2. DOM Manipulation of various `<p>` elements. Notably to display the Scores after each round has been computed, and the Final Game Score when once a player achieves 5 points, along wiht general use of `querySelectors` and `getElementById`.

3. General use of Chrome's Dev Tools in placing breakpoints to debug when the code wasn't working as expected. 
* Notably, the console-only version of the game relied on the `prompt()` method as a way to `pause` the code mid exectution. Upon removing it, the entire game would run upon clicking one of the rock-paper-scissors once (eg: Clicking Rock would assign that as my playerSelection, and )



**Challenges faced:**






---

# Prologue

Game was originally added to the repository back in 21/06/2020 where I eventually got lazy and stopped all progress.

The original game now titled "index(console-only-game).html" could only be played via the console.  It worked pretty well using the inbuilt `prompt()` method as a way 'pause' for user input in between function exectutions. 

**Notable logic**

It also had conditions to accept both lower and upper case inputs (eg: pApEr, ROCK, etc), cancel condition to quit the game if the user clicked 'cancel' in the prompt() box, and would also loop the input prompt() if an unrecognised input was submitted.


# What is this

Rock Paper Scissors Project from [THE ODIN PROJECT - Foundations](https://www.theodinproject.com/courses/foundations)