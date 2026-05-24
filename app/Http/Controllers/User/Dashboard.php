<?php

namespace App\Http\Controllers\User;

use Inertia\Inertia;
use App\Models\User;
use App\Models\Profile;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use App\Actions\Fortify\ImageUploader;

class Dashboard extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $userId = Auth::user()->id;
        $user = User::find($userId);
        if (!$user) {
            Log::error("User not found with ID: $userId");
            abort(404, 'User not found');
        }
        $userProfile = $user->profile;
        if (!$userProfile) {
            Log::error("Profile not found for user ID: $userId");
            return Inertia::render('dashboard');
        }
        return Inertia::render('dashboard', [
            'profile' => [
                'id' => $userProfile->id,
                'about' => $userProfile->about,
                'instagram' => $userProfile->instagram,
                'twitter' => $userProfile->twitter,
                'youtube' => $userProfile->youtube,
                'avatar' => $userProfile->avatar,
            ],
        ]);
    }

    public function getUserProfile(Request $request)
    {
        $user = User::find($request->user_id);
        if (!$user) {
            Log::error("User not found with ID: {$request->user_id}");
            abort(404, 'User not found');
        }
        $profile = $user->profile;
        if (!$profile) {
            Log::error("Profile not found for user ID: {$request->user_id}");
            abort(404, 'Profile not found');
        }
        return response()->json([
            'id' => $profile->id,
            'about' => $profile->about,
            'instagram' => $profile->instagram,
            'twitter' => $profile->twitter,
            'youtube' => $profile->youtube,
            'avatar' => $profile->avatar,
            'name' => $user->name,
        ]);
    }

    public function update(Request $request)
    {


        $request->validate([
            'avatar' => 'nullable|image|mimes:jpeg,png,jpg,gif',
        ]);

        $imgPath = $request->avatarSrc;

        if ($request->avatar) {
            $imgPath = app(ImageUploader::class)->upload($request->avatar);
        }



        $userId = Auth::user()->id;
        $user = User::find($userId);
        if (!$user) {
            Log::error("User not found with ID: $userId");
            abort(404, 'User not found');
        }
        $userProfile = $user->profile;
        if (!$userProfile) {
            Log::error("Profile not found for user ID: $userId");
        }
        $userProfile->update([
            'about' => $request->about,
            'instagram' => $request->instagram,
            'twitter' => $request->twitter,
            'youtube' => $request->youtube,
            'avatar' => $imgPath,
        ]);
        return redirect()->route('dashboard');
    }
}
