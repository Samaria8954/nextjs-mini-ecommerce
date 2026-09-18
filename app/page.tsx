import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
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

      <main>

        <section className="hero">

          <div className="hero-content">

            <p className="small-title">
              WELCOME TO MINISTORE
            </p>

            <h1>
              Find Products
              <br />
              You’ll Love.
            </h1>

            <p className="hero-text">
              Discover quality products at simple prices.
              Everything you need in one place.
            </p>

            <Link href="/products" className="shop-btn">
              Shop Now →
            </Link>

          </div>

          <div className="hero-image">
            <Image
              src="/products/commerrce.jpg"
              alt="Featured Product"
              fill
              priority
              sizes="360px"
            />
          </div>
        </section>

      </main>
    </>
  );
}