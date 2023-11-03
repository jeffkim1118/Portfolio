import { render, screen } from "@testing-library/react";
import Home from "../components/home";

const renderHome = () => {
  return render(<Home />);
};

describe("Home component", () => {
  it("'Hello there!' message should appear on the page", () => {
    renderHome();
    const heroMsg1 = screen.getByText("Hello there!");
    expect(heroMsg1).toBeInTheDocument();
  });
  it("'Greeting message should appear on the page'", () => {
    renderHome();
    const heroMsg2 = screen.getByText("My name is Yoonsung Kim.");
    expect(heroMsg2).toBeInTheDocument();
  });
  it("The 'Get started' buttons should show up", () => {
    renderHome();
    const btn = screen.getByText("Get Started");
    expect(btn).toBeInTheDocument();
  });
  it("Stat title should appear", () => {
    renderHome();
    const statTitle = screen.getByText("Total Page Views");
    expect(statTitle).toBeInTheDocument();
  });
  it("Stat value should appear", () => {
    renderHome();
    const statValue = screen.getByText("89,400");
    expect(statValue).toBeInTheDocument();
  });
  it("Stat description should appear", () => {
    renderHome();
    const statDesc = screen.getByText("21% more than last month");
    expect(statDesc).toBeInTheDocument();
  });
  it("Github Link should appear with a proper link", () => {
    renderHome();
    const githubLink = screen.getByText('Github');
    expect(githubLink.getAttribute("href")).toBe("https://github.com/jeffkim1118");
  });
  it("Linkedin link should appear with a proper link", () => {
    renderHome();
    const linkedinLink = screen.getByText("Linkedin");
    expect(linkedinLink.getAttribute("href")).toBe('https://www.linkedin.com/in/yoonsung-kim-639b30178/')
  })
  
});
