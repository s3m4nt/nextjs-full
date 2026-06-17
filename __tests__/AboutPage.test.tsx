import { render, screen } from "@testing-library/react";
import About from "@/app/about/page";

describe("AboutPage", () => {
  it("renders the page heading", () => {
    render(<About />);
    expect(screen.getByText("ABOUT.")).toBeInTheDocument();
  });
});