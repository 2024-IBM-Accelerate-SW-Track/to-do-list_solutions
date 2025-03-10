# Project Week 1: To-do list application
## Introduction
As a team, you should create and style the front-end of a to-do list web application using React and Material UI components. A typical user wants to be able to use a to-do list to organize tasks. Keeping user stories in mind when designing applications helps determine important features. We encourage you to take a unique approach to this lab as there is no one right answer. 
- [Material Design](https://material.io/design/introduction) is a design system that can guide you on what UI decisions to make if you would like to explore best practices, but functionality is the key focus of the lab.
- No back-end is required for this lab, all data (tasks) should live in the front-end.


## Requirements
Feature requirements (Week 1 task is complete when you):
+ Design your personalize about me page.
+ **Take in and display** to do list items.

Implementation requirements:
+ Use [**Material UI components**](https://material-ui.com) at least once throughout the app.
+ Implement at least one **functional component**.


## Instructions

### About Page
Note: The styling for all pages are provided for you. However, feel free to play around with the styling to gain better understanding of how they work.
1. Navigate to src/pages/About.js. Replace the `p` tag with the content below. Your content should include:
    - A profile picture
    - Details about you like Interests, fun fact so on... To achieve this, consider using div tags to split the page in half like so
 ```
 <div>
 <div className="split left">
 <div className="centered">
 <img 
 className="profile_image"
 // Image goes here
 alt="Profile Pic"
 ></img>
 </div>
 </div>
 <div className="split right">
 <div className="centered">
 <div className="name_title">Your Name</div>
 <div className="brief_description">
 // Details about you goes here
 </div>
 </div>
 </div>
 </div>

 ```
2. Replace the dummy file with your photo in the assets folder. i.e /src/assets/<profile_pic_name.jpg>
3. Import About.css file and profile picture in your About.js file like so 
 ```
 import "./About.css";
 import <profile_pic_name> from "../assets/profile_pic_name.jpg";
 ```
### TO-DO List Application
1. Navigate to `src/components/AddTodo.js`
    + `AddTodo.js`
      1. import Button and TextField from material UI like so: `import { Button, TextField } from "@mui/material";`
      2. Both `handleChange` and `handleSubmit` functions are already provided for you. Paste the code below in the `div` tag inside the render() function. 
 ```
 <TextField
 label="Add New Item"
 variant="outlined"
 //onChange={call handleChange here}
 //value={set the content state here}
 />
 <Button
 style={{ marginLeft: "10px" }}
 //onClick={call handleSubmit here}
 variant="contained"
 color="primary"
 >
 Add
 </Button>

 ```
    + navigate to`src/components/todos.js`
      1. Import material UI components like so: `import {Card,CardContent,Grid,ListItemButton,ListItemText,Checkbox,} from "@mui/material";`
      2. Inside the `CardContent` MUI tag replace the `add todo content`. Remember to use curly braces {}.
      3. Enter "You have no todo's left" in the `p` tag.
      4. Inside the `return function` replace the `call todo list here`.
2. Navigate to `src/pages/Home.js`. Import `AddTodo.js`, `todos.js`, and `Home.css` files. By now you should be familiar with imports
3. In Home.js file:
  + Create a list with the name `todos` inside this.state in the constructor()
  + Inside the render() function replace the `p` tag with both Todos and AddTodo components like so:
    + `<Todos todos={make your change } />`. Hint: Replae "make your change" with current todo list state. Remember to use the `this` keyword
    + `<AddTodo addTodo={make your change} />`. Hint: replace make your change with addTodo() function. Remember to use the `this` keyword


## Running Your Application
Run the below commands to render the application and open it on the browser:
* `npm install` - This command is used to install all the dependencies listed in a project's `package.json` file.
* `npm start` - Compiles and starts your application. It runs the script defined in the start property of the scripts section in package.json.


## Testing
When testing web components, developers often use ids to uniquely define elements on a page. The React Testing Library provides a query that can identify items with the attribute data-tested to do just that (reference [here](https://testing-library.com/docs/queries/bytestid/)). We have implemented simple tests in `App.test.js` that will look for ids in your code. Do not push changes to the tests in this file. To get familiar with the idea of testing ids, implement the attributes below:
 + `data-testid="new-item-textfield"` on the TextField component, which takes user input for new items.
 + `data-testid="new-item-button"` on the Button component, which submits new items to the to-do list.

Material UI components (and other libraries) render as HTML components under the hood, so using Material UI's TextField would still render in the DOM as an TextField element and pass the tests for this lab.

To test your code, you can run `npm test`. It runs the script defined in the test property of the scripts section in package.json. For example:


## Pre-session Materials
Here is a [**link**](https://ibm.box.com/s/2ilcx4q3xornonec3kh5s8aadzl2rc48) to the pre-session material that was provided to you earlier.
