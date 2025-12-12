import React from 'react';
import { Link } from 'react-router-dom';
import { PlusIcon } from "lucide-react";
import Logo from "../assets/notes_logo.svg";

const Navbar = () => {
  return (
    <header className="bg-base-300 border-b border-base-content/10">
      <div className="mx-auto max-w-6xl p-4">
        <div className="flex items-center justify-between">

          {/* LEFT SIDE → Logo + Title */}
          <div className="flex items-center gap-2">
            <img 
              src={Logo}   // your logo file from /public folder
              alt="Logo" 
              className="w-11 h-11 object-contain"
            />
            <h1 className="text-3xl font-bold text-primary text-green-500 font-mono tracking-tight">
              ThinkBoard
            </h1>
          </div>

          {/* RIGHT SIDE → Button */}
          <div className="flex items-center gap-4">
            <Link to="/create" className="btn bg-green-500 hover:bg-green-600 text-black border-none btn-primary flex items-center gap-2">
              <PlusIcon className="size-5" />
              <span>New Note</span>
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;



// import React from 'react';
// import { Link } from 'react-router-dom';
// import {PlusIcon} from "lucide-react";

// const Navbar = () => {
//   return (
//     <header className="bg-base-300 border-b border-base-content/10">
//       <div className="mx-auto max-w-6xl p-4">
//         <div className="flex items-center justify-between">
          
//           <h1 className="text-3xl font-bold text-primary font-mono tracking-tight">ThinkBoard</h1>
//           <div className="flex items-center gap-4">
//             <Link to={"/create"} className="btn btn-primary">
//               <PlusIcon className="size-5" />
//               <span>New Note</span>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </header>
//   )
// }

// export default Navbar
