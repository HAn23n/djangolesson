const prevBtnEl = document.getElementById("previous")
const nextBtnEl = document.getElementById("next")
const pokemonCards = document.getElementById("pokemon-cards")
const loader = document.getElementById("loader");


//TYPE COLORS
const typeColor = {
    normal:'#A8A77A',
    fire:'#EE8130',
    water:'#6390F0',
    electric:'#F7D02C',
    grass:'#7AC74C',
    ice:'#96D9D6',
    fighting:'#C22E28',
    poison:'#A33EA1',
    ground:'#E2BF65',
    flying:'#A98FF3',
    psychic:'#F95587',
    bug:'#A6B91A',
    rock:'#B6A136',
    ghost:'#735797',
    dragon:'#6F35FC',
    dark:'#705746',
    steel:'#B7B7CE',
    fairy:'#D685AD',

};


const fecthApi = async url => {
    return(await fetch(url)).json();
}

let previous,next = null;

const showData = async (url)  =>{
    loader.classList.remove("d-none");
    const data = await fecthApi(url)
    const results = data.results;
    const resultsLength = results.length;
    const list = [];
    previous = data.previous;
    next = data.next

    for(let i =0;i < resultsLength;i++){
        list.push(fecthApi(results[i].url))
    }

    Promise.all(list).then(data => {
        while(pokemonCards.hasChildNodes()){
           pokemonCards.removeChild(pokemonCards.firstChild) 
        }
        console.log(data)
        display(data)    
        loader.classList.add("d-none");
    })
   
    
}

const display = async (data) => {
    try {
        const dataLength = data.length;

        for(let i=0; i< dataLength;i++){

            const pokemonId = data[i].id
            const pokemonName = data[i].name
            const pokemonImg = data[i].sprites.other['official-artwork'].front_default;
            const pokemonTypes = data[i].types.map((pokemon) => {
                let bgColor;
                for(const type in typeColor){
                    if(pokemon.type.name === type){
                        bgColor = typeColor[type];
                    }

                }

                return`<li class="list-group-item" style="background: ${ bgColor }" >${ pokemon.type.name }</li>`
            }).join("")


            pokemonCards.innerHTML += `
            <div class="card shadow-sm">
            <img src="${ pokemonImg }" class="card-img-top p-3" alt="${ pokemonName }">
            <div class="card-body px-0">
                <h5 class="card-title text-center">${ pokemonName }</h5>
                <div class="card-text pokemon-types d-flex justify-content-center gap-1">${ pokemonTypes }</div>
                <div class="card-text pokemon-id">${ pokemonId }</div>
            </div>
        </div>        
            `

            // console.log(pokemonId,pokemonName,pokemonImg,pokemonType)

        }

        
    }catch(error){
        console.log("Error",error)
    }
}


const prevBtn = async () => (previous != null) ? await showData(previous) :alert("Lowerest ID")
    // if(previous != null){
    //     await showData(previous)
    // }
    // else{
    //     alert("Lowerest ID")
    // }

const nextBtn = async () => (next != null) ? await showData(next) :alert("Highest ID")
    // if(next != null){
    //     await showData(next)
    // }
    // else{
    //     alert("Highest ID")
    // }


prevBtnEl.addEventListener("click",prevBtn)
nextBtnEl.addEventListener("click",nextBtn)


showData('https://pokeapi.co/api/v2/pokemon/')
