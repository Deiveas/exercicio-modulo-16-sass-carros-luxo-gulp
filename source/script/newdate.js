// Obtendo o elemento onde a data e hora serão exibidas
const elementoDataHora = document.getElementById('data-hora');

// Obtendo a data e a hora atual
const dataHoraAtual = new Date();
const ano = dataHoraAtual.getFullYear();
const mes = dataHoraAtual.getMonth() + 1;
const dia = dataHoraAtual.getDate();
const horas = dataHoraAtual.getHours();
const minutos = dataHoraAtual.getMinutes();
const segundos = dataHoraAtual.getSeconds();

// Criando a string da data e hora
const dataHoraFormatada = `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`;

// Atualizando o conteúdo do elemento com a data e hora
elementoDataHora.textContent = dataHoraFormatada;

