import { FC } from "react";

import { IInput } from "../types/input";
import { StyledButton, StyledInput } from "./styles/input";

export const Input: FC<IInput> = ({ name, email, onChange, onAddContact, disabledButton }) => {
	return (
		<>
			<StyledInput
				type="text"
				name={"first_name"}
				placeholder="Name"
				value={name}
				onChange={onChange}
			/>
			<StyledInput
				type="email"
				name={"email"}
				placeholder="Email"
				value={email}
				onChange={onChange}
			/>
			<StyledButton onClick={onAddContact} disabled={disabledButton}>
				Add Contact
			</StyledButton>
		</>
	);
};
