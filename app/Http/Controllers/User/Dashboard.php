<?php

namespace App\Http\Controllers\User;

use Inertia\Inertia;
use App\Models\User;
use App\Models\Profile;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;

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
        Log::info("User ID: $userId, Profile ID: {$userProfile->id}");
        return Inertia::render('dashboard', [
            'profile' => [
                'id' => $userProfile->id,
                'about' => $userProfile->about,
                'instagram' => $userProfile->instagram,
                'twitter' => $userProfile->twitter,
                'youtube' => $userProfile->youtube,
            ],
        ]);
    }

    public function update(Request $request)
    {
        Log::info($request->about);
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
        ]);
        return redirect()->route('dashboard');
    }
}
