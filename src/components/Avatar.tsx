import { FC } from "react";

import { AvatarImg } from "../styles";

interface ContactAvatar {
	contactAvatar: string | undefined | React.ReactElement[];
}

export const Avatar: FC<ContactAvatar> = ({ contactAvatar }) => {
	return contactAvatar ? <AvatarImg src={contactAvatar} alt="" /> : null;
};
