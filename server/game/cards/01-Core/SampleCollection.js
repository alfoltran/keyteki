const Card = require('../../Card.js');

class SampleCollection extends Card {
    setupCardAbilities(ability) {
        this.play({
            condition: context => context.player.opponent && context.player.opponent.keys > 0,
            effect: 'abduct {1} creatures',
            effectArgs: context => context.player.opponent.keys,
            gameAction: ability.actions.sequentialForEach(context => ({
                num: context.player.opponent.keys,
                action: ability.actions.archive({
                    promptForSelect: {
                        activePromptTitle: 'Choose a creature to archive',
                        cardType: 'creature',
                        controller: 'opponent'
                    }
                })
            }))
        });
    }
}

SampleCollection.id = 'sample-collection'; // This is a guess at what the id might be - please check it!!!

module.exports = SampleCollection;
