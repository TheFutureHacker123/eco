<?php

namespace Database\Seeders;

use App\Models\Message;
use Illuminate\Database\Seeder;

class MessageSeeder extends Seeder
{
    public function run()
    {
        Message::create([
            'sender_id' => 3, // Customer User
            'receiver_id' => 2, // Seller User
            'message_text' => 'When will my order be shipped?',
        ]);

        Message::create([
            'sender_id' => 2, // Seller User
            'receiver_id' => 3, // Customer User
            'message_text' => 'Your order will be shipped tomorrow.',
        ]);
    }
}