export interface IInput {
	disabledButton: boolean;
	email: string;
	name: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onAddContact: () => void;
}
