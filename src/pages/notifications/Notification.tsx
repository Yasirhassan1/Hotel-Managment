import { memo } from "react";
import { List } from "react-window";
import { notificationsData } from "./data.ts";
import RowComponent from "./RowComponent.tsx";

const Notification = () => {

	return (
      
		<List
			style={{
				marginTop: "20px",
				display: "flex",
                borderRadius: 10,
                padding: 4,
				flexDirection: "column",
				gap: 9,
			}}
            
			defaultHeight={20} 
			rowCount={notificationsData.length} 
			rowHeight={50} 
			rowComponent={RowComponent}
			rowProps={{ notifications: notificationsData }}
		></List>
        
	);
};

export default memo(Notification);
