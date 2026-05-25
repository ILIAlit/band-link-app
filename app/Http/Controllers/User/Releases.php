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

class Releases extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request) {}

    public function get()
    {
        return Inertia::render('welcome', [
            'releases' => Release::with('user:id,name')->get(),
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

    public function create(Request $request)
    {
        $request->validate([
            'cover' => 'nullable|image|mimes:jpeg,png,jpg,gif',
        ]);

        $userId = Auth::user()->id;

        $user = User::find($userId);
        if (!$user) {
            Log::error("User not found with ID: $userId");
            abort(404, 'User not found');
        }
        $imgPath = $request->coverSrc;

        if ($request->cover) {
            $imgPath = app(ImageUploader::class)->upload($request->cover);
        }
        $release = Release::create([
            'title' => $request->title,
            'spotify_url' => $request->spotify_url,
            'apple_music_url' => $request->apple_music_url,
            'youtube_music_url' => $request->youtube_music_url,
            'sound_cloud_url' => $request->sound_cloud_url,
            'release_date' => new DateTime(),
            'cover_image' => $imgPath,

        ]);

        $user->releases()->save($release);

        return redirect()->route('dashboard');
    }
}
