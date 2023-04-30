
interface ButtonItemsProps {
    text: string;
  }
  

const Button: React.FC<ButtonItemsProps> = ({text})=>{
    return(
        <button className="w-[237px] h-[60px] mb-[56px] flex text-center justify-center rounded-[64px]  text-[#fff] text-[14px] font-normal leading-[18px] px-[40px] py-[21px] mr-6 ">
          {text}
        </button>
    )
}

export default Button;