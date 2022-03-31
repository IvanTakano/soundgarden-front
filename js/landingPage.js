const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com";

const optionEvents = {
    method:"GET",
    headers: {
        "Content-Type": "application/json"
    },
};
const table = document.querySelector("#card")

const listarEventos = async () => {
    const resposta = await fetch (`${BASE_URL}/events`, optionEvents)
    const eventos = await resposta.json();
    const htmlEventos = eventos.map((evento) => {
        const dataEvento = new Date(evento.scheduled);
        const linha = `
          <div class="container d-flex justify-content-center align-items-center" >
              <article class="evento card p-5 m-3" id="cardInterno"> 
              <tr>
          
              <td>${evento.name} </br></td>
              <td>${dataEvento.toLocaleDateString('en-GB')} </br></td>
              <td>${evento.attractions}</br></td>
              <td>${evento.description}</br></td>

              <a class="btn btn-dark " id="myBtn">reservar ingressos</a>
              
              </tr>
              </article>
          </div>                           
        `;
        return linha;
    })
    return htmlEventos;
}

const eventos = listarEventos().then((resp) => {table.innerHTML += resp.slice(0,3);});