import { Outlet } from "react-router-dom";

interface AppLayoutProps {}
const AppLayout = ({}: AppLayoutProps) => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export { AppLayout };
