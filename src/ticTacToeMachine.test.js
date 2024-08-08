import { createActor } from 'xstate';
import { ticTacToeMachine } from './ticTacToeMachine';

describe('ticTacToeMachine', () => {
  let service;

  beforeEach(() => {
    service = createActor(ticTacToeMachine);
    service.start();
  });

  it('should start in the idle state', () => {
    expect(service.getSnapshot().value).toBe('idle');
  });

  it('should transition to playing on START', () => {
    service.send({ type: 'START' });
    expect(service.getSnapshot().value).toBe('playing');
  });

  it('should mark a cell and switch player', () => {
    service.send({ type: 'START' });
    service.send({ type: 'CLICK_CELL', index: 0 });
    expect(service.getSnapshot().context.board[0]).toBe('X');
    expect(service.getSnapshot().context.currentPlayer).toBe('O');
  });

  it('should detect a win', () => {
    service.send({ type: 'START' });
    service.send({ type: 'CLICK_CELL', index: 0 }); // X
    service.send({ type: 'CLICK_CELL', index: 3 }); // O
    service.send({ type: 'CLICK_CELL', index: 1 }); // X
    service.send({ type: 'CLICK_CELL', index: 4 }); // O
    service.send({ type: 'CLICK_CELL', index: 2 }); // X wins

    expect(service.getSnapshot().value).toBe('won');
    expect(service.getSnapshot().context.currentPlayer).toBe('X');
  });

  it('should detect a draw', () => {
    service.send({ type: 'START' });
    service.send({ type: 'CLICK_CELL', index: 0 }); // X
    service.send({ type: 'CLICK_CELL', index: 1 }); // O
    service.send({ type: 'CLICK_CELL', index: 2 }); // X
    service.send({ type: 'CLICK_CELL', index: 4 }); // O
    service.send({ type: 'CLICK_CELL', index: 3 }); // X
    service.send({ type: 'CLICK_CELL', index: 5 }); // O
    service.send({ type: 'CLICK_CELL', index: 7 }); // X
    service.send({ type: 'CLICK_CELL', index: 6 }); // O
    service.send({ type: 'CLICK_CELL', index: 8 }); // X

    expect(service.getSnapshot().value).toBe('draw');
  });

  it('should reset the game', () => {
    service.send({ type: 'START' });
    service.send({ type: 'CLICK_CELL', index: 0 });
    service.send({ type: 'RESET' });

    expect(service.getSnapshot().value).toBe('idle');
    expect(service.getSnapshot().context.board).toEqual(Array(9).fill(null));
    expect(service.getSnapshot().context.currentPlayer).toBe('X');
  });
});
