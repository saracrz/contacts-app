import { ContactProvider } from "./context/ContactContext";
import { ContactsSection } from "./sections/ContactsSection";

export const App = () => {
	return (
		<ContactProvider>
			<div className="App">
				<h2>Contacts</h2>
				<ContactsSection />
			</div>
		</ContactProvider>
	);
};
