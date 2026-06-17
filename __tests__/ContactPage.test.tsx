import React from "react";
import { render, screen } from "@testing-library/react";

// Mock PageLayout to just render children without async Footer
jest.mock("@/components/PageLayout", () => ({ children }: { children: React.ReactNode }) => <>{children}</>);
// Mock next/link to a simple anchor
jest.mock("next/link", () => ({ children, href, ...rest }: any) => (
  <a href={href} {...rest}>{children}</a>
));

import Contact from "@/app/contact/page";

describe("ContactPage", () => {
  it("renders the page heading", () => {
    render(<Contact />);
    expect(screen.getByText("CONTACT.")).toBeInTheDocument();
  });

  it("renders the email link", () => {
    render(<Contact />);
    expect(
      screen.getByRole("link", { name: /loremipsum@aol\.com/i })
    ).toBeInTheDocument();
  });
});