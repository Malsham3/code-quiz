# code-quiz

In this project, the ultimate task is to generate a fully functional and easy to navigate timed quiz. 
The first page includes a welcome message, a begin quiz button and a list of rules to describe the nature of  the quiz. Once the begin quiz button is clicked, the first question is displayed along with answers in form the of buttons, rest of the questions follow the same interface and functionality. When the quiz is over, the timer stops and the user's score is shown out of a total of 100 points. 

On the HTML index page, there are multiple div's which display's are switched on and off depending on specific buttons pressed. 

- Begin quiz button hides the main page and displays the first question  ( or the questions div). 
- Inside of the questions section/div, a new question is displayed. This pattern continues after each answer clicked until there aren't more questions.
- Feedback message of the accuracy of the user's answer is displayed as correct / incorrect. 
- Once there are no more questions, a score is displayed. Along with that, a submit initials form that takes the user's initials and saves it to local storage along with their score.
- At the same time, the initials and scores are to be added as an object player inside the array players.
- Then the data is to be displayed in the high scores table which is viewable once "view highscores" button is clicked. 
- The previous step is only made possible through a function that creates data cells, placed in data rows generated per game / user initials submitted. 

Side note: displaying the data on the table still needs work and isn't functioning at the moment


gitHub repository link: https://github.com/Malsham3/code-quiz
Deployed application link: https://malsham3.github.io/code-quiz/