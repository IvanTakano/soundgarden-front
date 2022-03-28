const data = document.querySelector("#data");
data.setAttribute("value", "2022-03-28T01:00");
data.setAttribute("min", "2022-03-28T01:00");
data.setAttribute("max", "2025-12-30T00:00");
data.setAttribute("type", "datetime-local");

const inputNome = document.querySelector("#nome");
const inputAtracao = document.querySelector("#atracoes");
const inputDescricao = document.querySelector("#descricao");
const inputData = document.querySelector("#data");
const inputLotacao = document.querySelector("#lotacao");
const inputPoster = document.querySelector("#poster")
const form = document.querySelector(".col-6");

const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com";

form.onsubmit = async (evento) => {
	evento.preventDefault();
    try{
	const newEvento1 = {
		name: inputNome.value,
		poster: inputPoster.value,
		attractions: inputAtracao.value.split(","),
		description: inputDescricao.value,
		scheduled: inputData.value,
		number_tickets: inputLotacao.value
	};

	const options = {
		method: "POST",
		body: JSON.stringify(newEvento1),
		headers: {
			"Content-Type": "application/json"
		},
		redirect: "follow"
	};

	const resposta = await fetch(BASE_URL + "/events", options).then(() => {
		window.location.replace("/admin.html");
	});

	console.log(resposta);
}catch(erro){
    console.log("Deu ruim!");
}
};