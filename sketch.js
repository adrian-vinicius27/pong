//variáveis da bolinha
let xBolinha = 100;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

//variáveis do openente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//placar do jogo
let meuspontos = 0;
let pontosDoOponente = 0;


let colidiu = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {
   background(0);
   mostraBolinha();
   movimentaBolinha();
   verificaColisaBorda();
   mostraRaquete(xRaquete, yRaquete);
   movimentaMinhaRaquete();
   verificaColisaoRaquete(xRaquete, yRaquete);
   verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
   mostraRaquete(xRaqueteOponente, yRaqueteOponente);
   movimentoRaqueteOponente();
   incluirPlacar();
   marcaPonto();
}
function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
   xBolinha += velocidadeXBolinha;
   yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() {
   if (xBolinha + raio > width || xBolinha - raio < 0) {
      velocidadeXBolinha *= -1;
   }
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete(x,y) {
    rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentaminhaRaquete() {
  if(keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)) {
     yRaquete += 10;
  }
}

function verificaColisaoRaquete() {
 if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete +
raqueteAltura && yBolinha + raio > yRaquete) {
    velocidadeXBolinha *= -1;
 }
}
