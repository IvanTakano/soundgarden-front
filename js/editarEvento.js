const inputNome = document.querySelector("#nome");
const inputBanner = document.querySelector("#banner");
const inputAtracoes = document.querySelector("#atracoes");
const inputDescricao = document.querySelector("#descricao");
const inputData = document.querySelector("#data");
const inputLotacao = document.querySelector("#lotacao");
const form = document.querySelector(".col-6")



const BASE_URL= "https://xp41-soundgarden-api.herokuapp.com"
const data = document.querySelector("#data");
data.setAttribute("type", "datetime-local");


const paramentros = new URLSearchParams (window.location.search)
const paramentroID = paramentros.get("id") 

const mostrarEvento = async function editEvento() {
    const optionEvents = {
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
    }
    const dados = await fetch(`${BASE_URL}/events/${paramentroID}`, optionEvents)
    const resposta = await dados.json();
    const dataEvento = new Date(resposta.scheduled)

    inputNome.value = resposta.name
    inputBanner.value = resposta.poster
    inputAtracoes.value = resposta.attractions
    inputDescricao.value = resposta.description
    inputData.value = dataEvento.toLocaleDateString('en-GB') + " " + dataEvento.toLocaleTimeString('en-GB').slice(0, -3)
    inputLotacao.value = resposta.number_tickets
        
}

mostrarEvento();

form.onsubmit = async (evento) => {
	evento.preventDefault();
    
    try{
	const newEvento1 = {
		name: inputNome.value,
		poster: inputBanner.value,
		attractions: inputAtracoes.value.split(","),
		description: inputDescricao.value,
		scheduled: inputData.value,
		number_tickets: inputLotacao.value
	};
    
    const options = {
		method: "PUT",
		body: JSON.stringify(newEvento1),
		headers: {
			"Content-Type": "application/json"
		},		
	};

	const resposta = await fetch(`${BASE_URL}/events/${paramentroID}`, options)
    alert("Evento editado com sucesso!")
	console.log(resposta);
}catch(erro){
    console.log("Deu ruim!");
} window.location.replace("/admin.html");
};