import { render, screen } from "@testing-library/react";
import RestaurantCard, {
  withPromotedLabel,
} from "../src/components/RestaurantCard";
import MOCK_DATA from "../src/components/mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("should render RestaurantCard component with props Data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByAllText("Abc");
  expect(name).toBeInTheDocument();
});

it("should render RestaurantCard component with promoted label", () => {
  render(<RestaurantCard />);
  const label = screen.getByAllText("Promoted");
  expect(label).toBeInTheDocument();
});
