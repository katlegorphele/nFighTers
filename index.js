const GameViewport = {
    WIDTH : 384,
    HEIGHT : 224,

};

window.onload = function() {

    const canvasEL = document.querySelector('canvas');
    const context = canvasEL.getContext('2d');

    canvasEL.width = GameViewport.WIDTH;
    canvasEL.height = GameViewport.HEIGHT;

    const [ken, background] = document.querySelectorAll('img');

    const position = {
        x: GameViewport.WIDTH / 2 - ken.width / 2,
        y: 110
    };

    let velocity = 2;



    function frame() {
        position.x += velocity;

        if (position.x > GameViewport.WIDTH - ken.width || position.x < 0) {
            velocity = -velocity;
        }

        // context.clearRect(0, 0, GameViewport.WIDTH, GameViewport.HEIGHT);
        context.drawImage(background, 0, 0);
     
        context.drawImage(ken, position.x, position.y);

        window.requestAnimationFrame(frame);
    }

    window.requestAnimationFrame(frame);
}
