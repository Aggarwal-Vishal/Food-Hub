import { render, screen } from "@testing-library/react";
import Contact from "../src/components/Contact";
import "@testing-library/jest-dom";

test("Should load contact us component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});
test("Should load Button inside contact us component", () => {
  render(<Contact />);

  const button = screen.getByText("Submit");

  expect(button).toBeInTheDocument();
});

test("Should load 2 input boxex on the Contact component", () => {
  render(<Contact />);

  // QUERYING
  const inputBoxes = screen.getAllByRole("textbox");
  //   console.log(inputBoxes);

  //   Assertion
  expect(inputBoxes.length).toBe(2);
});

it("should load 2 input boxes on the Contact component", () => {
  render(<Contact />);
  const inputBoxes = screen.getAllByRole("textbox");
  expect(inputBoxes.length).toBe(2);
});
