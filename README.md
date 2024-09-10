# Next.js Recipe Application

This is a Next.js application for browsing and searching recipes. The application includes features such as pagination, category filtering, and detailed recipe views.

## Table of Contents
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Routes](#routes)
- [Components](#components)
- [API Endpoints](#api-endpoints)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/kdlibiran/nextjs-exercise.git
   cd nextjs-recipe-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

To run the application in development mode:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## Project Structure

The project structure is organized as follows:

- `components/`: Reusable components.
- `pages/`: Next.js pages.
- `styles/`: CSS modules.
- `types/`: Type definitions.
- `public/`: Static assets.
- `types/`: Type definitions.

## Routes

- `/`: Home page.
- `/recipes`: Recipes page.
- `/recipe/:id`: Recipe details page.

## Components

- `Modal.tsx`: Modal component for displaying images.
- `Pagination.tsx`: Pagination component for navigating through pages.
- `RecipeCard.tsx`: Component for displaying a recipe card.
- `RecipeGrid.tsx`: Component for displaying a grid of recipes.
- `SearchBar.tsx`: Component for searching recipes.

## API Endpoints

- `GET /api/recipes`: Fetches recipes with pagination and search.
- `GET /api/recipe/:id`: Fetches details of a specific recipe.
