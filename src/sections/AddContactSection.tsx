import { useState } from "react";

import { Form, TextButton } from "../components";
import { useContacts } from "../context/ContactContext";
import { InputAndTitle, InputWrapper, SectionTitle } from "./styles";

export const AddContactSection = () => {
	const { addContact, formValues, setFormValues } = useContacts();
	const [isButtonDisabled, setIsButtonDisabled] = useState(true);
	const [showForm, setShowForm] = useState(false);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
		setIsButtonDisabled(e.target.value === "");
	};

	const handleAddContact = () => {
		const newContact = {
			id: NaN,
			first_name: formValues.first_name,
			last_name: formValues.last_name,
			email: formValues.email,
			phone: " - ",
		};

		void addContact(newContact);
		setShowForm(false);
		setFormValues({ id: NaN, first_name: "", last_name: "", email: "", phone: "-" });
	};

	const handleOnClick = () => {
		setShowForm(!showForm);
	};

	return (
		<>
			<InputWrapper>
				<InputAndTitle>
					<SectionTitle>Contacts</SectionTitle>
				</InputAndTitle>
				{showForm ? (
					<Form
						disabledButton={isButtonDisabled}
						name={formValues.first_name}
						lastName={formValues.last_name}
						email={formValues.email}
						onChange={handleInputChange}
						onSubmit={handleAddContact}
					/>
				) : null}
				{!showForm ? <TextButton label={"+ New Contact"} onClickButton={handleOnClick} /> : null}
			</InputWrapper>
		</>
	);
};
