import { memo } from "react";
import BarChart from "../../components/charts/BarChar";
import LineChart from "../../components/charts/LineChart";
import SummaryCard from "../../components/summary cards/SummaryCard";
import Typography from "../../components/Typography/Typography";
import Box from "../../styled/styled";
import DashboardStats from "./DashboardStats";
import QuickAction from "./QuickAction";
import useDashboardStatsQuery from "./queries/useDashboardStatsQuery";
import RecientActivity from "./RecientActivity";
import { summaryCardData } from "./summaryCardData";

const Dashboard = () => {
	return (
		<Box
			sx={{
				display: "flex",
				gap: "3rem",
				// bgcolor: "green",
				marginTop: 4,
				flexDirection: "column",
			}}
		>
			<DashboardStats />

			<Box
				sx={{
					borderRadius: "20px",
					display: "flex",
					flexDirection: "column",
					gap: "10px",
				}}
			>
				<Box
					sx={{
						display: "flex",
						gap: "20px",
						justifyContent: "space-between",
						flexWrap: "wrap",
					}}
				>
					<Box
						variant="shadow"
						sx={(theme) => ({
							flex: 1.5,
							display: "flex",
							flexDirection: "column",
							minWidth: "350px",
							gap: "10px",
							padding: 2,
							borderRadius: 8,
							bgcolor: theme.palette.background.paper,
						})}
					>
						<Box
							sx={{
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
							}}
						>
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
								}}
							>
								<Typography variant="body1">Revenue Overview</Typography>
								<Typography variant="caption">
									Monthly revenue for 2025
								</Typography>
							</Box>
							<Box
								sx={{
									bgcolor: "#E3F2FD",
									borderRadius: "50px",
								}}
							>
								<Typography
									variant="caption"
									sx={(theme) => ({
										color: theme.palette.primary.main,
										padding: 1,
									})}
								>
									2025
								</Typography>
							</Box>
						</Box>
						<LineChart
							labelXAxis={[
								"Jan",
								"Feb",
								"Mar",
								"Apr",
								"May",
								"Jun",
								"Jul",
								"Aug",
								"Sep",
								"Oct",
								"Nov",
								"Dec",
							]}
							data={[
								45, 41, 48, 50, 52, 53, 55, 60, 63, 55, 50, 49, 55, 60, 65, 70,
								75, 80, 75, 70, 80, 85, 90,
							]}
							height={250}
						/>
					</Box>

					<Box
						variant="shadow"
						sx={(theme) => ({
							flex: 1,
							display: "flex",
							minWidth: "350px",
							flexDirection: "column",
							bgcolor: theme.palette.background.paper,
							padding: "20px",
							height: "fit-content",
							borderRadius: 8,
							gap: "10px",
						})}
					>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
							}}
						>
							<Typography variant="h3">Bookings</Typography>
							<Typography variant="caption">Monthly bookings count</Typography>
						</Box>

						<BarChart
							series={[{ dataKey: "bookingOverview", label: "Booking" }]}
							borderRadius={6}
							labelXAxis={[
								"Jan",
								"Feb",
								"Mar",
								"Apr",
								"May",
								"Jun",
								"Jul",
								"Aug",
								"Sep",
								"Oct",
								"Nov",
								"Dec",
							]}
							data={[80, 60, 110, 130, 95, 145, 160, 185, 145, 153, 190, 200]}
						/>
					</Box>
				</Box>
			</Box>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					gap: "1rem",
					flexWrap: "wrap",
				}}
			>
				<RecientActivity />
				<QuickAction />
			</Box>
		</Box>
	);
};

export default memo(Dashboard);
