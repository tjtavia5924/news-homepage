import React from "react";
import Logo from "./components/Logo";
import Tabs from "./components/Tabs";

export default function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      {/* change below to box-border to get rid of the outline */}
      <div className="border-2 border-solid w-278 h-202.75">
        <div className="flex">
          <Logo />
          <Tabs />
        </div>
      </div>
    </div>
  );
}
