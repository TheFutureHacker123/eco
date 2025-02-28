<?php

namespace Database\Seeders;

use App\Models\Payment;
use Illuminate\Database\Seeder;

class PaymentSeeder extends Seeder
{
    public function run()
    {
        Payment::create([
            'order_id' => 1, // Order for Customer User
            'amount' => 519.97,
            'payment_method' => 'chappa',
            'payment_status' => 'completed',
        ]);
    }
}