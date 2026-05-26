<?php

namespace App\Actions\Release;

use DateTime;
use App\Models\User;
use App\Models\Release;
use App\Service\UserService;
use Illuminate\Support\Facades\Log;
use App\Actions\Utils\ImageUploader;


class CreateRelease
{

    public function __construct(
        private UserService $userService,
        private ImageUploader $imageUploader,
    ) {}

    public function execute(int $userId, array $releaseData)
    {
        $user = $this->userService->findUser($userId);
        $imagePath = $this->handleImageUpload($releaseData);
        return $this->createRelease($user, $releaseData, $imagePath);
    }

    private function handleImageUpload(array $releaseData): ?string
    {
        if (!isset($releaseData['cover'])) {
            return $releaseData['coverSrc'] ?? null;
        }

        try {
            return $this->imageUploader->upload($releaseData['cover']);
        } catch (\Exception $e) {
            Log::error('Image upload failed: ' . $e->getMessage());
            throw $e;
        }
    }

    private function createRelease(User $user, array $releaseData, string $imagePath): Release
    {
        $createData = [
            'title' => $releaseData['title'],
            'spotify_url' => $releaseData['spotify_url'],
            'apple_music_url' => $releaseData['apple_music_url'],
            'youtube_music_url' => $releaseData['youtube_music_url'],
            'sound_cloud_url' => $releaseData['sound_cloud_url'],
            'release_date' => new DateTime(),
            'cover_image' => $imagePath,
        ];
        $release = Release::create($createData);
        $user->releases()->save($release);
        return $release;
    }
}
