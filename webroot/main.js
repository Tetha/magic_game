var Game = Game || {};

require([ 'lib/crafty-min.js', 'runes/scene' ], function(cf, runes_scene ) {
    Crafty.init(500, 500, document.getElementById('game'));
    runes_scene.boot();
    Crafty.enterScene('runes.gamescreen');
});
