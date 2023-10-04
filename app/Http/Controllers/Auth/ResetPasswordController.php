<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\ResetPasswordRequest;
use App\Models\ResetPasswordCode;
use App\Models\User;
use Illuminate\Http\Request;

class ResetPasswordController extends Controller
{
    public function __invoke(ResetPasswordRequest $request): \Illuminate\Http\JsonResponse
    {
        try {
            $data = $request->validated();
            $passwordReset = ResetPasswordCode::firstWhere('code', $data['code']);

            if ($passwordReset->created_at > now()->addHour()) {
                $passwordReset->delete();
                return response()->json([
                    'status' => false,
                    'message' => 'Code is expired!',
                ], 405);

            }

            // find user's email
            $user = User::find($passwordReset->user_id);

            // update user password
            $user->password = $data['password'];
            $user->save();

            // delete current code
            $passwordReset->delete();

            return response()->json([
                'status' => true,
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
