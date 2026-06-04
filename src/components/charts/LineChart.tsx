import { LineChart as MUILineChart } from "@mui/x-charts/LineChart";

interface LineChartProp {
	labelXAxis: Array<number | string>;
	data: Array<number | string>;
	height: number;
}

export default function LineChart({
	labelXAxis,
	data,
	...props
}: LineChartProp) {
	const dataset = labelXAxis.map((x, index) => ({
		month: x,
		overview: data[index],
	}));
	return (
		<MUILineChart
			{...props}
			dataset={dataset}
			series={[
				{
					dataKey: "overview",
					label: "Revenue Overview",
					curve: "natural",
				},
			]}
			xAxis={[{ scaleType: "point", dataKey: "month" }]}
			grid={{ vertical: true, horizontal: true }}
			colors={["#006AD8"]}
		/>
	);
}
