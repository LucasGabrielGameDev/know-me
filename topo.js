const head = document.head
const body = document.body

const estilo = "<link rel='stylesheet' href='styles/topo.css' />"
const estiloFont = "<link rel='stylesheet' href='styles/fonts.css' />"
head.innerHTML += estilo
head.innerHTML += estiloFont

const topo = document.createElement("header")

body.prepend(topo)

const cabecalho =
  "<div id='title'>" +
  "<h1>Lucas Santos</h1>" +
  "<h1>Dev Aprendiz</h1>" +
  "</div>" +
  "<ul>" +
  "<a href='index.html'><li>Sobre mim</li></a>" +
  "<a href='./my-journey.html'><li>Jornada profissional</li></a>" +
  "<a href='./web-dev.html'><li>Desenvolvimento Web</li></a>" +
  "<a href='./game-dev.html'><li>Game Dev</li></a>" +
  "<a href='./contato.html'><li>Meus Links</li></a>" +
  "</ul>"

topo.innerHTML = cabecalho
