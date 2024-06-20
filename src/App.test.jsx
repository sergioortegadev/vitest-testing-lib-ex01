import { describe, it, expect } from "vitest";
import { render, screen, waitFor, act } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import App from "./App";

describe("♣ - Test: <App/>", () => {
  it("Should render order buttons and cards products", () => {
    render(<App />);
    const button = screen.getAllByRole("button");
    expect(button).toHaveLength(3);

    const products = screen.getAllByRole("figure");
    expect(products).toHaveLength(30);
  });

  it("Sould order products by price when the button 'menor' is clicked", async () => {
    render(<App />);
    const button = screen.getByText("menor precio");
    expect(button).toBeInTheDocument();

    act(() => {
      userEvent.click(button);
    });

    await waitFor(() => {
      const products = screen.getAllByRole("figure");
      expect(products[0]).toHaveTextContent("12");
    });
  });
  it("Sould order products by price when the button 'mayor' is clicked", async () => {
    render(<App />);
    const button = screen.getByText("mayor precio");
    expect(button).toBeInTheDocument();

    act(() => {
      userEvent.click(button);
    });

    await waitFor(() => {
      const products = screen.getAllByRole("figure");
      expect(products[0]).toHaveTextContent("1749");
    });
  });
});
