export interface IButton {
	children?: React.ReactNode;
	disabledButton?: boolean;
	label: string;
	onClickButton: () => void;
}
