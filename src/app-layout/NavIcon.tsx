import type { SvgIconProps } from "@mui/material";
import type { ComponentType } from "react";
import Box from "../components/Box/Box";

interface IconProps {
	Icon: ComponentType<SvgIconProps>;
	active?: boolean;
}
export default function NavIcon({ Icon, active = false }: IconProps) {
	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				width: 12,
				height: 12,
				padding: 2,
				borderRadius: 2,
			}}
		>
			<Icon
				sx={{
					color: active ? "primary.main" : "#A6A3A2",
				}}
			/>
		</Box>
	);
}
