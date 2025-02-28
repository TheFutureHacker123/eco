<?php

namespace Database\Seeders;

use App\Models\Notification;
use Illuminate\Database\Seeder;

class NotificationSeeder extends Seeder
{
    public function run()
    {
        Notification::create([
            'user_id' => 3, // Customer User
            'message' => 'Your order has been placed successfully.',
            'is_read' => false,
        ]);

        Notification::create([
            'user_id' => 2, // Seller User
            'message' => 'You have a new order.',
            'is_read' => false,
        ]);
    }
}