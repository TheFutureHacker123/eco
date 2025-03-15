<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class bankInfo extends Model
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $table = 'bank_info';

    protected $fillable = [
        'bank_id',
        'bank_name',
        'account_name',
        'account_number',
        'status',
        'business_id',
        'admin_id'
    ];

    public $timestamps = false;

    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];
}
