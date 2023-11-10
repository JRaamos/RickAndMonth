import { useSelector } from "react-redux";
import { Character } from "../types/ApiTypes";

type State = {
  personagem: {
    personagem: {
      payload: Character[];
    };
  };
};

export default function Home() {
  const state = useSelector((state: State) => state.personagem.personagem);

  return (
    <div>
      {state.payload.map((item: Character) => {
        return (
          <div key={ item.id }>
            <h1>{item.name}</h1>
            <img src={item.image} alt={item.name} />
          </div>
        );
      })}
    </div>
  );
}
