<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Shipping extends Model
{
    use HasFactory;

    protected $fillable = [
        'order_id',
        'tracking_number',
        'carrier',
        'status', // pending, shipped, delivered
    ];

    // Relationships
    public function order()
    {
        return $this->belongsTo(Order::class);
    }
}