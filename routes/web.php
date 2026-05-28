<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\Logout;

use App\Http\Controllers\User\Releases;

Route::get('/', [Releases::class, 'get'])->name('home');

Route::post('/logout', Logout::class)
    ->middleware('auth')
    ->name('logout');

require __DIR__ . '/settings.php';
require __DIR__ . '/dashboard.php';
require __DIR__ . '/release.php';
