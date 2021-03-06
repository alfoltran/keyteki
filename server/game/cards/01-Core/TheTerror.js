const Card = require('../../Card.js');

class TheTerror extends Card {
    setupCardAbilities(ability) {
        this.play({
            condition: context => context.player.opponent && context.player.opponent.amber === 0,
            gameAction: ability.actions.gainAmber({ amount: 2 })
        });
    }
}

TheTerror.id = 'the-terror'; // This is a guess at what the id might be - please check it!!!

module.exports = TheTerror;
