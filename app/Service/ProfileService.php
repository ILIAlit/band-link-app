<?php

namespace App\Service;

use App\Models\User;
use App\Models\Profile;

class ProfileService
{
    public function __construct() {}


    /** 
     * @param User $user
     * 
     * @return Profile
     */
    public function findProfile(User $user): Profile
    {
        $profile = $user->profile;

        if (!$profile) {
            abort(404, 'Profile not found');
        }

        return $profile;
    }
}
