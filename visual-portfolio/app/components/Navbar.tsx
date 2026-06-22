const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-6">
      <h1 className="font-bold text-xl">OK</h1>

      <ul className="flex gap-8 text-sm">
        <li>Home</li>
        <li>About</li>
        <li>Portfolio</li>
        <li>Exhibitions</li>
        <li>Contact</li>
      </ul>

      <p className="text-sm">📍 Sala Canal</p>
    </nav>
  );
};

export default Navbar;