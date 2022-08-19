# Backend Developer test

Thank you for applying our job.

Here's a test for you, and you have 2 days to do it.

Make sure you read the whole document carefully and follow the guidelines in it.

## Context

Build a RESTful API that can `get/create/update/delete` user data from a persistence database

### User Model

```
{
  "id": "xxx",                  // user ID 
  "name": "test",               // user name
  "address": "",                // user address
  "description": "",            // user description
  "createdAt": ""               // user created date
}
```

## Requirements

### Functionality

- The API should follow typical RESTful API design pattern.
- The data should be saved in the DB.
- Provide proper unit test.
- Provide proper API document.

### Tech stack

- Use Node.js and Typescript.
- Use any Sql DB.

### Bonus

- Write clear documentation on how it's designed and how to run the code.
- Write good in-code comments.
- Write good commit messages.
- An online demo is always welcome.
- Use VS Code container to build the development environment.

### Advanced requirements

*These are used for some further challenges. You can safely skip them if you are not asked to do any, but feel free to try out.*

- Provide a complete user auth (authentication/authorization/etc.) strategy, such as OAuth.
- Provide a complete logging (when/how/etc.) strategy.
- Imagine we have a new requirement right now that the user instances need to link to each other, i.e., a list of "followers/following" or "friends". Can you find out how you would design the model structure and what API you would build for querying or modifying it?

## What We Care About

Feel free to use any open-source library as you see fit, but remember that we are evaluating your coding skills and problem solving skills.

Here's what you should aim for:

- Good use of current Node.js & API design best practices.
- Good testing approach.
- Extensible code.

## FAQ

> Where should I send back the result when I'm done?

Fork this repo and send us a pull request when you think it's ready for review. You don't have to finish everything prior and you can continue to work on it. We don't have a deadline for the task.

> What if I have a question?

Create a new issue in the repo and we will get back to you shortly.
