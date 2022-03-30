const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com";

const paramentros = new URLSearchParams (window.location.search)

const paramentroID = paramentros.get("id")

const optionEvents = {
    method:"GET",
    headers: {
        "Content-Type": "application/json"
    },
};
const table = document.querySelector(".table")
const listarEventos = async () => {
    const resposta = await fetch (`${BASE_URL}/bookings/event/${paramentroID}`, optionEvents)
    const eventos = await resposta.json();
    const htmlEventos = eventos.map((evento, index) => {
        const dataEvento = new Date(evento.scheduled);
        const linha = `<tr>
                <td>${evento.owner_name}</td>
                <td>${evento.owner_email}</td>
                <td>${evento.number_tickets}</td>
            </tr>
        `;
        return linha;
    })
    return htmlEventos;
}

const eventos = listarEventos().then((resp) => {table.innerHTML += resp.slice(0,100);});