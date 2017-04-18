/**
 * @file : utilities.js
 *
 * @description : an assembly of mostly used functions.
 *
 * @author : Ayaovi Espoir Djissenou
 *
 * @version : v1
 */


var luckyLudo = luckyLudo || {};
luckyLudo.util = {};

/**
 * @description sets the canvas background as an image or a plain dark gray colour.
 *
 * @param none.
 *
 * @return none.
 */
luckyLudo.util.drawCanvasBackground = function() {
    if (luckyLudo.global.imageAvailable) {
        image(luckyLudo.global.img, 0, 0, width, height);
    } else {
        background(luckyLudo.config.DEFAULT_CANVAS_BACKGROUND_COLOUR);
    }
}


/**
 * @description Initialises the dimensions of the container in the HTML file.
 *
 * @param none.
 *
 * @return none.
 */
luckyLudo.util.initialiseHTMLContainer = function() {
    /**
     * displayWindow and windowHeight are p5.js variables.
     */
    var gameCanvasContainer = document.getElementById('gameCanvasContainer');
    gameCanvasContainer.style.left = (window.innerWidth - luckyLudo.config.WIDTH_OF_GAME_FRAME) / 2 + 'px';
    gameCanvasContainer.style.top = (window.innerHeight - luckyLudo.config.HEIGHT_OF_GAME_FRAME) / 2 + 'px';
}