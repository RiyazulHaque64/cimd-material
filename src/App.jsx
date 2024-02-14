import { useState } from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  return (
    <>
      <Header setIsSidebarOpen={setIsSidebarOpen} isSidebarOpen={isSidebarOpen}/>
      <Sidebar isSidebarOpen={isSidebarOpen} SidebarWidth={"250px"} />
    </>
  );
}