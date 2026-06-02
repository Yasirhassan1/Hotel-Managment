import type { SvgIconProps } from "@mui/material";
import Box from "../Box/Box";
import Icon from "../icon/Icon";
import Typography from "../Typography/Typography";

interface SummaryCardProps {
	title: string;
	count: number;
	tag: {
		text: string;
		tagColor: string;
	};
	icon: {
		iconRef: React.ComponentType<SvgIconProps>;
		iconBgColor: string;
		iconColor: string;
	};
}
export default function SummaryCard({
	title,
	count,
	tag,
	icon,
}: SummaryCardProps) {
	return (
		<Box
			variant="shadow"
			component={"div"}
			sx={(theme) => ({
				display: "flex",
				justifyContent: "space-between",
				padding: 3,
				gap: "10px",
				bgcolor: theme.palette.background.paper,
				borderRadius: 8,
				flex: 1,
				minWidth: "300px",
			})}
		>
			<Box
				component={"div"}
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: "4px",
				}}
			>
				<Typography
					variant="body1"
					sx={(theme) => ({
						color: theme.palette.color.textSecondary,
					})}
				>
					{title}
				</Typography>
				<Typography
					variant="h1"
					sx={{
						fontSize: "2rem",
					}}
				>
					{count}
				</Typography>
				<Typography
					variant="caption"
					sx={{
						color: tag.tagColor,
					}}
				>
					{tag.text}
				</Typography>
			</Box>
			<Icon
				Icon={icon.iconRef}
				sx={{
					bgcolor: icon.iconBgColor,
					color: icon.iconColor,
					width: "50px",
					height: "50px",
					padding: "12px",
					borderRadius: "50px",
				}}
			></Icon>
		</Box>
	);
}
