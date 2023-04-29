import { CiGrid41 } from 'react-icons/ci';
import '../styles/menu.css';
const MenuBar = () => {
  return (
    <nav>
      <h1 className="logo">
        <a href="#">Notes</a>
      </h1>
      <form action="">
        <label htmlFor="search"></label>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search your notes"
        />
      </form>
      <CiGrid41 />
    </nav>
  );
};

export default MenuBar;
