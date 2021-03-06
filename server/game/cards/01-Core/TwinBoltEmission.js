const Card = require('../../Card.js');

class TwinBoltEmission extends Card {
    setupCardAbilities(ability) {
        this.play({
            target: {
                mode: 'exactly',
                numCards: 2,
                cardType: 'creature',
                gameAction: ability.actions.dealDamage({ amount: 2 })
            }
        });
    }
}

TwinBoltEmission.id = 'twin-bolt-emission'; // This is a guess at what the id might be - please check it!!!

module.exports = TwinBoltEmission;
