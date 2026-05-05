import { navLinks } from "../Constants/index.js";

const NavBar = () => {
  return (
    <header>
      <nav>
        <img src="/logo.svg" alt="apple_logo" className="ml-5" />
        <ul>
          {navLinks.map(({ label }) => (
            <li key={label}>
              <a href={label}>{label}</a>
            </li>
          ))}
        </ul>
        <div className="flex-center gap-3">
          <button>
            <img src="/search.svg" alt="search" className="mr-5" />
          </button>
          <button>
            <img src="/cart.svg" alt="cart" className="mr-5" />
          </button>
        </div>
      </nav>
    </header>
  )
}

export default NavBar;