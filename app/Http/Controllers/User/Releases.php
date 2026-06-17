<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Release;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Http\Requests\CreateReleaseRequest;
use App\Actions\Release\CreateRelease;
use App\Actions\Release\DeleteRelease;
use App\Actions\Release\GetOneRelease;


class Releases extends Controller
{
    public function get()
    {
        return Inertia::render('welcome', [
            'releases' => Inertia::scroll(function () {
                return Release::query()
                ->orderBy('created_at', 'asc')
                ->paginate();
            }),
        ]);
    }

    public function getOne(Request $request, GetOneRelease $getOneRelease)
    {
        $release = $getOneRelease->execute($request->id);
    
        $author = $release->user;
        $profile = $author?->profile;
    
        return Inertia::render('release', [
            'release' => $release,
            'author' => $author ? [
                'id' => $author->id,
                'name' => $author->name,
                'about' => $profile?->about,
                'instagram' => $profile?->instagram,
                'twitter' => $profile?->twitter,
                'youtube' => $profile?->youtube,
                'avatar' => $profile?->avatar,
            ] : null,
        ]);
    }

    public function create(CreateReleaseRequest $request, CreateRelease $createRelease)
    {
        $validated = $request->validated();
        
        $userId = Auth::user()->id;
        $createRelease->execute($userId, $validated);
        return redirect()->route('dashboard');
    }

    public function delete(Request $request, DeleteRelease $deleteRelease)
    {
        $userId = Auth::user()->id;
        $deleteRelease->execute($request->id, $userId);
        return redirect()->route('dashboard');
    }
}
