# Amazon-E-Commerce-using-React

##### This repo mainly the implementation for creating E-commerce project, and it is idea is to create the core features of Amazon website, and also I have added new features to experience different ideas and to add my own signature on it

## Project Overview

-In this project, you'll be able to view different products, and you can add them to card, remove them from it, increase OR decrease the quantity of each product and after if you are logged in that you can proceed to the checkout and pay your order through Stripe and after that you will be redirected to your orders page to view all the orders' history, and also you can register and create as many accounts as you want to be able to complete the process all the way through other that you are free to browse the products as guest.

## App Functionality

- In this application, the main page displays a list of "Products" (i.e. items), each of which contains:
     * Description
     * Image
     * Price
     * Rating
     
- The customer can add as many products as he/she wishes for to the cart and also can control the product's quantity within the cart whether to increase it or to decrease it also there is a feature that allows the customer to remove the product completely from the cart.
     
- The user can be just browsing the products and add the products or even can add the items that he/she wants and mange his own cart but in order to proceed to the checkout the customer has to sign in if he/she has already created an account before or simply to create a new account and then proceed with the flow.

- At the cart or at the checkout page, the customer have a magnifier feature to allow him/her to see the details of the product that they are going to buy.

- At the checkout page, there is a brief about the products selected by the customer and a section for the payment that is totally secured and is processed thought Stripe.

- After the user successfully completes the payment, he/she would be redirected to a page that contains all the previous orders created by him to track his/her shopping history.

## The main tools and technologies used in this project:

<a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="100" height="100"/> </a> [![N|Stripe](https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/200px-Stripe_Logo%2C_revised_2016.svg.png)](https://stripe.com/en-gb-us)  <a href="https://firebase.google.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="100" height="100"/> </a>


## Installation

1. Download the code as ZIP OR Clone the project
    ```sh
    git clone https://github.com/Mayar-Elabbasy/Amazon-E-Commerce-using-React.git
    ```
2. cd into the project. 
    ```sh
    cd Amazon-E-Commerce-using-React/
    ```
3.  Run this following command to add all the dependencies included in the ```package.json``` file --> It is a file that holds the metadata relevant to the project, and it is used for managing the project's dependencies, scripts, version and a lot more.
    ```sh
    npm install
    ```
    OR
    ```sh
    yarn install
    ```
4. You are ready to go doing the final step to run
    ```sh
    npm start
    ```
    OR
    ```sh
    yarn start
    ```
    Congratulations, by running the last command the app will open in the development mode.\
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
    


###### In order to have the full cycle working including payment feature, kindly follow the instructions mentioned at the README.md file in this Repo  [Amazon-E-Commerce-Cloud-Functions-for-Firebase](https://github.com/Mayar-Elabbasy/Amazon-E-Commerce-Cloud-Functions-for-Firebase)

###### Happy shopping ^_^

## Author
**Mayar Elabbasy**

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.




## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
