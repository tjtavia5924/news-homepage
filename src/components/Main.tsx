import contents from "../contents.json";

export default function Main() {
  return (
    <>
    <div className="mt-[64px]">
    <img src={contents.image} alt="main image" className='w-[730px] h-[300px]'/>
    <div>{contents.description}</div>
    </div>
    </>
  )
}
