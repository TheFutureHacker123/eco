<?php

namespace Database\Seeders;

use App\Models\CartItem;
use Illuminate\Database\Seeder;

class CartItemSeeder extends Seeder
{
    public function run()
    {
        CartItem::create([
            'cart_id' => 1, // Cart for Customer User
            'product_id' => 1, // Smartphone
            'quantity' => 2,
        ]);

        CartItem::create([
            'cart_id' => 1, // Cart for Customer User
            'product_id' => 3, // T-Shirt
            'quantity' => 1,
        ]);
    }
}