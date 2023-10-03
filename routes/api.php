<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::group(['prefix' =>'auth'], function(){

    Route::post('/register',\App\Http\Controllers\Auth\RegisterController::class);

    Route::post('/login',\App\Http\Controllers\Auth\LoginController::class);

    Route::post('/register-confirm',\App\Http\Controllers\Auth\ConfirmRegisterController::class);


    Route::group(['middleware' => ['auth:sanctum']], function(){
        Route::post('/logout',\App\Http\Controllers\Auth\LogoutController::class);
        Route::post('/me',\App\Http\Controllers\Auth\MeController::class);
    });
});
