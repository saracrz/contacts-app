export interface IForm {
	disabledButton: boolean;
	email: string;
	lastName: string;
	name: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onSubmit: () => void;
}

export interface IInput {
	name: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder: string;
	type: string;
	value: string;
}
