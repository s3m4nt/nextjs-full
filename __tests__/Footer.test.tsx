import { render, screen } from "@testing-library/react";
import Footer from "@/components/Footer";

describe("Footer", () => {
  it("renders copyright text", async () => {
    render(await Footer());
    expect(screen.getByText(/All Rights Reserved/i)).toBeInTheDocument();
  });

  it("renders today's date", async () => {
    render(await Footer());
    const today = new Date().toLocaleDateString();
    expect(screen.getByText(today)).toBeInTheDocument();
  });
});
