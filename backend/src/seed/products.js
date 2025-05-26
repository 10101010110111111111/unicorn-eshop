import mongoose from "mongoose";
import { config } from "dotenv";
import { Product } from "../models/product.model.js";

config();

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    await Product.deleteMany();

    await Product.insertMany([
      {
        name: "Nike Air Max 95",
        price: 150,
        imageUrl: "https://static.ftshp.digital/img/p/8/4/9/3/4/9/849349.jpg",
        description: "Comfortable and stylish running shoes.",
        category: "Footwear",
        brand: "Nike",
        color: "Green",
        size: "42",
        gender: "Unisex",
        quantity: 100,
        rating: 4.5,
      },
      {
        name: "Adidas Ultraboost 1.0",
        price: 180,
        imageUrl: "https://static.ftshp.digital/img/p/8/1/6/1/3/5/816135.jpg",
        description: "High-performance running shoes with great support.",
        category: "Footwear",
        brand: "Adidas",
        color: "Black",
        size: "43",
        gender: "Unisex",
        quantity: 80,
        rating: 4.7,
      },
      {
        name: "Converse Chuck Taylor All Star",
        price: 65,
        imageUrl:
          "https://static.ftshp.digital/img/p/4/2/4/2/3/4/424234-full_product.jpg",
        description: "Iconic high-top sneakers with a timeless design.",
        category: "Footwear",
        brand: "Converse",
        color: "White",
        size: "44",
        gender: "Unisex",
        quantity: 90,
        rating: 4.6,
      },
      {
        name: "Adidas Samba OG",
        price: 100,
        imageUrl:
          "https://static.ftshp.digital/img/p/8/2/2/5/0/2/822502-full_product.jpg",
        description: "Classic indoor sneakers reimagined for everyday wear.",
        category: "Footwear",
        brand: "Adidas",
        color: "Black",
        size: "42",
        gender: "Unisex",
        quantity: 60,
        rating: 4.8,
      },
      {
        name: "Nike Air Force 1 '07",
        price: 110,
        imageUrl: "https://static.ftshp.digital/img/p/7/5/9/2/6/5/759265.jpg",
        description: "Legendary style with premium leather and comfort.",
        category: "Footwear",
        brand: "Nike",
        color: "White",
        size: "43",
        gender: "Men",
        quantity: 120,
        rating: 4.9,
      },
      {
        name: "New Balance 550",
        price: 130,
        imageUrl:
          "https://static.ftshp.digital/img/p/1/3/5/3/0/2/8/1353028-full_product.jpg",
        description: "Retro basketball style made modern.",
        category: "Footwear",
        brand: "New Balance",
        color: "White",
        size: "42",
        gender: "Women",
        quantity: 55,
        rating: 4.7,
      },
      {
        name: "Puma RS-X Efekt",
        price: 90,
        imageUrl:
          "https://static.ftshp.digital/img/p/1/3/6/6/0/7/5/1366075-full_product.jpg",
        description: "Chunky sneakers with futuristic styling.",
        category: "Footwear",
        brand: "Puma",
        color: "Green",
        size: "44",
        gender: "Unisex",
        quantity: 70,
        rating: 4.4,
      },
      {
        name: "Vans Old Skool",
        price: 60,
        imageUrl:
          "https://static.ftshp.digital/img/p/1/3/3/6/7/1/4/1336714-full_product.jpg",
        description: "Classic skate shoe with durable suede and canvas.",
        category: "Footwear",
        brand: "Vans",
        color: "White",
        size: "43",
        gender: "Unisex",
        quantity: 85,
        rating: 4.6,
      },
      {
        name: "Reebok Club C 85",
        price: 75,
        imageUrl:
          "https://static.ftshp.digital/img/p/1/3/5/9/9/1/6/1359916-full_product.jpg",
        description: "Clean and timeless tennis-inspired silhouette.",
        category: "Footwear",
        brand: "Reebok",
        color: "Black",
        size: "42",
        gender: "Men",
        quantity: 65,
        rating: 4.5,
      },
      {
        name: "Salomon XT-6",
        price: 180,
        imageUrl:
          "https://static.ftshp.digital/img/p/1/0/7/2/1/2/9/1072129-full_product.jpg",
        description: "Performance trail runner turned fashion staple.",
        category: "Footwear",
        brand: "Salomon",
        color: "Black",
        size: "43",
        gender: "Unisex",
        quantity: 40,
        rating: 4.9,
      },
      {
        name: "Nike Dunk Low Retro",
        price: 120,
        imageUrl: "https://static.ftshp.digital/img/p/6/7/5/0/1/0/675010.jpg",
        description: "Classic '80s basketball style revived.",
        category: "Footwear",
        brand: "Nike",
        color: "Black/White",
        size: "44",
        gender: "Unisex",
        quantity: 100,
        rating: 4.8,
      },
      {
        name: "New Balance 740 V2",
        price: 220,
        imageUrl:
          "https://static.ftshp.digital/img/p/1/3/4/1/9/3/4/1341934.jpg",
        description: "High-performance running shoes with great support.",
        category: "Footwear",
        brand: "New Balance",
        color: "Pink",
        size: "38",
        gender: "Women",
        quantity: 30,
        rating: 4.9,
      },
      {
        name: "Nike ZoomX Vaporfly Next%3",
        price: 250,
        imageUrl:
          "https://static.ftshp.digital/img/p/1/3/6/8/5/0/5/1368505.jpg",
        description: "Elite racing shoe for speed and efficiency.",
        category: "Footwear",
        brand: "Nike",
        color: "Pink",
        size: "42",
        gender: "Unisex",
        quantity: 20,
        rating: 4.9,
      },
      {
        name: "ASICS Gel-Kayano 20",
        price: 160,
        imageUrl:
          "https://static.ftshp.digital/img/p/1/4/5/4/9/5/3/1454953.jpg",
        description: "Stable and cushioned long-distance runner.",
        category: "Footwear",
        brand: "ASICS",
        color: "Green",
        size: "43",
        gender: "Men",
        quantity: 35,
        rating: 4.7,
      },
      {
        name: "Timberland Premium 6-Inch Boot",
        price: 200,
        imageUrl: "https://static.ftshp.digital/img/p/4/3/5/1/7/2/435172.jpg",
        description: "Iconic waterproof boots for rugged style.",
        category: "Footwear",
        brand: "Timberland",
        color: "Wheat",
        size: "44",
        gender: "Men",
        quantity: 40,
        rating: 4.8,
      },
      {
        name: "Crocs Classic Clog",
        price: 45,
        imageUrl: "https://static.ftshp.digital/img/p/9/3/9/5/3/7/939537.jpg",
        description: "Iconic comfort clog loved worldwide.",
        category: "Footwear",
        brand: "Crocs",
        color: "Black",
        size: "42",
        gender: "Unisex",
        quantity: 100,
        rating: 4.4,
      },
      {
        name: "Dr. Martens 1460",
        price: 170,
        imageUrl:
          "https://static.ftshp.digital/img/p/4/2/4/5/1/9/424519-full_product.jpg",
        description: "The original 8-eye leather boot since 1960.",
        category: "Footwear",
        brand: "Dr. Martens",
        color: "Black",
        size: "43",
        gender: "Men",
        quantity: 30,
        rating: 4.7,
      },
      {
        name: "Birkenstock Arizona",
        price: 100,
        imageUrl:
          "https://static.ftshp.digital/img/p/9/3/8/7/3/4/938734-full_product.jpg",
        description: "Two-strap sandal with legendary footbed.",
        category: "Footwear",
        brand: "Birkenstock",
        color: "Purple",
        size: "40",
        gender: "Women",
        quantity: 45,
        rating: 4.6,
      },
    ]);

    console.log("✅ Footwear database seeded successfully!");
  } catch (error) {
    console.error("❌ Error seeding database:", error);
  } finally {
    await mongoose.connection.close();
  }
};

seedDatabase();
