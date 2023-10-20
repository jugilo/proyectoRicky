
const getName = ((data) =>{
    const personajes = document.getElementById('personajes')

    data.forEach(x => {
        const opcion = document.createElement("option")
        opcion.textContent=x.name
        personajes.appendChild(opcion)
    });
})



async function getJSON() {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    console.log("ola",response)
    const data = await response.json();
    getName(data.results)
    return data;
  }
getJSON()

const getValue = () =>{
    const value = document.getElementById('id_personajes').value
    console.log(value)
}


