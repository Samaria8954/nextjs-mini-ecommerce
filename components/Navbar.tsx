import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">

        <Link href="/" className="logo">
          🛍️ MiniStore
        </Link>

        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/products">Categories</Link>
        </div>

        <div className="nav-icons">
          <button>♡</button>
          <button>🛒</button>
        </div>

      </div>
    </nav>
  );
}