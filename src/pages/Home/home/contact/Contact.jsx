import { Link } from "react-router-dom";


const Contact = () => {
    return (
        <div className='bg-[#111A28] text-white grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-48'>
        {/* 1 */}
         <div className="flex flex-col">
<p>I am interested in working with any company that thinks my skill <br/>
 will be helpful for them. If you are looking for someone like me,<br/>
 please let me know. Or you can just 'say hi' to me.</p>

<div>
<button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg  bg-green-500 border-0 text-white mt-10">Contact Me</button>
</div>

         </div> 

          {/*2  */}
          <div className="flex flex-col">
         <div className="mb-2">
         <p className='text-3xl font-semibold'>
          Email          
          </p>
          <p>howtolearn108@gmail.com <span className="font-thin">(Recommended)</span></p>
         </div>


         <div className="mb-2">
         <p className='text-3xl font-semibold'>
         Skype          
          </p>
          <p>Not Availaable Now<span className="font-thin">(Always Available)</span></p>
         </div>


         <div className="mb-2">
         <p className='text-3xl font-semibold'>
         Social        
          </p>
          <p><Link target=" " to={`https://www.facebook.com/mohammadSaiful4061470?mibextid=ZbWKwL`}>Facebook</Link> <span className="font-thin">(Slow response)</span></p>
         </div>


         <div className="mb-2">
         <p className='text-3xl font-semibold'>
         Address       
          </p>
          <p>Chittagong, Bangladesh</p>
         </div>

          </div>

        </div>
    );
};

export default Contact;