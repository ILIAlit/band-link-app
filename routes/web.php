<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\Logout;
use App\Http\Controllers\User\Dashboard;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;

Route::inertia('/', 'welcome')->name('home');
Route::get('/release/{id}', function ($id) {
    return Inertia::render('release', ['id' => $id]);
})->name('release');

Route::get('/dashboard', Dashboard::class)
    ->middleware('auth')
    ->name('dashboard');

Route::middleware(['auth', 'verified'])->group(function () {
    //Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

Route::post('/logout', Logout::class)
    ->middleware('auth')
    ->name('logout');

require __DIR__ . '/settings.php';
