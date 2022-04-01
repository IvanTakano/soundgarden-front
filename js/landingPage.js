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
          
              <h2>${evento.name} </br></h2>
              <h4>${dataEvento.toLocaleDateString('en-GB')} </br></h4>
              <p>${evento.attractions}</br></p>
              <p>${evento.description}</br></p>

              <a class="btn btn-dark" id="myBtn" btn-id="${evento._id}">reservar ingressos</a>              
              </article>
          </div>                           
        `;
        
        return linha;   
        
    })
    return htmlEventos;
}

const eventos = listarEventos().then((resp) => {table.innerHTML = resp.slice(0,3);
  const modal = document.getElementById("myModal");
  const btn = document.getElementById(`myBtn`);
  const span = document.getElementsByClassName("close")[0];  

  btn.onclick =(evento) => {    
    evento.preventDefault();   
    console.log("Abrir modal")  
    let buttonsOpenModal = document.querySelectorAll("#myBtn");
    modal.style.display = "block";
  }; 

  span.addEventListener ("click",() => {
    modal.style.display = "none";
  })  
});

function adicionarEvento() {
  let buttonsOpenModal = document.querySelectorAll("#myBtn");
  buttonsOpenModal.forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelector("#myModal").style.display = "block";
      listEventsById(btn.getAttribute("btn-id"));
      
    });
  });
}



