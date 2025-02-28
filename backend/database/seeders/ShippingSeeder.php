<?php

namespace Database\Seeders;

use App\Models\Shipping;
use Illuminate\Database\Seeder;

class ShippingSeeder extends Seeder
{
    public function run()
    {
        Shipping::create([
            'order_id' => 1, // Order for Customer User
            'tracking_number' => 'SH123456789',
            'carrier' => 'DHL',
            'status' => 'pending', // pending, shipped, delivered
        ]);

    }
}