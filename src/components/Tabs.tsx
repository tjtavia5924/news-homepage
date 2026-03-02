import contents from "../contents.json";

export default function () {
  return (
    <div className="flex-row-reverse gap-6 text-sm font-bold text-gray-500">
      {contents.tabs.map((tab) => (
        <div key={tab.id}>{tab.title}</div>
      ))}
    </div>
  );
}
