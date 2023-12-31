import styled from "styled-components";

export const ContactSectionWrapper = styled.section`
	display: flex;
	padding: 40px;

	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
		margin-top: 10px;
	}
`;

export const SectionTitle = styled.h2`
	margin: 0 0 0 40px;
`;
