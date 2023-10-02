<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{

    public function __invoke(LoginRequest $request): \Illuminate\Http\JsonResponse
    {
        try {
            $data = $request->validated();

            $user = User::where('email', $data['email'])->first();
            if(!Auth::attempt(['email' => $data['email'], 'password' => $data['password']])){
                return response()->json([
                    'status' => false,
                    'errors' => ['credentials' => ['Invalid credentials']]
                ], 401);
            }

            return response()->json([
                'status' => true,
                'token' => $user->createToken("API TOKEN")->plainTextToken,
                'user' => $user
            ], 200);
        }
        catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }
}
