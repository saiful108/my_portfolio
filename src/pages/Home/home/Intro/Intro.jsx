

const Intro = () => {
    return (
        <div className='bg-[#111A28] text-white grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  mt-48'>
        {/* 1 */}
         <div className="flex flex-col">
<p className="leading-9">
Hello there! I'm Saiful Islam, a driven Front-end developer with a passion for <br/>
 crafting innovative solutions. My expertise spans across web and at the heart <br/>
 of it all lies my love for JavaScript. I thrive on harnessing the power of <br/>
 JavaScript to create dynamic and accessible experiences, making the web more <br/>
 inclusive and open to all.I've honed my skills and am now eagerly seeking <br/>
 exciting job opportunities that align with my interests. Let's collaborate <br/>
 and bring your ideas to life!
</p>

<div className="flex gap-5 mt-8">
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-green-500 border-0 text-white">Get Resume</button>
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-outline btn-accent">My Skills</button>

        </div>

         </div> 

          {/*2  */}
          <div className="flex justify-end">
         
        <img className="sm:w-24  rounded-xl md:w-96 lg:w-96 lg:rounded-xl " src="https://i.ibb.co/YB8DXmz/saiful.jpg"/>
          </div>

        </div>
    );
};

export default Intro;