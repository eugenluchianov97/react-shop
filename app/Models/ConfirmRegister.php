<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ConfirmRegister extends Model
{
    use HasFactory;

    protected $table = 'confirm_register';

    protected $guarded = false;
}
