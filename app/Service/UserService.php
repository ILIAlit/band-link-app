<?php

namespace App\Service;

use App\Models\User;
use Illuminate\Support\Facades\Log;


class UserService
{
    public function __construct() {}


    /**
     *@param int $userId
     *@return User
     */
    public function findUser(int $userId): User
    {
        $user = User::find($userId);
        if (!$user) {
            Log::error("User not found with ID: {$userId}");
            abort(404, 'User not found');
        }
        return $user;
    }
}
