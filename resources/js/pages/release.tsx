import { usePage } from '@inertiajs/react';
import { Calendar, Music } from 'lucide-react';
import SoundLinkList from '@/components/release/sound-link-lict';
import UserAbout from '@/components/release/user-about';
import UserInfo from '@/components/release/user-info';
import type { Auth, Release, User } from '@/types';

export default function Release() {
    console.log(usePage());

    const page = usePage<{
        auth: Auth;
        release: Release;
        author: Pick<
            User,
            | 'id'
            | 'name'
            | 'avatar'
            | 'about'
            | 'instagram'
            | 'twitter'
            | 'youtube'
        >;
    }>();
    const { release, author } = page.props;

    if (!release) {
        return (
            <div className="py-20 text-center">
                <h2 className="text-2xl font-bold text-zinc-400">
                    Release not found
                </h2>
            </div>
        );
    }

    return (
        <div className="mx-auto max-w-5xl">
            <div className="mb-12 grid gap-8 md:grid-cols-2">
                <div className="aspect-square overflow-hidden rounded-2xl shadow-2xl shadow-purple-900/30">
                    <img
                        src={release.cover_image}
                        alt={release.title}
                        className="h-full w-full object-cover"
                    />
                </div>

                <div className="flex flex-col justify-center">
                    <div className="mb-6">
                        <h1 className="mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-5xl font-bold text-transparent">
                            {release.title}
                        </h1>
                        <UserInfo
                            id={author.id}
                            name={author.name}
                            avatar={author?.avatar}
                        />
                        <div className="mb-6 flex items-center gap-2 text-zinc-400">
                            <Calendar className="h-4 w-4" />
                            <span>
                                {new Date(
                                    release.release_date,
                                ).toLocaleDateString('ru-RU')}
                            </span>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div className="mb-2 flex items-center gap-2 text-zinc-400">
                            <Music className="h-4 w-4" />
                            <span className="font-medium">Listen on:</span>
                        </div>
                        <SoundLinkList
                            apple_music_url={release.apple_music_url}
                            sound_cloud_url={release.sound_cloud_url}
                            spotify_url={release.spotify_url}
                            youtube_music_url={release.youtube_music_url}
                            releaseId={release.id}
                        />
                    </div>
                </div>
            </div>

            <UserAbout author={author} />
        </div>
    );
}
