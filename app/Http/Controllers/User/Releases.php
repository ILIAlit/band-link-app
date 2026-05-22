<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use DateTime;
use Illuminate\Http\Request;
use App\Models\Release;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Carbon;

class Releases extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        //
    }

    public function create(Request $request)
    {
        Log::info($request->all());
        $userId = Auth::user()->id;
        $user = User::find($userId);
        if (!$user) {
            Log::error("User not found with ID: $userId");
            abort(404, 'User not found');
        }
        $release = Release::create([
            'title' => $request->title,
            'spotify_url' => $request->spotify_url,
            'apple_music_url' => $request->apple_music_url,
            'youtube_music_url' => $request->youtube_music_url,
            'sound_cloud_url' => $request->sound_cloud_url,
            'release_date' => new DateTime(),

        ]);

        $user->releases()->save($release);

        return redirect()->route('dashboard');
    }
}
