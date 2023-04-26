import { CharacterStructure } from "../../types";
import { render, screen } from "@testing-library/react";
import Character from "./Character";

describe("Given a Character component", () => {
  describe("When it receives a Luke Character", () => {
    test("Then it should show Luke's Data", () => {
      const lukeCharacter: CharacterStructure = {
        id: 1,
        name: "Luke Skywalker",
        height: "172",
        mass: "77",
        created: "2014-12-09",
      };

      render(<Character character={lukeCharacter} />);

      const name = screen.getByRole("img", {
        name: `${lukeCharacter.name}'s portait`,
      });

      expect(name).toBeInTheDocument();
    });
  });
});
