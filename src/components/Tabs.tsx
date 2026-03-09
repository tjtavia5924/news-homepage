import contents from "../contents.json";

type TabsProps = {
  className?: string;
};

export default function Tabs({ className = "" }: TabsProps) {
  return (
    <div className={`flex flex-row gap-6 text-sm font-bold text-gray-500 ${className}`}>
      {contents.tabs.map((tab) => (
        <div key={tab.id} className="hover:text-custom-soft-red cursor-pointer">{tab.title}</div>
      ))}
    </div>
  );
}
