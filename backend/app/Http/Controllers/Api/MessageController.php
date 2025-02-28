<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Message;

class MessageController extends Controller
{
    // Create a new message
    public function store(Request $request)
    {
        $request->validate([
            'content' => 'required|string',
        ]);

        $message = $request->user()->messages()->create($request->all());
        return response()->json($message, 201);
    }

    // Get all messages for the authenticated user
    public function index(Request $request)
    {
        $messages = $request->user()->messages;
        return response()->json($messages, 200);
    }
}