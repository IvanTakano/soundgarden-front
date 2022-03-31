const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com";

const optionEvents = {
    method:"GET",
    headers: {
        "Content-Type": "application/json"
    },
};
const table = document.querySelector(".evento.card.p-5.m-3")
const listarEventos = async () => {
    const resposta = await fetch (`${BASE_URL}/booking`, optionEvents)
    const eventos = await resposta.json();
    const htmlEventos = eventos.map((evento) => {
        const dataEvento = new Date(evento.scheduled);
        const linha = `<tr>
            
             <td>${evento.name}</td>
                <td>${dataEvento.toLocaleDateString('en-GB')} ${dataEvento.toLocaleTimeString('en-GB').slice(0, -3)}</td>
                <td>${evento.attractions}</td>
                <td>${description}</td>

                    <a href="?id=${evento._id}" class="btn btn-dark">reservar ingressos</a>
                <div id="myModal" class="modal">
                        <div class="modal-content">
                          <span class="close">&times;</span>
                          <h5>Reserve seu ingresso</h5>
                          <form class="modal-form">
                              <div>
                                <label for="modal-nome" class="modal-label">Nome </label>
                                <input type="text" class="modal-form-control" id="modal-nome">
                              </div>
                              <div>
                                <label for="modal-email" class="modal-label">E-mail</label>
                                <input type="text" class="modal-form-control" id="modal-email">
                              </div>
                              <button type="submit" class="btn btn-primary" id="btn-modal-reservar">Reservar</button>
                          </form>
                        </div>                      
                      </div>
            </tr>
        `;
        return linha;
    })
    return htmlEventos;
}

const eventos = listarEventos().then((resp) => {table.innerHTML += resp.slice(0,3);});