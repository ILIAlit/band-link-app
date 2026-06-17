<?php

namespace App\Actions\Profile;

use App\Concerns\PasswordValidationRules;
use App\Concerns\ProfileValidationRules;
use App\Models\Profile;
use Illuminate\Support\Facades\Validator;
use Laravel\Fortify\Contracts\CreatesNewUsers;
use App\Models\User;

class CreateNewProfile
{

    public function __construct(private Profile $profile) {}

    /**
     * @param User $user
     * @return Profile
     *
     * 
     */
    public function create(User $user): Profile
    {
        $profile = $this->profile;
        $user->profile()->save($profile);
        return $profile;
    }
}
