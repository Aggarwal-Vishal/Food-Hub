import { sum } from "../src/components/sum";
import { minus } from "../src/components/minus";

test("Sum function should calculate the sum of two numbers", () => {
  const result = sum(3, 4);
  expect(result).toBe(7);

  const king = minus(5, 2);
  expect(king).toBe(3);
});
