<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\User\Releases;


Route::get('/release/{id}', [Releases::class, 'getOne'])->name('release.getone');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::post('/release', [Releases::class, 'create'])->name('release.create');
    Route::delete('/release/{id}', [Releases::class, 'delete'])->name('release.delete');
});
