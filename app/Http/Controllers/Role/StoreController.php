<?php

namespace App\Http\Controllers\Role;

use App\Http\Controllers\Controller;
use App\Http\Requests\Role\StoreRequest;
use App\Models\Role;
use Illuminate\Http\Request;

class StoreController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(StoreRequest $request): \Illuminate\Http\JsonResponse
    {
        try {
            $data = $request->validated();

            $role = Role::create([
                 'name' => $data['name'],
                 'description' => $data['description'],
            ]);

            return response()->json([
                'role' => $role,
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
