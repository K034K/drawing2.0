Hello, this is my pet project that I am doing for intership
To start project you need to have node.js and npm installed on your computer
After clonning you need to run npm install in your terminal
Then to start project you need to run `npm run watch:dev` in one terminal and `npm run serve:dev` ` in another
Then in your browser you can open http://localhost:3000/ and see the result
You will see form will see form with 3 text inputs and 2 buttons
Width and height inputs are for number of squares in the grid horizontally and vertically, I have cheking for numbers, so that you can't enter letters or symbols
Username is optinal input, you can enter your name or leave it blank
If you leave it blank, then your drawing wount be saved to database
If you enter your name, then your drawing will be saved to database
On rigth click you will see color picker, where you can choose color for your drawing
After not drawing for 5 seconds your drawing will be saved to database
You can see any users drawing by going to http://localhost:3000/show/[username] where username is name of user whose drawing you want to see
drawing of user was made by server side rendering.
For this project I used node.js, express, react, webpack, babel, nodemon, css-loader