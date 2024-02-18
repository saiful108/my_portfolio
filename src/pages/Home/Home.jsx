import Intro from "./home/Intro/Intro";
import Contact from "./home/contact/Contact";
import Skills from "./home/skills/Skills";



const Home = () => {
    return (
        <>
        <div>
        <div>
        <h1 className="lg:text-green-500 text-2xl sm:text-md md:text-lg font-black">Hello! I am</h1>
        <h1 className="lg:text-8xl sm:text-md md:text-lg font-medium py-6">Saiful Islam</h1>
        <h1 className="text-green-500 text-2xl font-medium ">Front-End Developer</h1>
        <div className="flex gap-5 mt-8">
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-green-500 border-0 text-white">Get Resume</button>
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-outline btn-accent">About Me</button>

        </div>
        </div>


        </div>
        <Intro></Intro>
        <Contact></Contact>
        <Skills></Skills>
        </>
    );
};

export default Home;