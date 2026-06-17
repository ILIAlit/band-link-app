<?php

namespace App\Enums;

enum PlatformEnum: string
{
    case SpotifyUrl = 'spotify_url';
    case SoundCloudUrl = 'sound_cloud_url';
    case YouTubeMusicUrl = 'youtube_music_url';
    case AppleMusicUrl = 'apple_music_url';
}
