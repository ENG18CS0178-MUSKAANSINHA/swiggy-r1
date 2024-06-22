class Player {
    constructor(health, strength, attack) {
        this.health = health;
        this.strength = strength;
        this.attack = attack;
    }

    isAlive() {
        return this.health > 0;
    }

    toString() {
        return `Player(Health: ${this.health}, Strength: ${this.strength}, Attack: ${this.attack})`;
    }
}

module.exports = Player;
