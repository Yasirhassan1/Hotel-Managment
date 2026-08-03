import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Avatar } from "@mui/material";
import Chip from "../../components/Chip/Chip";
import Typography from "../../components/Typography/Typography";
import Box from "../../styled/styled";
import type { ChipType } from "../../types/types";
import { stringAvatar } from "../../utils/avatar-short-name";

interface ViewFormProps {
	data: {
		id: number;
		staffMember: string;
		email: string;
		phone: string;
		role: string;
		status: string;
		joinedDate: string;
	};
}

export default function ViewForm({ data }: ViewFormProps) {
	const inforCard = [
		{
			id: "1",
			icon: EmailIcon,
			title: "Email",
			subTitle: data.email,
		},
		{
			id: "2",
			icon: LocalPhoneIcon,
			title: "Phone No",
			subTitle: data.phone,
		},
		{
			id: "3",
			icon: BusinessCenterIcon,
			title: "Role",
			subTitle: data.role,
		},
		{
			id: "4",
			icon: CalendarTodayIcon,
			title: "Joined Date",
			subTitle: data.joinedDate,
		},
	];

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: "1rem",
				alignItems: "center",
				height: "260px",
				width: "100%",

				overflowY: "auto",
			}}
		>
			<Avatar {...stringAvatar(data.staffMember)} />
			<Typography variant="h3">{data.staffMember}</Typography>
			<Chip chipType={data.role.toLowerCase() as ChipType} label={data.role} />
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: "0.6rem",
					marginTop: "0.4rem",
					
					width: "100%",
				}}
			>
				{inforCard.map((cur) => (
					<Box
						key={cur.id}
						sx={{
							display: "flex",
							padding: 1,
							alignItems: "center",
							gap: "0.8rem",
							width: "100%",
							borderRadius: 2,
							bgcolor: "#F8F9FA"
						}}
					>
						<cur.icon
							color="primary"
							sx={{
								width: 16,
							}}
						/>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
							}}
						>
							<Typography variant="caption">{cur.title}</Typography>
							<Typography variant="body2" sx={{
								fontWeight: 500
							}}>{cur.subTitle}</Typography>
						</Box>
					</Box>
				))}
			</Box>
		</Box>
	);
}
