<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\Logout;
use App\Http\Controllers\User\Dashboard;
use App\Http\Controllers\User\Releases;
use Inertia\Inertia;

Route::inertia('/', 'welcome')->name('home');

Route::get('/dashboard', Dashboard::class)
    ->middleware('auth')
    ->name('dashboard');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::put('/dashboard', [Dashboard::class, 'update'])->name('dashboard.update');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::post('/release', [Releases::class, 'create'])->name('release.create');
});

Route::post('/logout', Logout::class)
    ->middleware('auth')
    ->name('logout');

require __DIR__ . '/settings.php';
