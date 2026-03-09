import Logo from "./components/Logo";
import Main from "./components/Main";
import Tabs from "./components/Tabs";

export default function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      {/* change below to box-border to get rid of the outline */}
      <div className="relative border-2 border-solid w-278 h-202.75">
        <Logo />
        <Tabs className="absolute top-4 right-8" />
        <Main />    
      </div>
    </div>
  );
}
