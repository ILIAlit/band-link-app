import { Link } from '@inertiajs/react';
import { ExternalLink } from 'lucide-react';
import redirect from '@/routes/redirect';

export default function SoundLinkList({
    apple_music_url,
    sound_cloud_url,
    spotify_url,
    youtube_music_url,
    releaseId,
}: {
    apple_music_url?: string;
    sound_cloud_url?: string;
    spotify_url?: string;
    youtube_music_url?: string;
    releaseId: number;
}) {
    const links = [
        {
            platform: 'Spotify',
            platform_url: 'spotify_url',
            url: spotify_url,
            icon: '🎵',
        },
        {
            platform: 'SoundCloud',
            platform_url: 'sound_cloud_url',
            url: sound_cloud_url,
            icon: '☁️',
        },
        {
            platform: 'YouTube Music',
            platform_url: 'youtube_music_url',
            url: youtube_music_url,
            icon: '▶️',
        },
        {
            platform: 'Apple Music',
            platform_url: 'apple_music_url',
            url: apple_music_url,
            icon: '🍎',
        },
    ];

    return (
        <>
            {links
                .filter((item) => item.url)
                .map((item) => (
                    <Link
                        key={item.platform}
                        href={redirect.get({
                            release_id: releaseId,
                            platform_url: item.platform_url,
                        })}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between rounded-lg bg-zinc-900 px-6 py-4 transition-all hover:bg-zinc-800"
                    >
                        <span className="flex items-center gap-3">
                            <span className="text-2xl">{item.icon}</span>
                            <span className="font-medium">{item.platform}</span>
                        </span>
                        <ExternalLink className="h-5 w-5 text-zinc-600 transition-colors group-hover:text-purple-400" />
                    </Link>
                ))}
        </>
    );
}
