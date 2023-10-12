import { FC } from "react";

import { AvatarImg } from "./styles";

interface ContactAvatar {
	avatar: string | undefined | React.ReactElement[];
}

export const Avatar: FC<ContactAvatar> = ({ avatar }) => {
	return avatar ? <AvatarImg src={avatar} alt="" /> : null;
};
