<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('shippings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('order_id')->constrained()->onDelete('cascade');
            $table->string('tracking_number');
            $table->string('carrier');
            $table->enum('status', ['pending', 'shipped', 'delivered'])->default('pending');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('shippings');
    }
};