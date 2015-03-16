var Game = Game || {};

require([ 'lib/crafty-min.js' ], function() {
    Crafty.init(500, 500, document.getElementById('game'));
    require([ 'runes/scene.js' ], function() {
        Crafty.enterScene('runes.gamescreen');
    })
});
