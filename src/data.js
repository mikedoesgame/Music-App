import { v4 as uuidv4 } from "uuid";
function chillHop() {
  return [
    {
      name: "Pallet Town's Theme",
      cover:
        "https://static.wikia.nocookie.net/pokemon/images/4/43/Ash%27s_Home_Pallet_Town.jpg/revision/latest/top-crop/width/300/height/300?cb=20200811012121",
      artist: "Pokémon Yellow",
      audio: "https://vgmsite.com/soundtracks/pokemon-yellow-gb/bsfiuwlj/03_Pallet%20Town%27s%20Theme.mp3",
      color: ["#77DDFF", "#6DFA47"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Opening Theme",
      cover:
        "https://vgmsite.com/soundtracks/pokemon-diamond-and-pearl-super-music-collection/1200px-Pok%C3%A9mon_Diamond_Pok%C3%A9mon_Pearl_Super_Music_Collection.png",
      artist: "Pokémon Diamond and Pearl",
      audio: "https://vgmsite.com/soundtracks/pokemon-diamond-and-pearl-super-music-collection/ktwbaoed/1-01%20Opening%20Demo.mp3",
      color: ["#A9DCE1", "#AB74AA"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Lake",
      cover:
        "https://i1.sndcdn.com/artworks-000169939900-6x1f89-t500x500.jpg",
      artist: "Pokémon Diamond and Pearl",
      audio: "https://vgmsite.com/soundtracks/pokemon-diamond-and-pearl-super-music-collection/kydlefnh/1-07%20Lake.mp3",
      color: ["#4F8F31", "#77A0D9"],
      id: uuidv4(),
      active: false, 
    },
    {
      name: "Route 209 (Day)",
      cover:
        "https://i1.sndcdn.com/artworks-000340286892-6m22fi-t500x500.jpg",
      artist: "Pokémon Diamond and Pearl",
      audio: "https://vgmsite.com/soundtracks/pokemon-diamond-and-pearl-super-music-collection/vrrfiydc/1-54%20Route%20209%20%28Day%29.mp3",
      color: ["#DC6D53", "#4DF48B"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Battle! Champion",
      cover:
        "https://i1.sndcdn.com/artworks-000394548147-vx4gwh-t500x500.jpg",
      artist: "Pokémon Diamond and Pearl",
      audio: "https://vgmsite.com/soundtracks/pokemon-diamond-and-pearl-super-music-collection/agmpuios/2-67%20Battle%21%20Champion.mp3",
      color: ["#605CCA", "#FFF0A5"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Battle!",
      cover:
        "https://upload.wikimedia.org/wikipedia/en/8/85/PokemonXBoxart.jpg",
      artist: "Pokémon X & Y",
      audio: "https://vgmsite.com/soundtracks/pokemon-x-y/bqxgyjpb/1-21%20Battle%21%20%28Trainer%20Battle%29.mp3",
      color: ["#6F85BF", "#FDC80A"],
      id: uuidv4(),
      active: false,
    },
    //ADD MORE HERE
  ];
}

export default chillHop;