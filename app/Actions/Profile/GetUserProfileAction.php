<?php

namespace App\Actions\Profile;

use App\Models\User;
use Illuminate\Support\Facades\Log;

class GetUserProfileAction
{
    /**
     *
     * @param int $userId
     * @return array
     * @throws \Exception
     */
    public function execute(int $userId): array
    {
        $user = $this->findUser($userId);
        $profile = $this->findProfile($user);

        return $this->formatProfile($profile, $user);
    }

    private function findUser(int $userId): User
    {
        $user = User::find($userId);

        if (!$user) {
            Log::error("User not found with ID: {$userId}");
            abort(404, 'User not found');
        }

        return $user;
    }

    private function findProfile(User $user): \App\Models\Profile
    {
        $profile = $user->profile;

        if (!$profile) {
            Log::error("Profile not found for user ID: {$user->id}");
            abort(404, 'Profile not found');
        }

        return $profile;
    }

    private function formatProfile($profile, User $user): array
    {
        return [
            'id' => $profile->id,
            'about' => $profile->about,
            'instagram' => $profile->instagram,
            'twitter' => $profile->twitter,
            'youtube' => $profile->youtube,
            'avatar' => $profile->avatar,
            'name' => $user->name,
        ];
    }
}
