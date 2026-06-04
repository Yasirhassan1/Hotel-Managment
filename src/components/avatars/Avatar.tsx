import {
	Avatar as MUIAvatar,
	type AvatarProps as MUIAvatarProps,
} from "@mui/material";
import type { ReactNode } from "react";
import { memo } from "react";

interface AvatarProps extends MUIAvatarProps {
	children: ReactNode;
}

const Avatar = ({ children, ...props }: AvatarProps) => {
	return <MUIAvatar {...props}>{children}</MUIAvatar>;
};

export default memo(Avatar);
