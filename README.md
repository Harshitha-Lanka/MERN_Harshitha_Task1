MERN Stack – Task 1: Basic React Application
Project Description

This project is part of MERN Stack Task 1.

1.The goal is to build a basic React application to:
2.Understand React project setup and structure
3.Create and use components
4.Learn JSX, state, and props
5.Practice the development workflow (npm start, hot reloading)

Project Setup

Created the React app:

npx create-react-app mainflow
cd mainflow
npm start


Confirmed the development server started at http://localhost:3000.

File & Folder Structure

src/ → Main app code (components, CSS, logic).

public/ → Static files (e.g., index.html, favicon).

node_modules/ → Dependencies (auto-installed).

package.json → Defines dependencies and scripts.

package-lock.json → Locks dependency versions.

.gitignore → Files ignored by Git (e.g., node_modules/).

README.md → Documentation for the project (this file).

Created Component

File: src/Hello.js

import React, { useState } from "react";

function Hello(props) {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Hello, {props.name}!</h2>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}

export default Hello;


Integrated into App.js:

import React from "react";
import Hello from "./Hello";

function App() {
  return (
    <div>
      <Hello name="Student" />
    </div>
  );
}

export default App;

🔄 Development Workflow
Start server: npm start
Open app: http://localhost:3000
Code changes reflect instantly in the browser (hot reloading).

Observations & Learnings

Learned about default React folder structure and purpose of each file.
Built a simple component using JSX, state, and props.
Understood how props pass data and state manages dynamic changes.
Saw how hot reloading makes development faster.
Gained confidence in React basics and workflow.


Author: [Harshitha Lanka]
