import { ShoppingCart } from "@mui/icons-material";
import type { SvgIconProps } from "@mui/material";
import { Tooltip as MUITooltip, styled } from "@mui/material";
import Badge, { badgeClasses } from "@mui/material/Badge";
import IconButton from "../icon-button/IconButton";

interface ToolTipProps {
	Icon?: React.ComponentType<SvgIconProps>;
	title: string;
	count?: number;
	color: string;
}

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -3px;
  }
`;

export default function TooltipWithBadge({
	Icon = ShoppingCart,
	title,
	color,
	count = 0,
	...props
}: ToolTipProps) {
	return (
		<MUITooltip title={title} {...props}>
			<IconButton>
				<Icon fontSize="small" />
				<CartBadge
					badgeContent={count}
					color={color as "primary" | "secondary" | "error" | "warning"}
					overlap="circular"
				/>
			</IconButton>
		</MUITooltip>
	);
}
