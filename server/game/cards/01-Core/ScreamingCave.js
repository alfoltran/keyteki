const Card = require('../../Card.js');

class ScreamingCave extends Card {
    setupCardAbilities(ability) {
        this.action({
            effect: 'shuffle their hand and discard pile into their deck',
            gameAction: ability.actions.returnToDeck(context => ({
                shuffle: true,
                target: context.player.hand.concat(context.player.discard)
            }))
        });
    }
}

ScreamingCave.id = 'screaming-cave'; // This is a guess at what the id might be - please check it!!!

module.exports = ScreamingCave;
