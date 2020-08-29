# Password-Generator

**version 1.0.0**

[For deployed version, click me](https://joeybrown-ctrl.github.io/Password-Generator/)

For week three of boot camp, I was given the assignment of making a random password generator with JavaScript. The project came with a front end already built with CSS 3 and HTML 5, and looks like this:

![Image of Password Generator](https://github.com/joeybrown-ctrl/Password-Generator/blob/master/Assets/03-javascript-homework-demo.png)

Using knowledge I had gained in class, as well as through working with a tutor, and asking questions in office hours with the bootcamp TAs, I was able to write code that makes this app functional. I pseudocoded to break down the necessary steps to build the logic that would make this run. First, I created strings for each of the types of characters that the user could choose to input (uppercase and/or lowercase letters, numbers, and special characters); I then used the string.split() method to split each of the strings of character types into arrays. Next, I created an empty array to be reassigned later. I then made a prompt which allows the user to choose a password length between 8 and 128 characters, and used two if statements to check that the user had entered a number higher than 8 but lower than 128, and had in fact entered a number. The user would be alerted if they had entered the wrong info in either case, and informed that they could refresh the page and re-enter the info, and the code would return 'undefined' to the text area. Next, I wrote a series of confirms asking the user what character types they'd like in their randomly generated password. These are followed by a series of if statements checking the condition of each character array, and if true, assigning the split arrays to the aforementioned empty array. The final if statement checks to make sure the user has selected at least one character type, alerting the user if this is not the case; if true, I wrote a for loop utilizing the Math.random() method to increment through and create a random password based on the chosen character types. And lastly, the password function is called and the password is generated.

## Built With:

* [Visual Studio Code](https://code.visualstudio.com/)
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [CSS 3](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [HTML 5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
* [Markdown](https://guides.github.com/features/mastering-markdown/) 

## Contributors

-Joey Brown <br> <gjoey.brown@gmail.com> <br> &copy; 2020 Joey Brown . All rights reserved.
