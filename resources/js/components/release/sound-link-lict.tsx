import { ExternalLink } from 'lucide-react';

export default function SoundLinkList({
    apple_music_url,
    sound_cloud_url,
    spotify_url,
    youtube_music_url,
}: {
    apple_music_url?: string;
    sound_cloud_url?: string;
    spotify_url?: string;
    youtube_music_url?: string;
}) {
    const links = [
        { platform: 'Spotify', url: spotify_url, icon: '🎵' },
        { platform: 'SoundCloud', url: sound_cloud_url, icon: '☁️' },
        { platform: 'YouTube Music', url: youtube_music_url, icon: '▶️' },
        { platform: 'Apple Music', url: apple_music_url, icon: '🍎' },
    ];

    console.log(links);

    return (
        <>
            {links
                .filter((item) => item.url)
                .map((item) => (
                    <a
                        key={item.platform}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between rounded-lg bg-zinc-900 px-6 py-4 transition-all hover:bg-zinc-800"
                    >
                        <span className="flex items-center gap-3">
                            <span className="text-2xl">{item.icon}</span>
                            <span className="font-medium">{item.platform}</span>
                        </span>
                        <ExternalLink className="h-5 w-5 text-zinc-600 transition-colors group-hover:text-purple-400" />
                    </a>
                ))}
        </>
    );
}
