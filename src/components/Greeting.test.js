import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test("renders hello world as a text", () => {
  // A - arrange ( set up test data , test condition and test enviroment)
  render(<Greeting />);
  // A - Act (Run Logic that shoould be test e.g execute function)

  // A - assert (compare execution and check will it match with our expextations)
  const helloWorldElement = screen.getByText("Hello World");
  expect(helloWorldElement).toBeInTheDocument();
});
