const apiPath = `http://pokeapi.co/api/`;
const apiVersion = `v2/`


export default {
  api:{
    enpoints:{
      getPokemonById: (id) =>{
        return apiPath+apiVersion+`pokemon/`+id
      },
      // getPokemonByUrl: (url) =>{
      //   return url
      // },
      getPokemonSpecy: (id) =>{
        return apiPath+apiVersion+`pokemon-species/`+id
      },
      getPokedex: (id) =>{
        return apiPath+apiVersion+`pokedex/`+id
      },
    }
  }
}
