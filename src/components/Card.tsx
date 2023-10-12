import { Close } from "../assets/icons";
import { useContacts } from "../context/ContactContext";
import { CardContent, CardHeader } from "../styles";

export const Card = ({ children, title }: { children: React.ReactNode; title: string }) => {
	const { deselectContact } = useContacts();

	return (
		<CardContent>
			<CardHeader>
				<h5>{title}</h5>
				<Close onClick={deselectContact} />
			</CardHeader>
			{children}
		</CardContent>
	);
};
