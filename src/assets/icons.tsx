import { MouseEventHandler } from "react";

import { Icon } from "../styles";

export const DeleteIcon = ({ onClick }: { onClick?: () => void }) => (
	<Icon
		xmlns="http://www.w3.org/2000/svg"
		className="icon icon-tabler icon-tabler-trash"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		strokeWidth="2"
		stroke="currentColor"
		fill="none"
		strokeLinecap="round"
		strokeLinejoin="round"
		onClick={onClick}
	>
		<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
		<path d="M4 7l16 0"></path>
		<path d="M10 11l0 6"></path>
		<path d="M14 11l0 6"></path>
		<path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
		<path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
	</Icon>
);

export const EditIcon = ({ onClick }: { onClick?: () => void }) => (
	<Icon
		xmlns="http://www.w3.org/2000/svg"
		className="icon icon-tabler icon-tabler-pencil"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		strokeWidth="2"
		stroke="currentColor"
		fill="none"
		strokeLinecap="round"
		strokeLinejoin="round"
		onClick={onClick}
	>
		<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
		<path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"></path>
		<path d="M13.5 6.5l4 4"></path>
	</Icon>
);

export const SortIcon = ({ onClick }: { onClick?: () => void }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className="icon icon-tabler icon-tabler-arrows-sort"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		strokeWidth="2"
		stroke="currentColor"
		fill="none"
		strokeLinecap="round"
		strokeLinejoin="round"
		onClick={onClick}
	>
		<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
		<path d="M3 9l4 -4l4 4m-4 -4v14"></path>
		<path d="M21 15l-4 4l-4 -4m4 4v-14"></path>
	</svg>
);

export const Info = ({ onClick }: { onClick: MouseEventHandler<SVGSVGElement> }) => (
	<Icon
		xmlns="http://www.w3.org/2000/svg"
		className="icon icon-tabler icon-tabler-info-circle"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		strokeWidth="2"
		stroke="currentColor"
		fill="none"
		strokeLinecap="round"
		strokeLinejoin="round"
		onClick={onClick}
	>
		<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
		<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
		<path d="M12 9h.01"></path>
		<path d="M11 12h1v4h1"></path>
	</Icon>
);
