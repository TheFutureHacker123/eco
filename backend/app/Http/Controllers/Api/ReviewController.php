<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Review;

class ReviewController extends Controller
{
    // Create a new review
    public function store(Request $request)
    {
        $request->validate([
            'product_id' => 'required|exists:products,id',
            'rating' => 'required|integer|min:1|max:5',
            'comment' => 'nullable|string',
        ]);

        $review = $request->user()->reviews()->create($request->all());
        return response()->json($review, 201);
    }

    // Get reviews for a specific product
    public function show($productId)
    {
        $reviews = Review::where('product_id', $productId)->get();
        return response()->json($reviews, 200);
    }
}