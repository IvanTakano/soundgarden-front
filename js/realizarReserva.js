const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com";

const optionEvents = {
    method:"GET",
    headers: {
        "Content-Type": "application/json"
    },
};

const paramentros = new URLSearchParams (window.location.search)
const paramentroID = paramentros.get("id") 

const mostrarEvento = async function editEvento() {
    
    const dados = await fetch(`${BASE_URL}/events/${paramentroID}`, optionEvents)
    const resposta = await dados.json();    

    inputNome.value = resposta.name        
}

mostrarEvento;

const inputNome = document.querySelector("#nome");
const inputEmail = document.querySelector("#email");
const inputQuantidade = document.querySelector("#quantidade");

form.onsubmit = async (evento) => {
	evento.preventDefault();
    
    try{
	const newEvento1 = {
		owner_name: inputNome.value,
        owner_email: inputEmail.value,
        number_tickets: inputQuantidade.value,
        event_id: paramentroID.value
	};
    
    const options = {
		method: "POST",
		body: JSON.stringify(newEvento1),
		headers: {
			"Content-Type": "application/json"
		},		
	};

	const resposta = await fetch(`${BASE_URL}/bookings`, options)
    alert("Reserva realizado com sucesso!")
	console.log(resposta);
}catch(erro){
    console.log("Deu ruim!");
} 
};