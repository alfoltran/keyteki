const Card = require('../../Card.js');

class AmmoniaClouds extends Card {
    setupCardAbilities(ability) {
        this.play({
            effect: 'deal 3 damage to all creatures',
            gameAction: ability.actions.dealDamage(context => ({
                amount: 3,
                target: context.game.creaturesInPlay
            }))
        });
    }
}

AmmoniaClouds.id = 'ammonia-clouds'; // This is a guess at what the id might be - please check it!!!

module.exports = AmmoniaClouds;
