const Card = require('../../Card.js');

class Gatekeeper extends Card {
    setupCardAbilities(ability) {
        this.play({
            condition: context => context.player.opponent && context.player.opponent.amber >= 7,
            gameAction: ability.actions.capture(context => ({ amount: context.player.opponent.amber - 5 }))
        });
    }
}

Gatekeeper.id = 'gatekeeper'; // This is a guess at what the id might be - please check it!!!

module.exports = Gatekeeper;
