# Notes Manager

> A simple API for managing notes.

## Prerequisites

Before you begin, ensure you have met the following requirements:

* You have installed [Node.js](https://nodejs.org/en/)
* You have a recent version of npm installed. (This is usually installed with Node.js)

## Running the API

To run the API, follow these steps:

1. Open your terminal.

2. Navigate to the project directory:
    ```bash
    cd /path/to/your/project
    ```

3. Install the project dependencies:
    ```bash
    npm install
    ```

4. Run the server:
    ```bash
    node server.js
    ```

   Replace `server.js` with the name of your server file, if it's different.

The server should now be running at `localhost:5000` (or whatever port you've set in your code).

## Running the Client Application

The client application is built with React. Follow these steps to start the client-side:

1. Open another terminal (separate from the one running the server).

2. Navigate to the client-side directory of the project:

```bash
cd /path/to/your/project/client
```

Install the client-side dependencies:

```bash
npm install
```

Run the client-side application:

```bash
npm start
```

The client application should now be running at localhost:3000 (or whatever port you've set in your code).

**NOTE**: Make sure the API server is running concurrently with the client application for full functionality.

## Running the API and Client Together

To use the full functionality of the Notes Manager, both the API and the client-side application should be running at
the same time. Ensure you have two terminals open: one for the API (the server-side), and another for the client-side
application.

## How to Use the Notes Manager

After you have successfully started both the server-side and client-side as described in the previous sections, you can
interact with the application using your web browser. Visit http://localhost:3000 , and you should see the homepage of
the
Notes Manager application. You can navigate to various functionalities from there.
On the homepage, there are links to various functionalities such as:

1. Display: View all the existing notes.
2. Add: Add a new note.
3. Delete: Delete an existing note.
4. Update: Update the content of an existing note.

Clicking on each link will take you to the corresponding page where you can perform the described operation.

Enjoy using Notes Manager!

**NOTE**: Replace /path/to/your/project, localhost:3000, and localhost:5000 with your actual project's path and your
actual server's and client's addresses if they're different.

**Note**: Your browser must be connected to the internet and must have JavaScript enabled for the application to work
properly.

This application is best viewed on modern browsers like Google Chrome, Firefox, Safari, and Edge.

## Contributing to Project Name

To contribute to Project Name, follow these steps:

1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. Push to the original branch: `git push origin <project_name>/<location>`
5. Create the pull request.

Alternatively, see the GitHub documentation
on [creating a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).
