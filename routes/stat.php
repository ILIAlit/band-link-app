<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\User\Stat;



Route::get('/redirect/{release_id}/{platform_url}', [Stat::class, 'redirectStat'])->name('redirect.get');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/statUrl', [Stat::class, 'showStat'])->name('stat.get');
});


