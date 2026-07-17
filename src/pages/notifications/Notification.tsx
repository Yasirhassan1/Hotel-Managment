import { useVirtualizer } from "@tanstack/react-virtual";
import { memo, useRef } from "react";
import { Loader } from "../../components/Loader.tsx";
import Box from "../../styled/styled.tsx";
import { notificationsData } from "./data.ts";
import Row from "./Row.tsx";

const Notification = () => {
	console.log("noti");
	const parentRef = useRef<HTMLDivElement>(null);
	const rowVirtualizer = useVirtualizer({
		count: notificationsData.length,
		getScrollElement: () => parentRef.current,
		estimateSize: () => 60,
		directDomUpdates: true,
		anchorTo: "end",
		followOnAppend: "smooth",
		scrollEndThreshold: 80,
		overscan: 6,
		gap: 14,
	});
	return (
		<Box
			ref={parentRef}
			style={{
				height: `500px`,
				overflow: "auto",
				marginTop: "16px",
			}}
		>
			<Box
				style={{
					height: `${rowVirtualizer.getTotalSize()}px`,
					width: "100%",
					position: "relative",
					display: "flex",
					flexDirection: "column",
					gap: 10,
				}}
			>
				{rowVirtualizer.getVirtualItems().map((virtualItem) => {
					// const n = 44*virtualItem.index;
					const isLoaderRow = virtualItem.index >= notificationsData.length;
					if (isLoaderRow) {
						return (
							<Box
								key={virtualItem.index}
								style={{
									// position: "absolute",
									// top: 0,
									// left: 0,
									transform: `translateY(${virtualItem.start}px)`,
									// zIndex: 50
								}}
							>
								<Loader />
							</Box>
						);
					}
					return (
						<Row
							key={virtualItem.key}
							virtualItem={virtualItem}
							notificationData={notificationsData[virtualItem.index]}
						/>
					);
				})}
			</Box>
		</Box>
	);
};

export default memo(Notification);
