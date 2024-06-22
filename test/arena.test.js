const Arena = require('../src/arena');
const Player = require('../src/player');

test('Roll die', () => {
    const arena = new Arena();
    const roll = arena.rollDie();
    expect(roll).toBeGreaterThanOrEqual(1);
    expect(roll).toBeLessThanOrEqual(6);
});

test('Take turn', () => {
    const attacker = new Player(50, 5, 10);
    const defender = new Player(100, 10, 5);
    const arena = new Arena();

    const initialHealth = defender.health;
    arena.takeTurn(attacker, defender);
    expect(defender.health).toBeLessThanOrEqual(initialHealth);
});

test('Fight', () => {
    const playerA = new Player(50, 5, 10);
    const playerB = new Player(100, 10, 5);
    const arena = new Arena();
    arena.fight(playerA, playerB);
    expect(playerA.health).toBe(0).toBeLessThanOrEqual(0);
    expect(playerB.health).toBe(0).toBeLessThanOrEqual(0);
});
