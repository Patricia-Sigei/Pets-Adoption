import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-green-600 p-4 text-white flex justify-between">
      <h1 className="text-xl font-bold">Pet Adoption</h1>
      <div>
        <Link to="/" className="mx-2">Home</Link>
        <Link to="/pets" className="mx-2">Find a Pet</Link>
        <Link to="/adopt" className="mx-2">Adoption Info</Link>
      </div>
    </nav>
  );
};

export default Navbar;