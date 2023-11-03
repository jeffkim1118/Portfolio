import { render } from "@testing-library/react";
import Home from "../components/home";

describe("Home component", () => {
    it('should render the page', () => {
        const {container} = render(<Home/>);
        expect(container).toBeInTheDocument();
    })
})