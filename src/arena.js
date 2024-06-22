const Player = require('./player');

class Arena {
    rollDie() {
        return Math.floor(Math.random() * 6) + 1;
    }

    takeTurn(attacker, defender) {
        const attackRoll = this.rollDie();
        const defendRoll = this.rollDie();

        const attackDamage = attacker.attack * attackRoll;
        const defendStrength = defender.strength * defendRoll;

        const damage = Math.max(0, attackDamage - defendStrength);

        defender.health -= damage;

        console.log(`${attacker} attacks ${defender}`);
        console.log(`Attack roll: ${attackRoll}, Defend roll: ${defendRoll}`);
        console.log(`Damage dealt: ${damage}`);
        console.log(`Defender's remaining health: ${defender.health}`);
        console.log();
    }

    fight(player1, player2) {
        let attacker = player1.health <= player2.health ? player1 : player2;
        let defender = attacker === player1 ? player2 : player1;

        while (attacker.isAlive() && defender.isAlive()) {
            this.takeTurn(attacker, defender);

            // Swap roles
            [attacker, defender] = [defender, attacker];
        }

        console.log(`Game Over! Winner: ${attacker.isAlive() ? attacker : defender}`);
    }
}

module.exports = Arena;
