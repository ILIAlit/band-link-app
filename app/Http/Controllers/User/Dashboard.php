<?php

namespace App\Http\Controllers\User;

use Inertia\Inertia;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Actions\Profile\GetUserProfileAction;
use App\Actions\Profile\UpdateUserProfileAction;
use App\Http\Requests\UpdateProfileRequest;

class Dashboard extends Controller
{

    public function __invoke(Request $request, GetUserProfileAction $getProfileAction)
    {
        $userId = Auth::user()->id;
        $profile = $getProfileAction->execute($userId);

        $userReleases = Auth::user()->releases;

        return Inertia::render('dashboard', [
            'profile' => $profile,
            'releases' => $userReleases,
        ]);
    }

    public function getUserProfile(Request $request, GetUserProfileAction $action)
    {
        $profile = $action->execute($request->user_id);
        return response()->json(['profile' => $profile]);
    }

    public function update(UpdateProfileRequest $request, UpdateUserProfileAction $action)
    {
        $user = Auth::user();
        $validated = $request->validated();

        $action->execute($user, $validated);

        Inertia::flash('toast', ['type' => 'success', 'message' => __('Профиль обновлён.')]);

        return redirect()->route('dashboard');
    }
}
