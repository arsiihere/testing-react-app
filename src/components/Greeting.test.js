import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("<Greeting/>", () => {
  test("renders hello world as a text", () => {
    // A - arrange ( set up test data , test condition and test enviroment)
    render(<Greeting />);
    // A - Act (Run Logic that shoould be test e.g execute function)

    // A - assert (compare execution and check will it match with our expextations)
    const helloWorldElement = screen.getByText("Hello World");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders go to see you when the state is false", () => {
    render(<Greeting />);
    const outputEl = screen.getByText("good to see you", { exact: false });

    expect(outputEl).toBeInTheDocument();
  });
  test("renders when the button was clicked", () => {
    render(<Greeting />);
    const buttonEl = screen.getByRole("button");
    userEvent.click(buttonEl);

    const output = screen.getByText("Changed!", { exact: false });
    const outputEl = screen.queryByText("good to see you", { exact: false });

    expect(output).toBeInTheDocument();
    expect(outputEl).not.toBeInTheDocument();
  });
});
