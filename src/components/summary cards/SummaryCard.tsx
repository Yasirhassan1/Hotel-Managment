import type { ReactNode } from "react";
import Box from "../Box/Box";
import Typography from "../Typography/Typography";

interface SummaryCardProps {
	title: string;
	count: number;
	tag: string;
	children: ReactNode;
}
export default function SummaryCard({
	title,
	count,
	tag,
	children,
}: SummaryCardProps) {
	return (
		<Box
			variant="shadow"
			component={"div"}
			sx={{
				display: "flex",
				justifyContent: "space-between",
				padding: "14px",
				gap: "10px",
				bgcolor: "white",
				borderRadius: 4,
				flex: 1,
				minWidth: "250px",
			}}
		>
			<Box
				component={"div"}
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: "4px",
				}}
			>
				<Typography variant="body1">{title}</Typography>
				<Typography
					variant="h1"
					sx={{
						fontSize: "2rem",
					}}
				>
					{count}
				</Typography>
				<Typography variant="caption" color="primary">
					{tag}
				</Typography>
			</Box>
			{children}
		</Box>
	);
}
