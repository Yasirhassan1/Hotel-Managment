import { BarChart as MUIBarChart } from "@mui/x-charts/BarChart";

const chartSetting = {
	yAxis: [{ label: "Booking" }],
	height: 250,
	margin: { left: 0 },
};
interface BarChartProp {
	labelXAxis: Array<number | string>;
	data: Array<number | string>;
	height?: number;
}
export default function BarChart({ labelXAxis, data, height }: BarChartProp) {
	const dataset = labelXAxis.map((x, index) => ({
		month: x,
		bookingOverview: data[index],
	}));

	return (
		<MUIBarChart
			dataset={dataset}
			xAxis={[{ scaleType: "band", dataKey: "month" }]}
			series={[{ dataKey: "bookingOverview", label: "Booking" }]}
			layout="vertical"
			grid={{ vertical: true }}
			{...chartSetting}
		/>
	);
}
