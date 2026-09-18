import FavoriteButton from "@/app/ui/favorite-button";
import Image from "next/image";
import Link from "next/link";
import { getProducts } from "@/lib/products";


export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <>
      {/* Navbar */}

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

      {/* Products */}

      <main className="products-page">

        <div className="products-header">
          <div>
            <p className="small-title">OUR COLLECTION</p>

            <h1>Popular Products</h1>

            <p>
              Explore our collection of quality products.
            </p>
          </div>
        </div>

        <div className="products-grid">

          {products.map((product) => (
            <div className="product-card" key={product.id}>

              <div className="product-image">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 550px) 100vw, (max-width: 950px) 50vw, 25vw"
                />

               <FavoriteButton />
              </div>
              <div className="product-info">

                <p className="product-category">
                  {product.category}
                </p>

                <h2>{product.name}</h2>

                <p className="rating">
                  ⭐ {product.rating} ({product.reviews})
                </p>

                <div className="product-bottom">

                  <p className="product-price">
                    Rs. {product.price.toLocaleString()}
                  </p>

                  <Link
                    href={`/products/${product.id}`}
                    className="details-btn"
                  >
                    View →
                  </Link>

                </div>

              </div>

            </div>
          ))}

        </div>

      </main>
    </>
  );
}