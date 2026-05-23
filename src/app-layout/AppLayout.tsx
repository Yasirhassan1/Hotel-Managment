import { Outlet } from "react-router";
const AppLayout = () => {
  return (
    <div style={{
        display: "flex",
        gap: "10px"
        }}>
        <aside style={{
            width: "300px",
            backgroundColor: "green",
            minHeight: "100vh"
        }}>
          
          
        </aside>
          <main>
              
                <Outlet/>
            </main>

    </div>
  );
};

export default AppLayout;