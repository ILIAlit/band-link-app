<?php

namespace App\Actions\Profile;

use App\Models\User;
use App\Models\Profile;
use App\Actions\Fortify\ImageUploader;
use Illuminate\Support\Facades\Log;

class UpdateUserProfileAction
{
    public function __construct(
        private ImageUploader $imageUploader
    ) {}

    /**
     *
     * @param User $user
     * @param array $data
     * @return Profile
     */
    public function execute(User $user, array $data): Profile
    {
        $profile = $this->getProfile($user);
        $imagePath = $this->handleImageUpload($data);

        return $this->updateProfile($profile, $data, $imagePath);
    }

    private function getProfile(User $user): Profile
    {
        $profile = $user->profile;

        if (!$profile) {
            Log::error("Profile not found for user ID: {$user->id}");
            abort(404, 'Profile not found');
        }

        return $profile;
    }

    private function handleImageUpload(array $data): ?string
    {
        if (!isset($data['avatar'])) {
            return $data['avatarSrc'] ?? null;
        }

        try {
            return $this->imageUploader->upload($data['avatar']);
        } catch (\Exception $e) {
            Log::error('Image upload failed: ' . $e->getMessage());
            throw $e;
        }
    }

    private function updateProfile(Profile $profile, array $data, ?string $imagePath): Profile
    {
        $updateData = [
            'about' => $data['about'] ?? $profile->about,
            'instagram' => $data['instagram'] ?? $profile->instagram,
            'twitter' => $data['twitter'] ?? $profile->twitter,
            'youtube' => $data['youtube'] ?? $profile->youtube,
        ];

        if ($imagePath) {
            $updateData['avatar'] = $imagePath;
        }

        $profile->update($updateData);

        Log::info("Profile updated for user ID: {$profile->user_id}");

        return $profile;
    }
}
