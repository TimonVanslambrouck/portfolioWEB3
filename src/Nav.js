import './Nav.css'
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function Nav() {
  let location = useLocation().pathname;
  return (
    <div className="nav">
      <motion.h1 whileHover={{ scale: 0.9 }}>Timon Vanslambrouck</motion.h1>
      <ul>
        <li><a className={`${location === "/" ? "active" : "notActive"}`} href="/"><motion.p whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}>Home</motion.p></a></li>
        <li><a className={`${location === "/contact" ? "active" : "notActive"}`} href="/contact"><motion.p whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}>Contact</motion.p></a></li>
      </ul>
    </div>
  )
}

export default Nav;