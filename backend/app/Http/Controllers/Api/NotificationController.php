<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Notification;

class NotificationController extends Controller
{
    // Get all notifications for the authenticated user
    public function index(Request $request)
    {
        $notifications = $request->user()->notifications;
        return response()->json($notifications, 200);
    }

    // Mark a notification as read
    public function markAsRead($id)
    {
        $notification = Notification::find($id);
        if (!$notification) {
            return response()->json(['message' => 'Notification not found'], 404);
        }

        $notification->update(['read_at' => now()]);
        return response()->json($notification, 200);
    }
}