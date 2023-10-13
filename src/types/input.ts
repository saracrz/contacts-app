export interface IInput {
	email: string;
	lastName: string;
	disabledButton: boolean;
	name: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onAddContact: () => void;
}
