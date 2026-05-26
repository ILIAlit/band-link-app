<?php

namespace App\Service;

use App\Models\User;
use App\Models\Profile;
use Illuminate\Support\Facades\Log;

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
            Log::error("Profile not found for user ID: {$user->id}");
            abort(404, 'Profile not found');
        }

        return $profile;
    }
}
