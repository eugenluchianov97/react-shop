<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' =>'auth'], function(){

    Route::post('/register',\App\Http\Controllers\Auth\RegisterController::class);

    Route::post('/login',\App\Http\Controllers\Auth\LoginController::class);


    Route::group(['middleware' => ['auth:sanctum']], function(){
        Route::post('/logout',\App\Http\Controllers\Auth\LogoutController::class);
    });
});
