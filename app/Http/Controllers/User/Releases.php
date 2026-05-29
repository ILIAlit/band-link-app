<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use DateTime;
use Illuminate\Http\Request;
use App\Models\Release;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Inertia\Inertia;
use App\Actions\Fortify\ImageUploader;
use App\Http\Requests\CreateReleaseRequest;
use App\Actions\Release\CreateRelease;
use App\Actions\Release\DeleteRelease;


class Releases extends Controller
{
    public function get()
    {
        return Inertia::render('welcome', [
            'releases' => Inertia::scroll(function () {
                return Release::paginate();
            }),
        ]);
    }

    public function getOne(Request $request)
    {
        try {
            $release = Release::with([
                'user:id,name',
            ])->find($request->id);

            if (! $release) {
                return redirect()->route('welcome');
            }

            $author = $release->user;
            $user = User::find($author->id);
            $profile = $user->profile;



            $authorData = null;
            if ($author) {
                $authorData = [
                    'id' => $author->id,
                    'name' => $author->name,
                    'about' => $profile->about ?? null,
                    'instagram' => $profile->instagram ?? null,
                    'twitter' => $profile->twitter ?? null,
                    'youtube' => $profile->youtube ?? null,
                    'avatar' => $profile->avatar ?? null,
                ];
            }

            return Inertia::render('release', [
                'release' => $release,
                'author' => $authorData,
            ]);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return redirect()->back()->with('error', $e->getMessage());
        }
    }

    public function create(CreateReleaseRequest $request, CreateRelease $createRelease)
    {
        $userId = Auth::user()->id;

        $createRelease->execute($userId, [
            'title' => $request->title,
            'spotify_url' => $request->spotify_url,
            'apple_music_url' => $request->apple_music_url,
            'youtube_music_url' => $request->youtube_music_url,
            'sound_cloud_url' => $request->sound_cloud_url,
            //'release_date' => new DateTime(),
            'cover' => $request->cover,
            'coverSrc' => $request->coverSrc,
        ]);

        return redirect()->route('dashboard');
    }

    public function delete(Request $request, DeleteRelease $deleteRelease)
    {
        $userId = Auth::user()->id;
        $deleteRelease->execute($request->id, $userId);
        return redirect()->route('dashboard');
    }
}
