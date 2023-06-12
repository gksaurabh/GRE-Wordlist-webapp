# GRE-Wordlist-webapp
This application can be used as a tool to learn words for the GRE test. There are a total of 1310 words along with their definition. These flash cards can be used to better memorize or learn new words. I am currently working on building a tessting/quiz feature into this application. 

Current Version of the app: [www.learnyourwords.netlify.app](https://learnyourwords.netlify.app/)

## How to run the project locally
1. First go to /backend and then run the following command
>node server.js
2. Go to the front end folder named /gre-flashcart-app, and run the following command
>npm start

A window should pop up in your browser and you should now be able to see the fully functioning app. 

## My approach
There were three main phases to this project:
1. **Data** 
    This includes:
    - Data Mining: searching for various wordlists on the internet
    - Data Validation and Clean up: Wrote a few python scripts to convert .csv wordlists into JSON format
    - Setting up the tableless database (MongoDB): Developed Schemas for our database then used the JSON format wordlist to populate the Database.

2. **Backend**
    - The backend for this project is built using Node.JS, Express.JS and connecting this with MongoDB. 
    - Endpoint Testing was conducting using postman

3. **Frontend**
    - The frontend of this project is built using React.JS

## Improvements
Many improvements can be made to this repository. One feature that can added would be a testing feature to facilitate reinforcement learning for the user through quiz/testing mechanisms. Additionaly making this feature personalized by allowing for users to create their own accounts and track learning progress would greatly improve the impact of this application. 

## Bugs
- Currently there is a bug where the definition of the words are not showing up on the main page. This will be addresed shortly. 


    
