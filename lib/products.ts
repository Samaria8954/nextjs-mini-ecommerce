const products = [
  {
    id: "1",
    name: "iPhone 15",
    category: "Mobile",
    price: 250000,
    rating: 4.8,
    reviews: 120,
    image: "/products/iphone.jpg",
  },
  {
    id: "2",
    name: "Samsung Galaxy S24",
    category: "Mobile",
    price: 220000,
    rating: 4.7,
    reviews: 95,
    image: "/products/samsung.jpg",
  },
  {
    id: "3",
    name: "HP Laptop",
    category: "Laptop",
    price: 150000,
    rating: 4.9,
    reviews: 85,
    image: "/products/laptop.jpg",
  },
  {
    id: "4",
    name: "Wireless Headphones",
    category: "Audio",
    price: 25000,
    rating: 4.6,
    reviews: 75,
    image: "/products/headphones.jpg",
  },
  
];

export async function getProducts() {
  return products;
}

export async function getProduct(id: string) {
  return products.find((product) => product.id === id);
}