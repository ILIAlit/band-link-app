<?php

namespace App\Service;

use App\Models\Release;


class ReleaseService
{


    public function getRelease(int $id): Release
    {
        $release = Release::find($id);
        if (!$release) {
            abort(404, 'Release not found');
        }
        return Release::find($id);
    }
}
