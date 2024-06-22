const Player = require('../src/player');

test('Player initialization', () => {
    const player = new Player(50, 5, 10);
    expect(player.health).toBe(50);
    expect(player.strength).toBe(5);
    expect(player.attack).toBe(10);
});

test('Player health modification', () => {
    const player = new Player(50, 5, 10);
    player.health = 30;
    expect(player.health).toBe(30);
});

test('Player is alive', () => {
    const player = new Player(50, 5, 10);
    expect(player.isAlive()).toBe(true);
    player.health = 0;
    expect(player.isAlive()).toBe(false);
});
