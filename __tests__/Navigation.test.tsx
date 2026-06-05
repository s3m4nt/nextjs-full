import { render, screen } from "@testing-library/react";
import Navigation from "@/components/Navigation";

jest.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

describe("Navigation", () => {
  it("renders all nav links", () => {
    render(<Navigation />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("applies active style to the current page link", () => {
    render(<Navigation />);
    const homeLink = screen.getByText("Home").closest("a");
    expect(homeLink).toHaveClass("border-b-2");
  });

  it("does not apply active style to inactive links", () => {
    render(<Navigation />);
    const aboutLink = screen.getByText("About").closest("a");
    expect(aboutLink).not.toHaveClass("border-b-2");
  });
});
