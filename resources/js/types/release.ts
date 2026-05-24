import type { User } from './auth';

export interface Release {
    id: string;
    title: string;
    cover_image: string;
    release_date: string;
    apple_music_url?: string;
    sound_cloud_url?: string;
    spotify_url?: string;
    youtube_music_url?: string;
    user: Pick<
        User,
        'id' | 'name' | 'avatar' | 'about' | 'instagram' | 'twitter' | 'youtube'
    >;
}

export interface StreamingLink {
    platform: string;
    url: string;
    icon: string;
}
