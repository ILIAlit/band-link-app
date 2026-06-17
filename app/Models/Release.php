<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\StatUrl;

class Release extends Model
{
    protected $table = 'releases';

    protected $fillable = [
        'user_id',
        'title',
        'release_date',
        'spotify_url',
        'apple_music_url',
        'youtube_music_url',
        'sound_cloud_url',
        'cover_image',

    ];

    protected $casts = [
        'id' => 'integer',
        'user_id' => 'integer',
        'release_date' => 'date',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function statUrl()
    {
        return $this->hasMany(StatUrl::class);
    }
}
