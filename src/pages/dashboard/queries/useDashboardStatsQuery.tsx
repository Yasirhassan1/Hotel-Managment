import { useQuery } from "@tanstack/react-query";
import { summaryCardData } from "../summaryCardData";

export default function useDashboardStatsQuery() {
	return useQuery({
		queryKey: ["dashboard-stats"],
		queryFn: loadData,
	});
}

async function loadData() {
	try {
		await new Promise((resolve) => setTimeout(resolve, 2000));
            // throw new Error("Something went wrong")
		return summaryCardData;
	} catch {
		throw new Error("Something went wrong");
	}
}
