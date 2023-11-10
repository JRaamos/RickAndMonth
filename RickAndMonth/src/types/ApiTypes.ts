// Definição de tipos para a origem e localização dos personagens
interface Location {
  name: string;
  url: string;
}

// Definição de tipo para um personagem
export interface Character {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown'; 
  species: string;
  type: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown'; 
  origin: Location;
  location: Location;
  image: string;
  episode?: string[];
  url: string;
  created: string; 
}

export interface ApiResponse {
  results: Character[];
}

// // Exemplo de uso:
// const fetchCharacters = async (): Promise<ApiResponse> => {
//   const response = await fetch('https://rickandmortyapi.com/api/character');
//   const data: ApiResponse = await response.json();
//   return data;
// };

// Agora, quando você usar fetchCharacters, o TypeScript saberá o tipo de retorno
