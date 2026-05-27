import type { SvgIconProps } from "@mui/material";
import type { ComponentType } from "react";
import type { NavLinkProps } from "react-router";
import { NavLink } from "react-router";
import Box from "../components/Box/Box";
import Typography from "../components/Typography/Typography";
import NavIcon from "./NavIcon";

interface NavItemProps extends NavLinkProps {
	Icon?: ComponentType<SvgIconProps>;
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
				<Box
					sx={{
						display: "flex",
						gap: "12px",
						alignItems: "center",
						padding: "2px",
						borderRadius: 6,
						bgcolor: isActive ? "#222F41" : "none",
						borderLeft: isActive
							? "4px solid #006ad8"
							: "4px solid transparent",
						"&:hover": {
							bgcolor: !isActive ? "#b5b5b522" : "",
						},
					}}
				>
					{Icon && <NavIcon Icon={Icon} active={isActive} />}
					<Typography
						variant="caption"
						sx={{
							color: isActive ? "white" : "#A6A3A2",
						}}
					>
						{children}
					</Typography>
				</Box>
			)}
		</NavLink>
	);
}
