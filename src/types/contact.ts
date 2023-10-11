export interface IContact {
	id: string;
	avatar?: string;
	email: string;
	first_name: string;
	phone: string;
	[key: string]: string | undefined | React.ReactElement[] | number;
}

export type TContactData = {
	data: IContact;
};

export type TContactsData = {
	data: IContact[];
};