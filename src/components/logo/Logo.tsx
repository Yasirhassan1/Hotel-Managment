import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import Avatar from "../avatars/Avatar";
export default function Logo() {
	return (
		<Avatar
			sx={{
				bgcolor: "primary.main",
			}}
		>
			<TravelExploreIcon />
		</Avatar>
	);
}
