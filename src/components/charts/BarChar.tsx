import type { BarChartProps as MUIBarChartProps } from "@mui/x-charts";
import { BarChart as MUIBarChart } from "@mui/x-charts/BarChart";

interface BarChartProps extends MUIBarChartProps {
	labelXAxis: Array<number | string>;
	data: Array<number | string>;
	height?: number;
}

const chartSetting = {
	yAxis: [{ label: "Booking" }],
	height: 250,
	margin: { left: 0 },
};

export default function BarChart({
	labelXAxis,
	data,
	...props
}: BarChartProps) {
	const dataset = labelXAxis.map((x, index) => ({
		month: x,
		bookingOverview: data[index],
	}));

	return (
		<MUIBarChart
			{...props}
			dataset={dataset}
			xAxis={[{ scaleType: "band", dataKey: "month" }]}
			layout="vertical"
			grid={{ vertical: true }}
			{...chartSetting}
		/>
	);
}
