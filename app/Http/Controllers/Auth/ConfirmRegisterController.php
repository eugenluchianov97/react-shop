<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\ConfirmRegisterRequest;
use App\Mail\ConfirmRegistrationMail;
use App\Models\ConfirmPassword;
use App\Models\ConfirmRegister;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ConfirmRegisterController extends Controller
{
    public function __invoke(ConfirmRegisterRequest $request): \Illuminate\Http\JsonResponse
    {
        try {
            $data = $request->validated();
            $confirmPassword = ConfirmRegister::firstWhere('code', $data['code']);

            if(!$confirmPassword){
                return response()->json([
                    'status' => false,
                ], 400);
            }

            $user = User::firstWhere('id', $confirmPassword['user_id']);

            if ($confirmPassword->created_at > now()->addHour()) {
                $confirmPassword->delete();

                $codeNumber =  mt_rand(1000000000, 9999999999);
                $code = new ConfirmRegister(['user_id' => $user->id, 'code' => $codeNumber]);
                $user->code()->save($code);

                Mail::to($data['email'])->send(new ConfirmRegistrationMail($codeNumber));

                return response()->json([
                    'status' => false,
                    'message' => 'Code is expired!We have sent new code!',
                ], 405);

            }


            $user->markEmailAsVerified();
            $confirmPassword->delete();

            return response()->json([
                'status' => true,
                'user' => $user,
                'token' => $user->createToken("API TOKEN")->plainTextToken
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
