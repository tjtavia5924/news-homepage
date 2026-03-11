import contents from "../contents.json";

export default function Main() {
  return (
    <>
    <div className="mt-[64px]">
    <img src={contents.image} alt="main image" className='w-[730px] h-[300px]'/>
      <div className="w-[730px] h-[182px] mt-[24px] flex">  
      <div className="font-extrabold text-custom-very-dark-blue text-[54px] w-[350px]">    
      {contents.title}
      </div>
      <div className="w-[380px] ml-[32px]">
      {contents.description}
      </div>
      </div>
    </div>
    </>
  )
}
