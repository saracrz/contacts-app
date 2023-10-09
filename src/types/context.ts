export interface IContact {
	id: number;
	avatar?: string;
	email: string;
	name: string;
	phone: number;
	[key: string]: string | undefined | React.ReactElement[] | number;
}

export type ContactContextType = {
	contacts: IContact[];
	getContacts: () => Promise<void>;
};
