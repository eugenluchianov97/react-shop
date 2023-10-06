<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::group(['prefix' =>'auth'], function(){

    Route::post('/register',\App\Http\Controllers\Auth\RegisterController::class);

    Route::post('/login',\App\Http\Controllers\Auth\LoginController::class);

    Route::post('/register-confirm',\App\Http\Controllers\Auth\ConfirmRegisterController::class);

    Route::post('/forgot-password',\App\Http\Controllers\Auth\ForgotController::class);

    Route::post('/reset-password',\App\Http\Controllers\Auth\ResetPasswordController::class);

    Route::group(['middleware' => ['auth:sanctum']], function(){
        Route::post('/logout',\App\Http\Controllers\Auth\LogoutController::class);
        Route::post('/me',\App\Http\Controllers\Auth\MeController::class);
    });
});

Route::group(['prefix' =>'roles'], function(){
    Route::get('/',\App\Http\Controllers\Role\IndexController::class);
    Route::post('/store',\App\Http\Controllers\Role\StoreController::class);
});
