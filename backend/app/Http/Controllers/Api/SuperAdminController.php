<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class SuperAdminController extends Controller
{
    // Manage admin accounts
    public function manageAdmins(Request $request)
    {
        $admins = User::where('role', 'admin')->get();
        return response()->json($admins, 200);
    }

    // Update system settings
    public function updateSystemSettings(Request $request)
    {
        // Logic to update system settings
        return response()->json(['message' => 'System settings updated successfully'], 200);
    }
}