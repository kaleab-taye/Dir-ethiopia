# Mereb INVENTORY Web App

# **Installation**

**Install the following tools. Be sure to be on ubuntu 18+ version.**

- Install node version v14.20.1 and above following instruction from https://nodejs.org/en/download/package-manager/

# Contents and Usage

You can refer each file's top comment and internal folder's readme to get more details.

- This is the React app with typescript to build Mereb HRM Web frontend.
- All UI is based and inspired by the following template: [Berry Dashboard](https://berrydashboard.io/free/dashboard/default)
- For global state management, we use [Recoil](https://recoiljs.org/).
- Eslint and prettier are configured for code guidelines.
- Precommit is configured so it will enforce code guidelines. You can't commit if you are not following configured code guidelines.
- Github actions CI/CD `Github Actions` with are used for Continues integrations, it will run tests,checks PR merge status, code review approval and  
   checks code quality, you can not merge until all of them are passed
- Tests will be written using jest. Read more on jest with react [here](https://jestjs.io/docs/tutorial-react) in the official documentation

# Dependencies and Communication

- Node dependencies in package.json. Do not add new node dependency if not absolutely necessary
- Communicates with backend services using grpc clients. More on this in `src/grpc` folder readme.

# Production Deployment

- Currently There is no configured deployment process but as a concept continues integration with multiple cloud env will be used

## Available Scripts for Development Purposes

In the project directory, you can run:

- `npm install` - Install the dependencies in the node_modules folder.
- `npm start` - Runs the app in the development mode.
- `npm test` - Launches the test runner in the interactive watch mode.
  See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests)for more information.

> Further details about the project can be found in [clickup doc](https://app.clickup.com/42092860/v/dc/184j9w-160).

# **Instruction for Task and Code Management**

# Task Management With [ClickUp](https://app.clickup.com/)

- After creating an account on clickup , you will be invited to the mereb technologies workspace.

## Creating Task

- We can make the task in every list as per the requirement of the project. The task can be assigned to the team member using the assignee feature and accordingly.

## Creating Subtask

- If any task has many subtasks, we can create the subtask and their subtask and assign them to our team members.

## **Steps to manage project at the Task level with ClickUP**

1. Set due date and estimated time: REQUIRED

- On ClickUp , we set a due date and estimated time of the tasks and subtask so that the assignee can complete the assigned task as per the estimated time and due date.

2. Add a description to task/subtask: REQUIRED

- We will add the description or guideline for the task in the description box of the task/subtask so that the assignee gets the clarity to perform the assigned task.

3. Change the status: REQUIRED

- When the assignee starts work on the task, then they need to change the status of the tasks/subtask as per the status defined on the ClickUp.

  ![Screenshot from 2022-11-15 15-52-06](https://www.webdew.com/hs-fs/hubfs/project-task.png?width=171&name=project-task.png)

4. Add attachment/checklist/template where applicable

- We can also add the attachments/checklist/template to any of the tasks/subtasks as per the requirements of the projects or per the need of the job to be performed by the assignee.

5. Add Comments

- If the work is completed or the assignee has some queries, they can also use the comment section and mention the team member's name. And project managers or other team members also can comment and reply to specific comments.

> NB: For more information about how to manage Tasks with ClickUp [click here!](https://www.webdew.com/blog/how-to-use-clickup)

# Code Management With [GitHub](http://github.com/) From [ClickUp](https://app.clickup.com/) Tasks

> N.B: When creating pull request, you must follow format of the pull request template already prepared.

1.  Clone this repository

2.  Manage GitHub from ClickUp

        You can manage GitHub from ClickUp tasks, including:
                - Create and checkout a new branch.
                - Copy a commit message to link tasks.
                - Create a new branch.
                - Create a pull request.

3.  Do your task on new branch. Checkout a new git branch from clickup

        use ClickUp github pull request toggle to create a branch

    ![Screenshot from 2022-11-15 15-52-06](https://user-images.githubusercontent.com/39329565/201926515-a43ccb10-29b9-448e-ab7c-3aeff63993c3.png)

4.  Then make your changes and stage it
    use clickup's github integration to get the commit message and commit it

    ![Screenshot from 2022-11-15 15-52-06](https://user-images.githubusercontent.com/39329565/201926515-a43ccb10-29b9-448e-ab7c-3aeff63993c3.png)

5.  Then push your changes to origin

        git push --set-upstream origin <branch>

6.  Create and manage pull requests from ClickUp. When creating pull request, you must follow format of pull request template.

        Once a pull request is linked , you can see the following details from the ClickUp task:
        - The person opened the pull request.
        - Any assigned reviewers.
        - CI/CD status.
        - The pull request status including open, review requested, under review, merged, and closed.

7.  Wait for all the checks to pass and make sure you got the approvals from senior developers
8.  **DO NOT** merge your changes when completed. Ask for senior developers to merge your change

> NB: For more information about how to use ClickUp and GitHub [click here!](https://help.clickup.com/hc/en-us/articles/6305771568791-GitHub-integration#manually-associating-github-activity)

# **Instructions for Code Documentation**

## **File level** - _Required_

- Any file that contains implementation must have the following lines above as comment

```
 /**
 Purpose - what is the purpose this file is trying to achieve
 Logic - how(in what logic) does this file tries to achieve its purpose
 Usage - when and where is this file implementation used
 Depends on - on what other services and dependencies is this file implementation depends on
 Communicates with - to which other services this file implementation communicates with
 **/
```

## **Folder level** - _Required_

Any folder that contains implementation must have a README. And the following sections must be included in the README

- **Installation section**, if folder is package
- **How to run section**, if folder is package
- **Purpose section** - what this folder/package, tries to achieve
- **Contents and Usage** - what each file/folder tries to achieve briefly and any approaches of its logic worth mentioning
- **Dependency and Communication** - with what external dependencies and services this folder/package related
- **Additional intricacies** - special peculiarities that may mislead others and worth mentioning

## Best Practices for Documenting Your Code

1.  Write What a function does

2.  Write What are the function's parameters or arguments are

3.  Write What a function returns

4.  Apply coding conventions, such as file organization, comments, naming conventions,
    programming practices, etc.
    An important tip: Naming files should be descriptive and consistent!

> NB: for more information about how to document your code [click here!](https://guides.lib.berkeley.edu/how-to-write-good-documentation)

# **Automated Testing Requirement**

- Any implementation will not be assumed complete without a corresponding unit test.
- Everyone should write some level of testing for their implementation. If it's a new file, name the test file as `*.spec.ts`.
- Run the test using `npm run test`.

# **Communication**

- for async communication slack and click-up tasks are used
- tag the team for questions and blocking issues

# **DO NOT DO'S**

1. Do not push directly to main branches
2. Do not force merge conflicts
3. Do not merge before all checks are passed and your changes are approved by senior developers

# **Try to follow this code guidelines**

- https://www.makeuseof.com/must-follow-react-practices/
- https://x-team.com/blog/css-best-practices/
