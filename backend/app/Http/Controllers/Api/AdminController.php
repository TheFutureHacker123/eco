<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class AdminController extends Controller
{
    // Approve a product listing
    public function approveProduct($productId)
    {
        // Logic to approve a product
        return response()->json(['message' => 'Product approved successfully'], 200);
    }

    // Manage user roles
    public function updateUserRole(Request $request, $userId)
    {
        $request->validate([
            'role' => 'required|in:customer,seller,admin,super_admin',
        ]);

        $user = User::findOrFail($userId);
        $user->update(['role' => $request->role]);

        return response()->json(['message' => 'User role updated successfully', 'user' => $user], 200);
    }
}