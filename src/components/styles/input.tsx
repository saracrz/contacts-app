import styled from "styled-components";

export const StyledButton = styled.button`
	background-color: #dde2ff;
	border-radius: 15px;
	border: 1px solid #dde2ff;
	color: #4c46c3;
	cursor: pointer;
	height: 30px;
	padding: 0px 10px;
	&:disabled {
		background-color: #e1dddd;
		border: 1px solid #ccc;
		color: #999;
		cursor: not-allowed;
	}
`;

export const StyledInput = styled.input`
	border-radius: 15px;
	border: 1px solid #eae8e8;
	margin-right: 5px;
	padding: 0px 10px;
	width: 200px;
	height: 30px;
	&:focus {
		border: 2px solid #dde2ff;
		outline: none;
	}

	@media (max-width: 867px) {
		margin-bottom: 10px;
	}
`;
