import { Link } from "react-router-dom";

Link;
const Navbar = () => {
  return (
    <div className="p-5 bg-green-300">
      <ul className="flex  justify-end space-x-10">
        <li>
          {/*  <a href="/">Home</a> */}
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          {/* <a href="/about">About</a> */}
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          {/* <a href="/menu">Menu</a> */}
          <Link to={"/menu"}>Menu</Link>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
