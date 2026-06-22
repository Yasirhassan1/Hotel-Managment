import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import Avatar from "@mui/material/Avatar";
import Icon from "@mui/material/Icon";
import { memo } from "react";

const Logo = () => {
	return (
		<Avatar
			sx={{
				bgcolor: "primary.main",
				width: 40,
				height: 40,
			}}
		>
			<Icon
				sx={{
					color: "white",
				}}
			>
				<TravelExploreIcon />
			</Icon>
		</Avatar>
	);
};
export default memo(Logo);
