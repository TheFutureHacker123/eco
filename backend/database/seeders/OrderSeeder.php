<?php

namespace Database\Seeders;

use App\Models\Order;
use Illuminate\Database\Seeder;

class OrderSeeder extends Seeder
{
    public function run()
    {
        Order::create([
            'user_id' => 3, // Customer User
            'total_amount' => 519.97, // (2 x Smartphone) + (1 x T-Shirt)
            'status' => 'pending',
            'shipping_address' => '789 Customer Road',
        ]);
    }
}