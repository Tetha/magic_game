define([ 'runes/rune.js' ], function( rune ) {
    console.log( rune );
    return {
        boot : function() {
            rune.boot();
            Crafty.scene('runes.gamescreen', function() {
                Game.Runes = {
                    Grid : {
                        TileWidth : 10,
                        TileHeight : 10,
                        PixelWidthPerTile : 50,
                        PixelHeightPerTile : 50
                    }
                };

                for ( var tileX = 0; tileX < 10; tileX++ ) {
                    for ( var tileY = 0; tileY < 10; tileY ++ ) {
                        var color = (tileX + tileY) % 2 == 0 ? "#79bfeb" : "6eaceb";
                        Crafty.e("2D, Canvas, Color")
                              .attr({ x : tileX * Game.Runes.Grid.PixelWidthPerTile,
                                      y : tileY * Game.Runes.Grid.PixelHeightPerTile,
                                      w : Game.Runes.Grid.PixelWidthPerTile,
                                      h : Game.Runes.Grid.PixelHeightPerTile })
                              .color( color );
                    }
                }

                Crafty.e( "Rune" )
                      .attr({ x : 5 * Game.Runes.Grid.PixelWidthPerTile + 10,
                              y : 4 * Game.Runes.Grid.PixelHeightPerTile + 10,
                              w : Game.Runes.Grid.PixelWidthPerTile - 20,
                              h : Game.Runes.Grid.PixelHeightPerTile - 20})
                      .color( "#FF0000" );
                console.log("all done");
            },
            function() {
                Game.Runes = null;
            });
        }
    }
});
