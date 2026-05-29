import { ShoppingCart } from "@mui/icons-material";
import type { SvgIconProps } from "@mui/material";
import { Tooltip as MUITooltip, styled } from "@mui/material";
import Badge, { badgeClasses } from "@mui/material/Badge";
import IconButton from "../icon-button/IconButton";

interface ToolTipProps {
	variant?: "tooltip-with-badge";
	Icon?: React.ComponentType<SvgIconProps>;
	title: string;
	count?: number;
}

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

// const StyledTooltip = styled(MUITooltip)(() => ({}));
export default function Tooltip({
	variant,
	Icon = ShoppingCart,
	title,
	count,
}: ToolTipProps) {
	if (variant === "tooltip-with-badge") {
		return (
			<MUITooltip title={title}>
				<IconButton>
					<Icon fontSize="small" />
					<CartBadge badgeContent={count} color="primary" overlap="circular" />
				</IconButton>
			</MUITooltip>
		);
	}
	return (
		<MUITooltip title={title}>
			<Icon />
		</MUITooltip>
	);
}
