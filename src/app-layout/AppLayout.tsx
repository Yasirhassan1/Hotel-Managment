import { Outlet } from "react-router";

const AppLayout = () => {
	return (
		<div
			style={{
				display: "flex",
				gap: "10px",
			}}
		>
			<aside
				style={{
					width: "200px",
					backgroundColor: "#b2b2b2",
					minHeight: "100vh",
				}}
			>
                sidebar
            </aside>
			<main>
				<Outlet />
			</main>
		</div>
	);
};

export default AppLayout;
