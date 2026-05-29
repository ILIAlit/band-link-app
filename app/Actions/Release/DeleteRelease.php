<?php

namespace App\Actions\Release;

use App\Service\ReleaseService;
use App\Service\UserService;

class DeleteRelease
{

    public function __construct(private ReleaseService $releaseService, private UserService $userService) {}
    public function execute(int $id, int $userId): bool|null
    {
        $release = $this->releaseService->getRelease($id);
        $user = $release->user;
        if ($user->id !== $userId) {
            abort(403, 'Forbidden');
        }
        return $release->delete();
    }
}
