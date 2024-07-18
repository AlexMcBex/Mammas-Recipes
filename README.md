# Mamma's Recipes

## Overview
Mamma's Recipes is your personal recipe book  _Italian-Cuisine-fueled_ full-stack application allows users to create, manage, and browse their favorite recipes in a simple and user-friendly interface.

## Technologies used
- [Django](https://www.djangoproject.com/) for backend, including REST API developmetn
- [React](https://react.dev) for frontend
- [AWS](https://aws.amazon.com/) S3 for frontend deploying 
- [AWS](https://aws.amazon.com/) EC2 for backend deploying
- [Postman](https://www.postman.com/) for API testing and development
- [TailwindCSS](https://tailwindcss.com/) for fontend styling

## Objectives
- [x] Made the backend functional with all the CRUD operations correctly working
- [x] Implemented authentication and user managment
- [x] Made basic frontend
- [x] Implemented api functionalities in frontend
- [x] Enhanced UI/UX
- [x] Reached Minimum Viable Product (MVP)
- [ ] Deploy the backend publicly online
- [ ] Deploy the frontend publicly online
- [ ] Allowed users to search for recipes
- [ ] Improve auth

## User Stories
- As a user, I would like to create new recipes.
- As a user, I would like to browse all my recipes.
- As a user, I would like to view details of a single recipe, including ingredients and instructions.
- As a user, I would like to edit and delete my recipes.
- As a user, I would like to search for recipes using ingredients.
- As a user, I can authenticate and manage my recipes securely.


## Routes Table

### Recipes

| **URL** | **HTTP Verb** | **Action** |
|------|---------------|---------|
| /recipes/ | GET | index   |
| /recipes/:recipeId/ |  GET | show   |
| /recipes/ |  POST |  create |
| /recipes/:recipeId/ | PUT  |  edit |
| /recipes/:recipeId/ | DELETE  |  destroy |

### User
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
