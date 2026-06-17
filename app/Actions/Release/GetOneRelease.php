<?php

namespace App\Actions\Release;

use App\Models\Release;
use App\Service\ReleaseService;
use App\Service\UserService;

class GetOneRelease
{

    public function __construct(private ReleaseService $releaseService, private UserService $userService) {}
    public function execute(int $id): Release
    {
        $release = $this->releaseService->getRelease($id);
        
        return $release;
    }
}
