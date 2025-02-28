<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;

    protected $fillable = [
        'order_id',
        'amount',
        'payment_method', // credit_card, paypal, etc.
        'payment_status', // pending, completed, failed
    ];

    // Relationships
    public function order()
    {
        return $this->belongsTo(Order::class);
    }
}