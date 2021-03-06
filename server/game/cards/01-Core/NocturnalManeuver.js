const Card = require('../../Card.js');

class NocturnalManeuver extends Card {
    setupCardAbilities(ability) {
        this.play({
            target: {
                mode: 'upTo',
                numCards: 3,
                cardType: 'creature',
                gameAction: ability.actions.exhaust()
            }
        });
    }
}

NocturnalManeuver.id = 'nocturnal-maneuver'; // This is a guess at what the id might be - please check it!!!

module.exports = NocturnalManeuver;
