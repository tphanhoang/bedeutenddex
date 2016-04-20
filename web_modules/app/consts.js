const apiPath = `http://pokeapi.co/api/`;
const apiVersion = `v2/`
//const apiExplorerPath = `https://artistexplorer.spotify.com/`

export default {
  api:{
    enpoints:{

      // getSearch:(query, type)=>{
      //   return apiPath+`search?query=${query}*&offset=0&limit=10&type=${type}`
      // },
      // getArtist:(id)=>{
      //   return apiPath+`artists/${id}`
      // },
      // getKinds: () =>{
      //   return apiExplorerPath+`api/genres`
      // }
      getPokemons: (limit = 20,offset = 0) =>{
        return apiPath+apiVersion+`pokemon?limit=${limit}&offset=${offset}`
      },
      getPokemonById: (id) =>{
        return apiPath+apiVersion+`pokemon/`+id
      },
      getPokemonByUrl: (url) =>{
        return url
      },
      getPokedex: (id) =>{
        return apiPath+apiVersion+`pokedex/`+id
      },
    }
  }
}
