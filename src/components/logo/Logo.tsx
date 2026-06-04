import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import { memo } from "react";
import Avatar from "../avatars/Avatar";
import Icon from "../icon/Icon";

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
				Icon={TravelExploreIcon}
				sx={{
					color: "white",
				}}
			/>
		</Avatar>
	);
};
export default memo(Logo);
