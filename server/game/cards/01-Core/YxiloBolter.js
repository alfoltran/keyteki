const Card = require('../../Card.js');

class YxiloBolter extends Card {
    setupCardAbilities(ability) {
        this.fight({
            reap: true,
            target: {
                cardType: 'creature',
                gameAction: ability.actions.dealDamage({ amount: 2, purge: true})
            },
            then: context => ({
                condition: () => context.target.location === 'discard',
                gameAction: ability.actions.purge({ target: context.target })
            })
        });
    }
}

YxiloBolter.id = 'yxilo-bolter'; // This is a guess at what the id might be - please check it!!!

module.exports = YxiloBolter;
