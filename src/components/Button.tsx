import { FC } from "react";

import { IButton } from "../types";
import { StyledButton, StyledTextButton } from "./styles";

export const Button: FC<IButton> = ({
	label,
	onClickButton,
	children,
	disabledButton,
}): JSX.Element => {
	return (
		<StyledButton onClick={onClickButton} disabled={disabledButton} type="submit">
			{label}
			{children}
		</StyledButton>
	);
};

export const TextButton: FC<IButton> = ({ label, onClickButton, children, disabledButton }) => {
	return (
		<StyledTextButton onClick={onClickButton} disabled={disabledButton}>
			{label}
			{children}
		</StyledTextButton>
	);
};
