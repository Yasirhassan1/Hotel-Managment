import type { SvgIconProps } from "@mui/material";
import type { ComponentType } from "react";
import Box from "../../styled/styled";

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
				sx={(theme) => ({
					color: active ? "primary.main" : theme.palette.color.icon,
				})}
			/>
		</Box>
	);
}
