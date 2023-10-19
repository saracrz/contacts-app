import styled from "styled-components";

export const StyledTextButton = styled.button`
	background-color: transparent;
	border: none;
	color: #4c46c3;
	cursor: pointer;
	&:hover {
		background-color: #eff3fe;
		border: 1px solid #4c46c3;
		border-radius: 15px;
		padding: 5px;
	}
`;

export const StyledButton = styled.button`
	background-color: #4c46c3;
	border-radius: 15px;
	border: 1px solid #dde2ff;
	color: #ffffff;
	cursor: pointer;
	height: 30px;
	padding: 0px 10px;
	&:disabled {
		background-color: #cad5fb;
		border: 1px solid #ccc;
		color: #aba8e2;
		cursor: not-allowed;
		pointer-events: none;
	}
	&:hover {
		background-color: #534fdc;
	}
`;
