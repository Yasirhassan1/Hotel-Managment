import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import Avatar from "../avatars/Avatar";
import Icon from "../icon/Icon";
export default function Logo() {
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
}
