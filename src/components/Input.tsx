import { FC } from "react";

import { IInput } from "../types/form";
import { StyledInput } from "./styles/form";

export const Input: FC<IInput> = ({ name, onChange, placeholder, type, value }) => {
	return (
		<StyledInput
			type={type}
			name={name}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
		/>
	);
};
