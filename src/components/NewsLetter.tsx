import { useState } from 'react';


type FormValues = {
    email: string;
  };

const NewsLetter = ()=>{
    const [formValues, setFormValues] = useState<FormValues>({email: '',});
      const [isSubmitting, setIsSubmitting] = useState(false);
      const [isSubmitted, setIsSubmitted] = useState(false);
    
      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
    
        try {
          const response = await fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
                'form-name': 'Newsletter', // This is the name of your Netlify form
                ...formValues,
              }).toString(),
          });
    
          if (response.ok) {
            setIsSubmitted(true);
          } else {
            console.error('Form submission failed');
          }
        } catch (error) {
          console.error('Form submission failed', error);
        }
    
        setIsSubmitting(false);
      };
    
      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
      };

    return(
        <div className=" bg-[#0A0F20] px-[25px] py-[120px] md:p-[100px] flex flex-col items-center" id="Contact">
            <div className="bg-[#0D1631] rounded-[48px] w-full md:max-w-[956px] h-[400px] md:max-h-[348px] p-5 md:p-14 flex flex-col justify-center items-center ">
                <h4 className="text-[24px] mb-3 md:text-[48px] font-bold text-[#fff]">Sign Up for Newsletter</h4>
                <p className="text-[12px] md:text-[16px] text-[#D9D9D9] font-medium text-center leading-[22px]">Stay up-to-date with Tia, subscribe to our newsletter</p>
                <form className="mt-[40px] w-[95%] md:w-[80%] bg-[transparent]" onSubmit={handleSubmit}   data-netlify="true" >
                    <div className="gradient-button p-[2px] h-[72px]  rounded-[64px] flex items-center">
                     <div className="relative rounded-[64px] flex bg-[#0D1631] w-full">
                        <input type="hidden" name="form-name" value="Newsletter" />
                        <input   
                        type="email" 
                        value={formValues.email} 
                        onChange={handleInputChange}
                        name="email"
                        placeholder="Enter your email address"
                        className=" text-[16px] h-[71px] bg-[transparent] w-full focus:outline-none pl-10"
                         />
                        <div className="absolute right-[12px] h-full flex items-center ">
                        <button type='submit' disabled={isSubmitting} className="w-[120px] hidden md:flex  md:w-[179px] h-[48px] justify-center items-center rounded-[64px]  text-[#fff] text-[14px] font-normal leading-[18px] px-[30px] py-[21px] gradient-button">
                           {isSubmitted ? 'Subscribed' : isSubmitting ? 'Submitting...' : 'Subscribe'}
                        </button>
                        
                        </div>
                    </div>
                    </div>
                    <button type='submit' disabled={isSubmitting} className="w-[100%] mt-[16px] md:hidden h-[56px] flex justify-center items-center rounded-[64px]  text-[#fff] text-[14px] font-normal leading-[18px] px-[30px] py-[21px] gradient-button">
                        {isSubmitted ? 'Thank you!' : isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                 
               </form>
            </div>
        </div>
    )
}

export default NewsLetter;