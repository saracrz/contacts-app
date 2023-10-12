import { render, screen } from "@testing-library/react";

import { App } from "../src/App";

test("App component display header", () => {
	render(<App />);

	const heading: HTMLElement = screen.getByText("Contacts");

	expect(heading).toBeInTheDocument();
});

test("App component display table and its data correctly", () => {
	render(<App />);

	const table: HTMLElement = screen.getByRole("table");
	const headers: HTMLElement[] = screen.getAllByRole("columnheader");

	expect(table).toBeInTheDocument();
	expect(headers).toHaveLength(4);

	expect(screen.getByText("Name")).toBeInTheDocument();
	expect(screen.getByText("Email")).toBeInTheDocument();
	expect(screen.getByText("Last Name")).toBeInTheDocument();
});
