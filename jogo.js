console.log('[DevSoutinho] Flappy Bird');

const sprites = new Image();
sprites.src = './sprites.png';

const canvas = document.querySelector('canvas');
const contexto = canvas.getContext('2d');


// [Plano de Fundo]
const planoDeFundo = {
    spriteX: 390,
    spriteY: 0,
    largura: 275,
    altura: 204,
    x: 0,
    y: canvas.height - 204,
    desenha(){
        contexto.fillStyle = '#70c5ce';
        contexto.fillRect(0, 0, canvas.width, canvas.height)
        
        contexto.drawImage(
            sprites,
            planoDeFundo.spriteX, planoDeFundo.spriteY,
            planoDeFundo.largura, planoDeFundo.altura,
            planoDeFundo.x, planoDeFundo.y,
            planoDeFundo.largura, planoDeFundo.altura,
            );
            
            contexto.drawImage(
                sprites,
                planoDeFundo.spriteX, planoDeFundo.spriteY,
                planoDeFundo.largura, planoDeFundo.altura,
                planoDeFundo.x + planoDeFundo.largura, planoDeFundo.y,
                planoDeFundo.largura, planoDeFundo.altura,
                );
    },
};

// [Chao]
const chao = {
    spriteX: 0,
    spriteY: 610,
    largura: 224,
    altura: 110,
    x: 0,
    y: canvas.height - 110,
    desenha(){
        contexto.drawImage(
            sprites,
            chao.spriteX, chao.spriteY,
            chao.largura, chao.altura,
            chao.x, chao.y,
            chao.largura, chao.altura
            );
            
            contexto.drawImage(
                sprites,
                chao.spriteX, chao.spriteY,
                chao.largura, chao.altura,
                chao.x + chao.largura, chao.y,
                chao.largura, chao.altura
                );
            },
        };
        
const flappybird = {
    spriteX: 0,
    spriteY: 0,
    largura: 34,
    altura: 24,
    x: 10,
    y: 50,
    gravidade: 0.25, 
    velocidade: 0,
    atualiza(){
        flappybird.velocidade = flappybird.velocidade + flappybird.gravidade;
        flappybird.y = flappybird.y + flappybird.velocidade;
    },
    desenha() {
        contexto.drawImage(
            sprites,
            flappybird.spriteX, flappybird.spriteY, // Sprite X, Sprite Y
            flappybird.largura, flappybird.altura, //Tamanho do recorte na sprite
            flappybird.x, flappybird.y, // posição do flappy no canvas
            flappybird.largura, flappybird.altura // dimensões do flappy no canvas
            );
        },
    };

// [mensagemGetReady]
const mensagemGetReady = {
    sX: 134,
    sY: 0,
    w: 174,
    h: 152,
    x: (canvas.width/2) - 174/2,
    y: 50,
    desenha() {
        contexto.drawImage(
            sprites,
            mensagemGetReady.sX, mensagemGetReady.sY,
            mensagemGetReady.w, mensagemGetReady.h,
            mensagemGetReady.x, mensagemGetReady.y,
            mensagemGetReady.w, mensagemGetReady.h,
        );
    },
};
        
function loop(){
    planoDeFundo.desenha();
    chao.desenha();
    flappybird.desenha();
    // flappybird.atualiza();
    mensagemGetReady.desenha();
    
    requestAnimationFrame(loop);
}

loop();