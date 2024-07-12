# Mamma's Recipes

## Overview
Mamma's Recipes is your personal recipe book  _Italian-Cuisine-fueled_ full-stack application allows users to create, manage, and browse their favorite recipes in a simple and user-friendly interface.

## Technologies used
- [Django](https://www.djangoproject.com/) for backend
- [React](https://react.dev) for frontend
- [AWS](https://aws.amazon.com/) S3 for frontend deploying 
- [AWS](https://aws.amazon.com/) EC2 for backend deploying
- [Postman](https://www.postman.com/) for API testing
- [TailwindCSS](https://tailwindcss.com/) for styling

## Objectives
- [ ] Made the app functional with all the routes correctly working
- [ ] Allowed users to sign up, login and logout of the site
- [ ] Made basic UI/UX
- [ ] Reached Minimum Viable Product (MVP)
- [ ] Deploy the app publicly online
- [ ] Allowed users to search for recipes

## User Stories
- As a user, I would like to create new recipes.
- As a user, I would like to browse all my recipes.
- As a user, I would like to view details of a single recipe, including ingredients and instructions.
- As a user, I would like to edit and delete my recipes.
- As a user, I would like to search for recipes using ingredients.


## Routes Table

### Recipes

| **URL** | **HTTP Verb** | **Action** |
|------|---------------|---------|
| /recipes/ | GET | index   |
| /recipes/:recipeId |  GET | show   |
| /recipes/ |  POST |  create |
| /recipes/:recipeId | PUT  |  edit |
| /recipes/:recipeId | DELETE  |  destroy |

### Users
| **URL**          | **HTTP Verb**|**Action**|
|------------------|--------------|----------|
| /auth/signup    | POST         | create  
| /auth/login     | POST         | create       
| /auth/logout    | DELETE       | destroy  


## Entity Relationship Diagram
<!-- ![ERD Placeholder](path/to/erd.png) -->
_Note: The ERD will be completed as the project progresses._

## Wireframe
<!-- ![Wireframe Placeholder](path/to/wireframe.png) -->
_Note: The wireframe will be completed as the project progresses._
