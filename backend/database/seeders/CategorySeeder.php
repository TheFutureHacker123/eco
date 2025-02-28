<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    public function run()
    {
        Category::create(['name' => 'Electronics', 'description' => 'All electronic gadgets']);
        Category::create(['name' => 'Clothing', 'description' => 'Men\'s and women\'s clothing']);
        Category::create(['name' => 'Books', 'description' => 'Fiction and non-fiction books']);
    }
}