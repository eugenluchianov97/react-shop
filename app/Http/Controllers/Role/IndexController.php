<?php

namespace App\Http\Controllers\Role;

use App\Http\Controllers\Controller;
use App\Http\Resources\Role\IndexResource;
use App\Models\Role;
use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function __invoke(Request $request): \Illuminate\Http\JsonResponse
    {
        try {
            $n = 10;

            $collection = Role::where('id', '>', 0);

            if($request->has('q')){
                $collection->where(function($query) use($request) {
                    $query->where('name','LIKE',"%$request->q%")
                        ->orWhere('description','LIKE',"%$request->q%");
                });
            }



            $roles = $collection->latest()->paginate($n);

            IndexResource::collection($roles);

            return response()->json([
                'roles' => $roles,
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
