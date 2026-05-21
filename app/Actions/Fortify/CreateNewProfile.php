<?php

namespace App\Actions\Fortify;

use App\Concerns\PasswordValidationRules;
use App\Concerns\ProfileValidationRules;
use App\Models\Profile;
use Illuminate\Support\Facades\Validator;
use Laravel\Fortify\Contracts\CreatesNewUsers;
use App\Models\User;

class CreateNewProfile
{

    /**
     * Validate and create a newly profile for registered user.
     *
     * 
     */
    public function create(User $user): Profile
    {
        $profile = new Profile();
        $user->profile()->save($profile);
        return $profile;
    }
}
