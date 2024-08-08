import { createMachine, assign } from 'xstate'

const initialContext = {
  board: Array(9).fill(null),
  currentPlayer: 'X',
  winner: null,
};

const checkWinner = (board) => {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let combo of winningCombinations) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  return null;
};

const isDraw = (board) => {
  return board.every(cell => cell !== null);
};

export const ticTacToeMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QBcCWBjAKgQywezADpUIAbMAYgGVMBBAJUwG0AGAXUVAAc9ZU08AO04gAHogDsAZgmEATAEYAHBICsATgkAWKVrktVAGhABPRAonr5WrUoXrVLBQDYWSuUoC+n42iy5MAkIuUmwTVEEoCgBhABkASWiAaQB9aIBRWNjWDiQQHj4BYTzxBGlZRRUNbV19I1NELWctQmdVZzl1LXVnS1tnb18MHHwiELCIqPp0qnTmdhEC-lQhEVLtVUJ3Oyk5Z2U7PWMzBCUpQhdnXulnJVcFOSlBkD8RwKJ0AAswdABrSYA6hFBGAAE4UHKLXjLVYlRCPWQPRwsKQKBRSKQ9dHHeEsOStCxyPaWZrqBxyZ6vAJBL4-f6RIGCEHgpgKXLcaFFNbwmQXOTI1HozH7KQ4hAKFjOQiqTFuJrOXTqOTdSnDakfb5-QHAsEQuTs-KclbFUClBF8gVojFY0UNBC7c5SXrKvE9BUsLqq-yjQgAdyEFGms3mBqWXLhCEcLX0qM6HnUD3UZzFFlkqgkdlUHkVWhcXreQQgoOwvsDMzmkLyYeN3MjLGjKMT8cTybtdmlLE7EokTnUunT3h8IEEeAgcBEVNGUMKNYjAFpnGKF4RO12JLclEo3A8lKp8+riGQwNOYSaxIhmkp5Mo1FoJBs71oUw8V7L1PX0wpVHcFPufeNwkiE9w1NRAlDJLYdDUOx60eCwU13FcuksGppEbAYh0nd5CFpLUGR1UFgNnUCECOO00Vka0WAkbNJUedQ-2w-0z2rWESNzFouhlL8pA9JQmgUMV9BYLZnSdPstCzDQKUwtUfSLEsiLY89SIUFpbjUOiyR0VQn3I+tCAzd8XSaDwFV-QcgA */
  id: 'ticTacToe',
  initial: 'idle',
  context: initialContext,
  states: {
    idle: {
      on: {
        START: 'playing',
      },
    },
    playing: {
      on: {
        CLICK_CELL: {
          actions: 'markCell',
          target: 'checkingWinner',
        },
        RESET: {
          actions: 'resetGame',
          target: 'idle',
        },
      },
    },
    checkingWinner: {
      always: [
        { target: 'won', guard: 'hasWinner' },
        { target: 'draw', guard: 'isDraw' },
        { target: 'playing', actions: 'switchPlayer' },
      ],
    },
    won: {
      on: {
        RESET: {
          actions: 'resetGame',
          target: 'idle',
        },
      },
    },
    draw: {
      on: {
        RESET: {
          actions: 'resetGame',
          target: 'idle',
        },
      },
    },
  },
}, {
  actions: {
    markCell: assign(({context, event}) => {
      const newBoard = [...context.board];
      newBoard[event.index] = context.currentPlayer;
      return { ...context, board: newBoard };
    }),
    switchPlayer: assign(({context}) => ({
      currentPlayer: context.currentPlayer === 'X' ? 'O' : 'X',
    })),
    resetGame: assign(() => initialContext),
  },
  guards: {
    hasWinner: ({context}) => checkWinner(context.board) !== null,
    isDraw: ({context}) => isDraw(context.board),
  },
})