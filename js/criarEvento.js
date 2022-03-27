const inputNome = document.querySelector("#nome");
const inputAtracao = document.querySelector("#atracoes");
const inputDescricao = document.querySelector("#descricao");
const inputData = document.querySelector("#data");
const inputLotacao = document.querySelector("#lotacao");
const inputSubmit = document.querySelector(".btn.btn-primary")
const form = document.querySelector("form");


const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com"

form.onsubmit = async (evento) => {
    evento.preventDefault();
    try{
        const newEvent = {
            name: inputNome.value,
            attractions: inputAtracao.value,
            description: inputDescricao.value,
            scheduled: inputData.value,
            number_tickets: inputLotacao.value
        }
        const option = {
            method: "POST",
            body: JSON.stringify(newEvent),
            headers: {
                "Content-Type": "application/json",
            },
        };
        const reposta = await fetch(`${Base_URL}/events`, option);
        const conteudoDaResposta = await reposta.json();
        console.log(conteudoDaResposta);    
        alert("deu certo!")
    }catch(erro){
        alert("Erro!!!")
    }
}