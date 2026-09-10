import { Link,Outlet } from "react-router-dom";
export default function Dashboard() {
  return (
    <>
      <nav>
        <Link to="profile">Profile</Link>
        <Link to="settings">Settings</Link>
      </nav>
      <h1>Dashboard</h1>
      <Outlet/>
    </>
  )
}