const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com";

const optionEvents = {
    method:"GET",
    headers: {
        "Content-Type": "application/json"
    },
};
const table = document.querySelector(".table")
const listarEventos = async () => {
    const resposta = await fetch (`${BASE_URL}/events`, optionEvents)
    const eventos = await resposta.json();
    const htmlEventos = eventos.map((evento, index) => {
        const dataEvento = new Date(evento.scheduled);
        const linha = `<tr>
            <th scope="row">${index+1}</th>
                <td>${dataEvento.toLocaleDateString('en-GB')} ${dataEvento.toLocaleTimeString('en-GB').slice(0, -3)}</td>
                <td>${evento.name}</td>
                <td>${evento.attractions}</td>
                <td>
                    <a href="verReserva.html?id=${evento._id}" class="btn btn-dark">ver reservas</a>
                    <a id="editar" href="editar-evento.html?id=${evento._id}" class="btn btn-secondary">editar</a>
                    <a href="excluir-evento.html?id=${evento._id}" class="btn btn-danger">excluir</a>
                </td>
            </tr>
        `;
        return linha;
    })
    return htmlEventos;
}

const eventos = listarEventos().then((resp) => {table.innerHTML += resp.slice(0,100);});