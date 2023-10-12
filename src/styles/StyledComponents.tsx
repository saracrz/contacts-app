import styled, { createGlobalStyle } from "styled-components";

export const AppRoot = createGlobalStyle`
	* {
	font-family: Verdana, sans-serif;
	}
		
	body {
		background-color: #f3f3f3;
	}
    
`;

export const Content = styled.div`
	background-color: white;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	gap: 10px;
	padding: 1rem;
	width: 100%;
`;

export const TableWrapper = styled.table`
	background-color: white;
	border-collapse: collapse;
`;

export const NameWrapper = styled.div`
	align-items: center;
	display: flex;
	justify-content: center;

	p:first-child {
		align-items: center;
		margin-right: 6px;
	}
`;

export const HeaderWrapper = styled.thead``;

export const TableHeaderWithIcon = styled.div`
	align-items: center;
	cursor: pointer;
	display: flex;

	svg {
		margin-left: 1rem;
	}
`;

export const TableRowHeader = styled.tr`
	display: table-cell;
`;

export const TableRow = styled.tr`
	height: 68px;
`;

export const TableCellHeader = styled.th`
	color: #4e5661;
	font-size: 14px;
	font-weight: 600;
	padding: 14px;
	text-align: left;
`;

export const TableBody = styled.tbody``;

export const TableCellBody = styled.td`
	border-bottom: 1px solid #d3d3d3;
	font-size: 14px;
	padding: 16px 14px;
	text-align: left;
`;

export const AvatarAndNameWrapper = styled.div`
	align-items: center;
	display: flex;

	img {
		margin-right: 1rem;
	}
`;

export const AvatarImg = styled.img`
	border-radius: 50%;
	height: auto;
	width: 32px;
`;

export const Icon = styled.svg`
	color: #626262;
	cursor: pointer;
	height: 22px;
	padding: 6px;
	width: 22px;
`;

export const ContactSectionWrapper = styled.section`
	display: flex;

	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
		margin-top: 10px;
	}
`;

export const ContactWrapper = styled.div`
	padding: 30px;
	text-align: center;

	img {
		width: 100px;
	}

	.email {
		margin-top: 0px;
	}
`;

export const CardContent = styled.div`
	background-color: white;
	border-radius: 10px;
	height: fit-content;
	margin-left: 10px;
	padding: 15px;
`;

export const CardHeader = styled.div`
	align-items: center;
	display: flex;
	justify-content: space-between;

	h5 {
		color: #4e5661;
		font-size: 14px;
		font-weight: 600;
	}
`;
