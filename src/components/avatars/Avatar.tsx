import {
	Avatar as MUIAvatar,
	type AvatarProps as MUIAvatarProps,
} from "@mui/material";
import type { ReactNode } from "react";

interface AvatarProps extends MUIAvatarProps {
	children: ReactNode;
}

export default function Avatar({ children, ...props }: AvatarProps) {
	return <MUIAvatar {...props}>{children}</MUIAvatar>;
}
