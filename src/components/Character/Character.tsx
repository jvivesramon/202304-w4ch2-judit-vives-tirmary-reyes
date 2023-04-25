import { CharacterStructure } from "../../types";

interface CharacterProps {
  character: CharacterStructure;
}

const Character = ({
  character: { id, name, height, mass, created },
}: CharacterProps): JSX.Element => {
  return (
    <article className="character">
      <h2 className="character_name">{name}</h2>
      <div className="picture_container">
        <img
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          alt={`${name}'s portait`}
        />
      </div>
      <ul className="character_list">
        <li className="character_list-data">{`height: ${height}`}</li>
        <li className="character_list-data">{`mass: ${mass}`}</li>
        <li className="character_list-data">{`creation date: ${created.slice(
          0,
          10
        )}`}</li>
      </ul>
    </article>
  );
};

export default Character;
