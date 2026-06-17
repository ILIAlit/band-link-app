export interface Profile {
    id: number;
    about?: string;
    instagram?: string;
    twitter?: string;
    youtube?: string;
    avatar?: string;
}

export type Stats = {
    spotify_url: number;
    sound_cloud_url: number;
    youtube_music_url: number;
    apple_music_url: number;
};
