import { Skeleton } from "@mui/material";
import Button from "../../components/Buttons/Button";
import SummaryCard from "../../components/summary cards/SummaryCard";
import Typography from "../../components/Typography/Typography";
import Box from "../../styled/styled";
import useDashboardStatsQuery from "./queries/useDashboardStatsQuery";
import { summaryCardData } from "./summaryCardData";

const DashboardStats = () => {
	const { data, isLoading, isError, refetch } = useDashboardStatsQuery();

	if (isLoading) {
		return <LoadingUI />;
	}

	if (isError) {
		return (
			<Box sx={{
				display: "flex",
				flexDirection: "column",
				gap: 3,
				justifyContent: "center",
				alignItems: "center",
				
			}}>
				<Typography variant="h2" color="error">
					Something went wrong
				</Typography>
				<Button onClick={() => refetch()} variant="contained" color="primary">Retry</Button>
			</Box>
		);
	}

	return (
		<Box
			sx={{
				display: "flex",
				gap: 2,
				width: "100%",
				flexWrap: "wrap",
			}}
		>
			{Array.isArray(data) &&
				data.map((cur) => (
					<SummaryCard
						key={cur.id}
						title={cur.title}
						count={cur.count}
						tag={cur.tag}
						icon={cur.Icon}
					/>
				))}
		</Box>
	);
};

export default DashboardStats;

function LoadingUI() {
	return (
		<Box
			sx={{
				display: "flex",
				gap: 2,
				width: "100%",
				flexWrap: "wrap",
			}}
		>
			{summaryCardData.map((val) => (
				<Box
					key={val.id}
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
							gap: "1px",
						}}
					>
						<Skeleton variant="text" width={60} />
						<Skeleton variant="rectangular" width={60} height={40} />
						<Skeleton variant="text" />
					</Box>

					<Skeleton
						variant="rounded"
						sx={{
							width: "50px",
							height: "50px",
							padding: "12px",
							borderRadius: "50px",
						}}
					/>
				</Box>
			))}
		</Box>
	);
}
