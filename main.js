const URL = "https://rickandmortyapi.com/api/character" 


// ALTERNATIVA DE FORMA ASINCRONA
// async function getName(promesa){
//     const data = await promesa
//     const personajes = document.getElementById('personajes')
//     await data.forEach(x => {
//         const opcion = document.createElement("option")
//         opcion.textContent=x.name
//         personajes.appendChild(opcion)
//     });
// }

// async function getJSON() {
//     const response = await fetch(URL);
//     const data = await response.json();
//     return data.results;
// }

// getName(getJSON()) // esto extrae todos los nombres del json para mostrar las opciones en el HTML



// FORMA SINCRONA
function getName(){ // funcion lee el JSON
    fetch(URL)
        .then(response => response.json())
        .then(data => createOpcion(data)) //en data se almacena el json, se manda ese json a la funcion createOpcion
}

function createOpcion(data){ //funcion que agrega la lista de personajes al input
    console.log(data)
    const personajes = document.getElementById('personajes')
    data.results.forEach(x => {
        const opcion = document.createElement("option")
        opcion.textContent=x.name
        personajes.appendChild(opcion)
    });
}

getName()

document.getElementById('button').addEventListener('click',()=>{
    const value =  document.getElementById('id_personajes').value
    if(value){
        getData(value)
    }

})

function getData(value){ //lee la API filtrando por nombre
    fetch(URL+`?name=${value}`)
        .then(response => response.json())
        .then(data => adicionarData(data))
}

function adicionarData(data){ //funcion asigna cada valor del json a la card de la info
    let leer = data.results[0]
    console.log(leer)
    document.getElementById('name').innerHTML = leer.name
    console.log(leer.name)
    document.getElementById('species').innerHTML = leer.species
    console.log(leer.species)
    document.getElementById('gender').innerHTML = leer.gender
    console.log(leer.gender)
    const valor = document.getElementById('img')
    valor.src=leer.image
    document.getElementById('id_personajes').value = ""
}
