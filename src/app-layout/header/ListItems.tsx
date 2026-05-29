import { Settings } from "@mui/icons-material";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import {
	Divider,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import { NavLink } from "react-router";
export default function ListItems() {
	return (
		<List
			sx={{
				bgcolor: "white",
				borderRadius: 5,
			}}
		>
			<ListItem disablePadding>
				<ListItemButton
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "left",
						justifyContent: "left",
						textAlign: "left",
					}}
					disableTouchRipple
				>
					<ListItemText primary="James Wilson" />
					<ListItemText primary="james@touradmin.com" />
				</ListItemButton>
			</ListItem>
			<Divider />

			<ListItem disablePadding>
				<ListItemButton>
					<NavLink
						style={{
							display: "flex",
							textDecoration: "none",
							alignItems: "center",
							width: "100%",
						}}
						to={"/profile"}
					>
						<ListItemIcon>
							<PersonIcon />
						</ListItemIcon>
						<ListItemText primary="My Profile" />
					</NavLink>
				</ListItemButton>
			</ListItem>
			<ListItem disablePadding>
				<ListItemButton>
					<NavLink
						style={{
							display: "flex",
							textDecoration: "none",
							alignItems: "center",
							width: "100%",
						}}
						to={"/settings"}
					>
						<ListItemIcon>
							<Settings />
						</ListItemIcon>
						<ListItemText primary="Setting" />
					</NavLink>
				</ListItemButton>
			</ListItem>
			<Divider />
			<ListItem disablePadding>
				<ListItemButton>
					<NavLink
						style={{
							display: "flex",
							textDecoration: "none",
							alignItems: "center",
							width: "100%",
						}}
						to={"/sign-up"}
					>
						<ListItemIcon>
							<LogoutIcon color="error" />
						</ListItemIcon>
						<ListItemText primary="Logout" />
					</NavLink>
				</ListItemButton>
			</ListItem>
		</List>
	);
}
