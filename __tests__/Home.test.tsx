import { render, screen } from "@testing-library/react";
import Home from "@/app/home/page";

describe("HomePage", () => {
  it("renders the page heading", () => {
    render(<Home />);
    expect(screen.getByText("HOMEPAGE.")).toBeInTheDocument();
  });

  it("renders the image with correct alt text", () => {
    render(<Home />);
    expect(screen.getByAltText("Valentino Funghi")).toBeInTheDocument();
  });
});