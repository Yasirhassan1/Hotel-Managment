import type { RowComponentProps } from "react-window";
import Typography from "../../components/Typography/Typography.tsx";
import Box from "../../styled/styled.tsx";
import type { NotificationType } from "../../types/types";

type RowProps = {
	notifications: NotificationType[];
};
export default function RowComponent({
	index,
	style,
	notifications,
}: RowComponentProps<RowProps>) {
	const notification = notifications[index];
	return (
		<Box>
			<Box
				variant="shadow"
				style={style}
				sx={{
					// borderBottom: "1px solid gray",
					padding: 1,
					paddingBottom: 6,
					borderRadius: 2,
				}}
			>
				<Typography
					sx={{
						fontWeight: notification.active ? 600 : 400,
					}}
				>
					{notification.name}
				</Typography>
				<Typography color="textSecondary">{notification.time}</Typography>
			</Box>
		</Box>
	);
}
