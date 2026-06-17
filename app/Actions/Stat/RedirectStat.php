<?php

namespace App\Actions\Stat;

use App\Models\Release;
use App\Service\ReleaseService;
use App\Service\UserService;

class RedirectStat
{

    public function __construct(private ReleaseService $releaseService, private UserService $userService) {}
    public function execute(int $id): Release
    {
        $release = $this->releaseService->getRelease($id);
        
        return $release;
    }
}
