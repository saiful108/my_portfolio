import { Link } from "react-router-dom";


const Navbar = () => {
    const navItem=<>
        <li className="text-2xl p-4"><Link to=''>About</Link></li>
        <li className="text-2xl p-4"><Link>Skill</Link></li>
        <li className="text-2xl p-4"><Link>Contact</Link></li>
        <li className="text-2xl p-4"><Link>Resume</Link></li>
     
      
    </>
    return (
        <div className='navbar bg-[#111A28]'>
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-slate-950 rounded-box w-52">
       {/* navitem */}
       {navItem}
      </ul>
    </div>
   {/* logo */}
   <img className="w-24" src="https://i.ibb.co/7vw6tmN/White-and-Black-Hexagon-Hipster-Logo-removebg-preview.png" alt="logo"/>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {/* navitem */}
      {navItem}
    </ul>
  </div>
  {/* <div className="navbar-end">
   
  </div> */}
</div>
    );
};

export default Navbar;