// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/nutrition">Nutrition Info</Link>
//         </li>
//         <li>
//           <Link to="/plans">Nutrition Plans</Link>
//         </li>
//         <li>
//           <Link to="/login">Login</Link>
//         </li>
//         <li>
//           <Link to="/questionnaire">Questionnaire</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

// Navbar.js
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <img src="DietCo.png" alt="Brand Logo" className="brand-logo" />
      </Link>
    </div>
  );
}

export default Navbar;
