const btn = document.getElementById('btn');
const adNumber = document.getElementById('ad-number');
const adDesc = document.getElementById("ad-description");

async function pegarConselhos() {
    const url = 'https://api.adviceslip.com/advice';
    const resposta = await fetch(url);
    const conselhoConteudo = await resposta.json();
    const conselhoId = `ADVICE #${conselhoConteudo.slip.id}`;
    const conselhoTexto = `"${conselhoConteudo.slip.advice}"`;

    adNumber.innerHTML = conselhoId;
    adDesc.innerHTML = conselhoTexto;
}

btn.addEventListener("click", pegarConselhos);

pegarConselhos();

