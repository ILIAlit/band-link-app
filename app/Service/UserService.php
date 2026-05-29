<?php

namespace App\Service;

use App\Models\User;


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
            abort(404, 'User not found');
        }
        return $user;
    }
}
