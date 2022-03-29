const inputNome = document.querySelector("#nome");
const inputAtracao = document.querySelector("#atracoes");
const inputDescricao = document.querySelector("#descricao");
const inputData = document.querySelector("#data");
const inputLotacao = document.querySelector("#lotacao");
const inputPoster = document.querySelector("#banner")
const form = document.querySelector(".col-6");

const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com";
const parametros = new URLSearchParams(window.location.search);
const parametroID = parametros.get("id");



const listarEvento = async (evento) => {
    const optionEvents = {
        method:"GET",
        headers: {
            "Content-Type": "application/json"
        },
    };
const resposta = await fetch(`${BASE_URL}/events/${parametroID}`, optionEvents);

const evento = await resposta.json();

inputNome.value = evento.name;
inputPoster.value = evento.poster;
inputAtracao.value = evento.attractions;
inputDescricao.value = evento.description;
inputData.value = evento.scheduled;
inputLotacao.value = evento.number_tickets;
};

listarEvento();

form.onclick = async (evento) => {
    evento.preventDefault();
    try{
        const option = {
            method: "DELETE"
        };

        const retorno = await fetch(`${BASE_URL}/events/${parametroID}`, option)
        alert("Evento excluido!")
    }catch{
        alert("Erro ao tentar excluir!")
    }
    window.location.href = "admin.html"
}

