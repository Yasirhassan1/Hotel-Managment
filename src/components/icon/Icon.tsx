import type { SvgIconProps, SxProps } from "@mui/material";
import type { Theme } from "@mui/material/styles";

interface IconProps extends SvgIconProps {
	Icon: React.ComponentType<SvgIconProps>;
	sx?: SxProps<Theme>;
}

export default function Icon({ Icon: Component, sx, ...props }: IconProps) {
	return (
		<Component
			{...props}
			sx={[
				(theme) => ({
					color: theme.palette.color.icon,
				}),
				...(Array.isArray(sx) ? sx : [sx]),
			]}
		/>
	);
}
