
# Tic-Tac-Toe

## Demo: https://main--silly-blancmange-77f252.netlify.app/

This project is a Tic-Tac-Toe game implemented using React, XState, and Styled-Components. The game allows two players to play Tic-Tac-Toe in the browser, and includes features such as resetting the game and detecting a win or a draw.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Running Tests](#running-tests)
- [Approach and Design Decisions](#approach-and-design-decisions)

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/yourusername/tic-tac-toe.git
   cd tic-tac-toe
   ```

2. **Install dependencies:**

   Make sure you have [Node.js](https://nodejs.org/) installed. Then run:

   ```sh
   npm install
   ```

## Usage

1. **Start the development server:**

   ```sh
   npm run dev
   ```

   This will start the Vite development server. You can view the application by navigating to `http://localhost:3000` in your browser.

2. **Build for production:**

   ```sh
   npm run build
   ```

   This will create a production-ready build of the application.

3. **Preview the production build:**

   ```sh
   npm run preview
   ```

   This will preview the production build locally.

## Running Tests

1. **Run all tests:**

   ```sh
   npm test
   ```

   This will run all the tests using Jest.

2. **Run tests with coverage:**

   ```sh
   npm run test:coverage
   ```

   This will run all the tests and generate a coverage report.

    ```sh
    ---------------------------|---------|----------|---------|---------|-------------------
    File                       | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
    ---------------------------|---------|----------|---------|---------|-------------------
    All files                  |   97.87 |    96.15 |     100 |     100 |                   
    src                        |     100 |      100 |     100 |     100 |                   
    globalStyles.js            |     100 |      100 |     100 |     100 |                   
    ticTacToeMachine.js        |     100 |      100 |     100 |     100 |                   
    src/components/board       |     100 |      100 |     100 |     100 |                   
    Board.jsx                  |     100 |      100 |     100 |     100 |                   
    Board.styles.js            |     100 |      100 |     100 |     100 |                   
    src/components/button      |     100 |      100 |     100 |     100 |                   
    Button.jsx                 |     100 |      100 |     100 |     100 |                   
    Button.styles.js           |     100 |      100 |     100 |     100 |                   
    src/components/cell        |     100 |      100 |     100 |     100 |                   
    Cell.jsx                   |     100 |      100 |     100 |     100 |                   
    Cell.styles.js             |     100 |      100 |     100 |     100 |                   
    src/components/gameStatus  |     100 |      100 |     100 |     100 |                   
    GameStatus.jsx             |     100 |      100 |     100 |     100 |                   
    GameStatus.styles.js       |     100 |      100 |     100 |     100 |                   
    src/pages                  |    92.3 |    85.71 |     100 |     100 |                   
    GamePage.jsx               |    90.9 |    85.71 |     100 |     100 | 13                
    GamePage.styles.js         |     100 |      100 |     100 |     100 |                   
    ---------------------------|---------|----------|---------|---------|-------------------
    ```

## Approach and Design Decisions

1. **State Management with XState:**
   - XState is used to manage the state of the Tic-Tac-Toe game. The state machine handles transitions between different game states, such as `idle`, `playing`, `won`, and `draw`.
   - Using XState allows us to have a clear and maintainable state management solution that is easy to reason about.

2. **Component-Based Architecture:**
   - The application is divided into reusable components such as `Board`, `Cell`, `Button`, and `GameStatus`.
   - Each component has its own styles using `styled-components`, making the code more modular and easier to maintain.

3. **Styled-Components:**
   - Styled-Components are used for styling the application. This allows for scoped and dynamic styling of components, making it easier to maintain and update styles.

4. **Testing:**
   - Jest and React Testing Library are used for testing the components and the state machine. This ensures that the application behaves as expected and helps prevent regressions.
   - Tests are written to cover different scenarios, including user interactions and state transitions.

5. **Global Styles:**
   - A global stylesheet is created using `styled-components` to apply global styles across the application. This includes resetting default browser styles and setting base styles for the application.