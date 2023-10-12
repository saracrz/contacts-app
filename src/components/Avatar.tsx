import { FC } from "react";

import { ContactAvatar } from "../types/avatar";
import { AvatarImg } from "./styles";

export const Avatar: FC<ContactAvatar> = ({ avatar }) => {
	return avatar ? <AvatarImg src={avatar} alt="" /> : null;
};
