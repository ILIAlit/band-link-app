<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\User\Dashboard;


Route::get('/profile/{user_id}', [Dashboard::class, 'getUserProfile'])->name('profile.get');

Route::get('/dashboard', Dashboard::class)
    ->middleware('auth')
    ->name('dashboard');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::put('/dashboard', [Dashboard::class, 'update'])->name('dashboard.update');
});
