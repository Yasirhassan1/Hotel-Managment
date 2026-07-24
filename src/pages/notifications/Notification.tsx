// import { useVirtualizer } from "@tanstack/react-virtual";
// import { memo, useRef } from "react";
// import { Loader } from "../../components/Loader.tsx";
// import Box from "../../styled/styled.tsx";
// import { notificationsData } from "./data.ts";
// import Row from "./Row.tsx";

// const Notification = () => {
// 	console.log("noti");
// 	const parentRef = useRef<HTMLDivElement>(null);
// 	const rowVirtualizer = useVirtualizer({
// 		count: notificationsData.length,
// 		getScrollElement: () => parentRef.current,
// 		estimateSize: () => 60,
// 		directDomUpdates: true,
// 		anchorTo: "end",
// 		followOnAppend: "smooth",
// 		scrollEndThreshold: 80,
// 		overscan: 6,
// 		gap: 14,
// 	});
// 	return (
// 		<Box
// 			ref={parentRef}
// 			style={{
// 				height: `500px`,
// 				overflow: "auto",
// 				marginTop: "16px",
// 			}}
// 		>
// 			<Box
// 				style={{
// 					height: `${rowVirtualizer.getTotalSize()}px`,
// 					width: "100%",
// 					position: "relative",
// 					display: "flex",
// 					flexDirection: "column",
// 					gap: 10,
// 				}}
// 			>
// 				{rowVirtualizer.getVirtualItems().map((virtualItem) => {
// 					// const n = 44*virtualItem.index;
// 					const isLoaderRow = virtualItem.index >= notificationsData.length;
// 					if (isLoaderRow) {
// 						return (
// 							<Box
// 								key={virtualItem.index}
// 								style={{
// 									position: "absolute",
// 									top: 0,
// 									left: 0,
// 									transform: `translateY(${virtualItem.start}px)`,
// 									// zIndex: 50
// 								}}
// 							>
// 								<Loader />
// 							</Box>
// 						);
// 					}
// 					return (
// 						<Row
// 							key={virtualItem.key}
// 							virtualItem={virtualItem}
// 							notificationData={notificationsData[virtualItem.index]}
// 						/>
// 					);
// 				})}
// 			</Box>
// 		</Box>
// 	);
// };

// export default memo(Notification);


import { useVirtualizer } from "@tanstack/react-virtual";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import { Loader } from "../../components/Loader.tsx";
import Box from "../../styled/styled.tsx";
import { notificationsData } from "./data.ts";
import Row from "./Row.tsx";

interface NotificationProps {
	id: string;
	name: string;
	time: string;
	active: boolean;
}

const CHUNK_SIZE = 10;
const FETCH_DELAY = 1000;

const Notification = () => {
	const parentRef = useRef<HTMLDivElement>(null);
	const [items, setItems] = useState<NotificationProps[]>([]);
	const [loading, setLoading] = useState(false);
	const [hasMore, setHasMore] = useState(true);

	const fetchChunk = useCallback(() => {
		setLoading(true);
		setTimeout(() => {
			setItems((prev) => {
				const nextChunk = notificationsData.slice(prev.length, prev.length + CHUNK_SIZE);
				if (prev.length + nextChunk.length >= notificationsData.length) {
					setHasMore(false);
				}
				return [...prev, ...nextChunk];
			});
			setLoading(false);
		}, FETCH_DELAY);
	}, []);

	useEffect(() => {
		fetchChunk();
	}, [fetchChunk]);

	const rowVirtualizer = useVirtualizer({
		count: items.length + (loading || hasMore ? 1 : 0),
		getScrollElement: () => parentRef.current,
		estimateSize: () => 60,
		overscan: 4,
		gap: 14,
	});

	const virtualItems = rowVirtualizer.getVirtualItems();
	const lastItem = virtualItems[virtualItems.length - 1];


	useEffect(() => {
		if (!lastItem) return;	
		const isLoaderRow = lastItem.index >= items.length;
		if (isLoaderRow && hasMore && !loading) {
			fetchChunk();
		}
	}, [lastItem, items.length, hasMore, loading, fetchChunk]);

	return (
		<Box
			ref={parentRef}
			style={{
				height: "500px",
				overflow: "auto",
				marginTop: "16px",
			}}
		>
			<Box
				style={{
					height: `${rowVirtualizer.getTotalSize()}px`,
					width: "100%",
					position: "relative",
				}}
			>
				{virtualItems.map((virtualItem) => {
					const isLoaderRow = virtualItem.index >= items.length;
					if (isLoaderRow) {
						return (
							<Box
								key={virtualItem.key}
								style={{
									position: "absolute",
									top: 0,
									left: 0,
									width: "100%",
									height: virtualItem.size,
									transform: `translateY(${virtualItem.start}px)`,
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
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
							notificationData={items[virtualItem.index]}
						/>
					);
				})}
			</Box>
		</Box>
	);
};

export default memo(Notification);