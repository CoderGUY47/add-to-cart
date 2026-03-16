export const CART = [
  {
    id: 1,
    title: "Sony WH-1000XM5 Wireless Headphones",
    images: [
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800&h=800&fit=crop&q=80",
      "https://images.unsplash.com/photo-1585386959984-a41552231658?w=800&h=800&fit=crop&q=80",
    ],
    category: "Electronics",
    brand: "Sony",
    availabilityStatus: "In Stock",
    isSelected: true,
    isWishlisted: false,
    stock: 65,
    ratings: 4.8,
    price: 399.99,
    discount: 10,
    quantity: 1,
  },
  {
    id: 2,
    title: "Apple Watch Series 9",
    images: [
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&h=800&fit=crop&q=80",
      "https://images.unsplash.com/photo-1510017803434-a899398421b3?w=800&h=800&fit=crop&q=80",
    ],
    category: "Wearables",
    brand: "Apple",
    availabilityStatus: "In Stock",
    isSelected: true,
    isWishlisted: false,
    stock: 40,
    ratings: 4.7,
    price: 429.99,
    discount: 7,
    quantity: 1,
  },
  {
    id: 3,
    title: "Nike Air Max Sneakers",
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=800&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&h=800&fit=crop&q=80",
    ],
    category: "Fashion",
    brand: "Nike",
    availabilityStatus: "In Stock",
    isSelected: true,
    isWishlisted: false,
    stock: 110,
    ratings: 4.6,
    price: 150.0,
    discount: 15,
    quantity: 1,
  },
  {
    id: 4,
    title: "Dell XPS 13 Laptop",
    images: [
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&h=800&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&h=800&fit=crop&q=80",
    ],
    category: "Computers",
    brand: "Dell",
    availabilityStatus: "Limited Stock",
    isSelected: true,
    isWishlisted: false,
    stock: 20,
    ratings: 4.5,
    price: 1199.99,
    discount: 12,
    quantity: 1,
  },
  {
    id: 5,
    title: "Samsung 4K Smart TV",
    images: [
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&h=800&fit=crop&q=80",
      "https://images.unsplash.com/photo-1601944179066-29786cb9d32a?w=800&h=800&fit=crop&q=80",
    ],
    category: "Home Entertainment",
    brand: "Samsung",
    availabilityStatus: "Limited Stock",
    isSelected: true,
    isWishlisted: false,
    stock: 12,
    ratings: 4.4,
    price: 699.99,
    discount: 18,
    quantity: 1,
  },
];

export const SHIPPING_METHODS = ["standard", "free", "express"];

export const SHIPPING_RATES = {
  standard: 5.0,
  free: 0.0,
  express: 15.0,
};

export const PROMOTIONS = [
  {
    code: "SAVE20",
    type: "PERCENT",
    value: 20,
    active: true,
    minSpend: 500,
    expiryDate: "2026-12-31",
  },
  {
    code: "FLAT100",
    type: "FIXED",
    value: 100,
    active: true,
    minSpend: 1000,
    expiryDate: "2026-06-01",
  },
  {
    code: "EXPIRED50",
    type: "PERCENT",
    value: 50,
    active: false,
    minSpend: 100,
    expiryDate: "2025-01-01",
  },
];

export const TAX_RATE = 8;
