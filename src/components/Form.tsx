import { FC } from "react";

import { IForm } from "../types/form";
import { Button } from "./Button";
import { Input } from "./Input";

export const Form: FC<IForm> = ({ lastName, name, email, onChange, onSubmit, disabledButton }) => {
	return (
		<form>
			<Input type="text" name={"first_name"} placeholder="Name" value={name} onChange={onChange} />
			<Input
				type="text"
				name={"last_name"}
				placeholder="Last Name"
				value={lastName}
				onChange={onChange}
			/>
			<Input type="email" name={"email"} placeholder="Email" value={email} onChange={onChange} />
			<Button label="Add Contact" onClickButton={onSubmit} disabledButton={disabledButton} />
		</form>
	);
};
