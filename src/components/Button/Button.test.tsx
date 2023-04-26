import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When the user clicks the button", () => {
    test("Then it should call the received action", async () => {
      const actionOnClick = jest.fn();
      const expectedText = "delete";

      render(<Button text={expectedText} actionOnClick={actionOnClick} />);

      const button = screen.getByRole("button", {
        name: "delete",
      });

      await userEvent.click(button);

      expect(actionOnClick).toHaveBeenCalled();
    });
  });
});
