<?php

namespace Database\Seeders;

use App\Models\Cart;
use Illuminate\Database\Seeder;

class CartSeeder extends Seeder
{
    public function run()
    {
        Cart::create([
            'user_id' => 3, // Customer User
        ]);
    }
}