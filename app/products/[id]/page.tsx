import FavoriteButton from "@/app/ui/favorite-button";
import Link from "next/link";
import Image from "next/image";
import { getProduct } from "@/lib/products";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = await getProduct(id);

  if (!product) {
    return (
      <main className="not-found">
        <h1>Product Not Found</h1>
        <Link href="/products">← Back to Products</Link>
      </main>
    );
  }

  return (
    <>
      

      {/* Product Detail */}

      <main className="product-detail-page">

        <Link href="/products" className="back-link">
          ← Back to Products
        </Link>

        <div className="product-detail">

          <div className="detail-image">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 750px) 100vw, 50vw"
            />
          </div>

          <div className="detail-content">

            <p className="product-category">
              {product.category}
            </p>

            <h1>{product.name}</h1>

            <p className="detail-rating">
              ⭐ {product.rating} ({product.reviews} reviews)
            </p>

            <p className="detail-price">
              Rs. {product.price.toLocaleString()}
            </p>

            <p className="detail-description">
              This is a quality {product.category.toLowerCase()} product
              designed for everyday use. Explore the product and discover
              its features and value.
            </p>

            <div className="detail-actions">
              <FavoriteButton />
              <button className="cart-btn">
                Add to Cart
              </button>
            </div>

          </div>

        </div>

      </main>
    </>
  );
}