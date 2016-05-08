# BedeutendDex

Just another simple pokédex like many other. 

Using react, webpack, babel, postcss ... etc ... and Pokéapi (v2)



# Inspirations & Datas

- [Inspiration](https://github.com/kimak/react-playlist-viewer) [(by Kimak)](https://github.com/kimak)
- [Main idea](https://github.com/valpinkman/meandex) [(by Valpinkman)](https://github.com/valpinkman)
- [PokeApi (datas)](http://pokeapi.co/)


# Concept & Explication

- Chaque page possède une AppBar possèdant une icône redirigeant vers la home (sauf la page 404)
– La page d'accueil (pokedex) présente une description du pokédex et les liens vers les pokémons associés
- Une page de description d'un pokémon présente les différents informations qui lui sont associés :
  – images, noms, types & descriptions
  - les stats de base des pokémons sont représentés graphiquement
  - les détails complémentaires sont disponibles en activant le toggle, présentant dans un tab switchable différentes informations (Divers / Abilities / Moves)


Difficultés rencontrées : 
- Les manques de l'Api utilisé (aucun module de search, Api indiquant en dur d'autre webservice complémentaire en lien absolu, etc)
- Mauvaise compréhension/utilisation de redux/storage

Evolutions à venir : 
- Gestion des autres Générations Pokemons
- Utilisation de MongoDB et dissociation d'avec l'API