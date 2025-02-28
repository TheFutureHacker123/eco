<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    public function run()
    {
        Product::create([
            'name' => 'Smartphone',
            'description' => 'Latest smartphone model',
            'price' => 499.99,
            'category_id' => 1, // Electronics
            'seller_id' => 2, // Seller User
            'stock_quantity' => 100,
            'image' => 'smartphone.jpg',
        ]);

        Product::create([
            'name' => 'Laptop',
            'description' => 'High-performance laptop',
            'price' => 999.99,
            'category_id' => 1, // Electronics
            'seller_id' => 2, // Seller User
            'stock_quantity' => 50,
            'image' => 'laptop.jpg',
        ]);

        Product::create([
            'name' => 'T-Shirt',
            'description' => 'Cotton T-Shirt',
            'price' => 19.99,
            'category_id' => 2, // Clothing
            'seller_id' => 2, // Seller User
            'stock_quantity' => 200,
            'image' => 'tshirt.jpg',
        ]);
    }
}