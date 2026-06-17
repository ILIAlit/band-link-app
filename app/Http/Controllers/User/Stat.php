<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\RedirectStatRequest;
use App\Http\Requests\GetStatRequest;
use Illuminate\Support\Facades\Log;
use App\Models\Release;
use App\Models\StatUrl;
use App\Enums\PlatformEnum;
use Inertia\Inertia;



class Stat extends Controller
{
   public function redirectStat(RedirectStatRequest $request) {
        $validated = $request->validated();
        $release = Release::findOrFail($validated['release_id']);
    
        $platformField = $validated['platform_url'];
        $targetUrl = $release->{$platformField} ?? null;
    
        abort_if(!$targetUrl, 404, "Ссылка для платформы {$platformField} не найдена.");

        $release->statUrl()->create([
            'platform_url' => $platformField,
            'url' => $targetUrl,
        ]);

        return Inertia::location($targetUrl);
    }

    public function showStat(GetStatRequest $request) {
        $user = $request->user();
        //$validated = $request->validated();
        $statsData = $user->stats()
        ->select('platform_url')
        ->selectRaw('COUNT(*) as total')
        ->groupBy('platform_url') 
        ->pluck('total', 'platform_url');

        $statsByPlatform = collect(PlatformEnum::cases())->mapWithKeys(function ($platform) use ($statsData) {

            return [$platform->value => $statsData->get($platform->value, 0)];
        });

        Log::info($statsByPlatform->toArray());
        return ['stats' => $statsByPlatform];
    }
}
