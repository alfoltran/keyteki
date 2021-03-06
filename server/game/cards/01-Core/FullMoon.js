const Card = require('../../Card.js');

class FullMoon extends Card {
    setupCardAbilities(ability) {
        this.play({
            effect: 'gain 1 amber for each creature played for the remainder of the turn',
            gameAction: ability.actions.forRemainderOfTurn(context => ({
                when: {
                    onCardPlayed: event => event.player === context.player && event.card.type === 'creature'
                },
                message: '{0} gains 1 amber due to {1}\'s effect',
                gameAction: ability.actions.gainAmber(context => ({ target: context.player }))
            }))
        });
    }
}

FullMoon.id = 'full-moon'; // This is a guess at what the id might be - please check it!!!

module.exports = FullMoon;
