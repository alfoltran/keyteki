const Card = require('../../Card.js');

class Duskrunner extends Card {
    setupCardAbilities(ability) {
        this.whileAttached({
            effect: ability.effects.gainAbility('reap', {
                gameAction: ability.actions.steal()
            })
        });
    }
}

Duskrunner.id = 'duskrunner'; // This is a guess at what the id might be - please check it!!!

module.exports = Duskrunner;
