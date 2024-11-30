import { Outlet } from "react-router-dom";
import Topbar from "components/Topbar";

export default function TopbarLayout() {
  return (
    <>
      <Topbar />
      <Outlet />
    </>
  );
}
