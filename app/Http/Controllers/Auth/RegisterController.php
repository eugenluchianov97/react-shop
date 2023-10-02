<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\RegisterRequest;
use App\Mail\ConfirmRegistrationMail;
use App\Models\ConfirmPassword;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

class RegisterController extends Controller
{

    public function __invoke(RegisterRequest $request): \Illuminate\Http\JsonResponse
    {
        try {
            $data = $request->validated();

            $userData = [
                'name' => $data['name'],
                'email' => $data['email'],
                'password' => Hash::make($data['password'])
            ];


            $user = User::create($userData);

           // $codeNumber =  mt_rand(1000000000, 9999999999);
            //$code = new ConfirmPassword(['user_id' => $user->id, 'code' => $codeNumber]);
            //$user->code()->save($code);

           // Mail::to($data['email'])->send(new ConfirmRegistrationMail($codeNumber));

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
