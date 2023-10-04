<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LogoutController extends Controller
{

    public function __invoke(Request $request): \Illuminate\Http\JsonResponse
    {
        try {
            $request->user()->tokens()->delete();

            return response()->json([
                'status' => true
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
