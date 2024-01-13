# User Management Form

## Overview

=> This project is a user management form that allows users to add, update, and delete user details. 
=> The form includes fields such as firstname, middlename, lastname, gender, number, marital status, immediate joiner, mode of contact, and supports various field types including text, number, radio, checkbox, and dropdown. 
=> The application provides detailed error messages for common scenarios and uses Tailwind CSS for styling.

## Features

- **Add a User:** Users can add new user details with various fields and types.
- **Update User:** Modify existing user details with error handling for specific scenarios.
- **Delete User:** Remove user details with confirmation and prevention of deletion in edit mode.
- **Search User:** Search for a user by firstname with validation for existence.
- **Delete All Users:** Clear all user details from the table.
- **Table Display:** Shows all added user details in a table with edit and delete buttons in each row.
- **Scroll to Top:** Scrolls to the top when the user clicks the edit button.
- **Local Storage:** Stores all added user details in local storage.
- **Error Handling:** Displays specific error messages for the following scenarios:
      Missing fields: Firstname, lastname, and phone number must be provided.
      Duplicate names: Firstname and lastname must not be the same.
      Invalid number: Ensure a valid phone number is entered.
      Update without changes: Prevent updating without modifying any details.
      Existing number: Avoid adding a user with an existing phone number.
      Search non-existent user: Provide feedback if the user being searched is not present.
      Delete in edit mode: Warn users against deleting a user in edit mode.



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
