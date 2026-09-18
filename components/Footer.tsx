import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>🛍️ MiniStore</h2>
          <p>
            Simple products, simple shopping.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/products">Categories</Link>
        </div>

        <div className="footer-info">
          <h3>Contact</h3>
          <p>support@ministore.com</p>
          <p>+92 300 1234567</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 MiniStore. All rights reserved.</p>
      </div>
    </footer>
  );
}