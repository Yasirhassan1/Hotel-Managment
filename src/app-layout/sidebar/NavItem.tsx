import type { SvgIconProps } from "@mui/material";
import type { ComponentType } from "react";
import type { NavLinkProps } from "react-router";
import { NavLink } from "react-router";
import Button from "../../components/Buttons/Button";
import Typography from "../../components/Typography/Typography";
import NavIcon from "./NavIcon";

interface NavItemProps extends NavLinkProps {
	Icon: ComponentType<SvgIconProps>;
	to: string;
	children: React.ReactNode;
}
export default function NavItem({
	Icon,
	to,
	children,
	...props
}: NavItemProps) {
	return (
		<NavLink
			style={{
				textDecoration: "none",
			}}
			{...props}
			to={to}
			className=""
			viewTransition
		>
			{({ isActive }) => (
				<Button
					disableRipple
					sx={{
						display: "flex",
						gap: "6px",
						justifyContent: "left",
						alignItems: "center",
						padding: "1px",
						textTransform: "none",
						width: "100%",
						borderRadius: 5,
						bgcolor: isActive ? "#222F41" : "none",
						borderLeft: isActive
							? "3px solid #006ad8"
							: "3px solid transparent",
						"&:hover": {
							bgcolor: !isActive ? "#b5b5b522" : "",
						},
					}}
				>
					<NavIcon Icon={Icon} active={isActive} />
					<Typography
						variant="body1"
						sx={{
							color: isActive ? "white" : "#A6A3A2",
							fontWeight: isActive ? 600 : 500,
						}}
					>
						{children}
					</Typography>
				</Button>
			)}
		</NavLink>
	);
}
