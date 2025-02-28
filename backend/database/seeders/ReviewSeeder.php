<?php

namespace Database\Seeders;

use App\Models\Review;
use Illuminate\Database\Seeder;

class ReviewSeeder extends Seeder
{
    public function run()
    {
        Review::create([
            'product_id' => 1, // Smartphone
            'user_id' => 3, // Customer User
            'rating' => 5,
            'comment' => 'Great product!',
        ]);

        Review::create([
            'product_id' => 3, // T-Shirt
            'user_id' => 3, // Customer User
            'rating' => 4,
            'comment' => 'Good quality, but a bit expensive.',
        ]);
    }
}