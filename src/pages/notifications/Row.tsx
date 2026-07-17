import { useTheme } from "@mui/material";
import type { VirtualItem } from "@tanstack/react-virtual";
import { memo } from "react";
import Typography from "../../components/Typography/Typography";
import Box from "../../styled/styled";

interface RowProps {
	virtualItem: VirtualItem;
	notificationData: {
		id: string;
		name: string;
		time: string;
		active: boolean;
	};
}
const Row = ({ virtualItem, notificationData }: RowProps) => {
	const theme = useTheme();
	console.log("virtualization");
	return (
		<Box
			variant="shadow"
			style={{
				position: "absolute",
				top: 0,
				left: 0,
				width: "100%",
				height: `${virtualItem.size}px`,
				transform: `translateY(${virtualItem.start}px)`,
				padding: "8px",
				// paddingBottom: 6,
				// marginTop: 12,

				borderRadius: 4,
				backgroundColor: theme.palette.background.paper,
				border: "1px solid #d1d1d1",
			}}
		>
			<Typography
				sx={{
					fontWeight: notificationData.active ? 600 : 400,
				}}
			>
				{notificationData.name}
			</Typography>
			<Typography color="textSecondary">{notificationData.time}</Typography>
		</Box>
	);
};

export default memo(Row);
