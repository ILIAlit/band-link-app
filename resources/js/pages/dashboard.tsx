import { Head, Link, usePage } from '@inertiajs/react';

import { Music, Eye, BarChart3, Users, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { mockArtists, mockReleases } from '@/data/mockData';

// type DashboardProps = {
//     auth: {
//         user: {
//             name: string;
//         };
//     };
//     profile?: {
//         id: number;
//         about?: string;
//         instagram?: string;
//         twitter?: string;
//         youtube?: string;
//     };
// };

export default function Dashboard() {
    const page = usePage<{
        auth: { user: { name: string } };
        profile?: {
            id: number;
            about?: string;
            instagram?: string;
            twitter?: string;
            youtube?: string;
        };
    }>();

    const { auth, profile } = page.props;
    const user = auth.user;
    console.log('Profile:', profile);
    console.log('Auth:', auth);

    const currentArtist = mockArtists[0];
    const myReleases = mockReleases.filter(
        (r) => r.artist.id === currentArtist.id,
    );
    const [timeRange, setTimeRange] = useState<'7d' | '30d' | 'all'>('30d');

    return (
        <>
            <Head title="Dashboard" />
            <div className="mx-auto max-w-7xl">
                <div className="mb-8">
                    <h1 className="mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-4xl font-bold text-transparent">
                        Dashboard
                    </h1>
                    <p className="text-zinc-400">
                        Welcome back, {currentArtist.name}
                    </p>
                </div>
                <div className="mb-8 grid gap-6 lg:grid-cols-3">
                    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 lg:col-span-2">
                        <div className="mb-6 flex items-center justify-between">
                            <h2 className="flex items-center gap-2 text-xl font-bold">
                                <BarChart3 className="h-5 w-5 text-purple-400" />
                                Performance Overview
                            </h2>
                            <select
                                value={timeRange}
                                onChange={(e) =>
                                    setTimeRange(
                                        e.target.value as '7d' | '30d' | 'all',
                                    )
                                }
                                className="rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-1.5 text-sm text-zinc-200 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                            >
                                <option value="7d">Last 7 days</option>
                                <option value="30d">Last 30 days</option>
                                <option value="all">All time</option>
                            </select>
                        </div>

                        <div className="space-y-4">
                            {myReleases.map((release) => (
                                <div
                                    key={release.id}
                                    className="flex items-center gap-4 rounded-lg bg-zinc-800/50 p-4 transition-colors hover:bg-zinc-800"
                                >
                                    <img
                                        src={release.coverUrl}
                                        alt={release.title}
                                        className="h-16 w-16 rounded-lg object-cover"
                                    />
                                    <div className="min-w-0 flex-1">
                                        <h3 className="mb-1 truncate font-semibold">
                                            {release.title}
                                        </h3>
                                        <p className="text-sm text-zinc-500">
                                            {new Date(
                                                release.releaseDate,
                                            ).toLocaleDateString('ru-RU')}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-6 text-sm">
                                        <div className="text-center">
                                            <p className="font-bold text-purple-400">
                                                {release.stats
                                                    ? (
                                                          release.stats
                                                              .streams / 1000
                                                      ).toFixed(0) + 'K'
                                                    : '-'}
                                            </p>
                                            <p className="text-xs text-zinc-600">
                                                streams
                                            </p>
                                        </div>
                                        <div className="text-center">
                                            <p className="font-bold text-pink-400">
                                                {release.stats
                                                    ? (
                                                          release.stats.likes /
                                                          1000
                                                      ).toFixed(1) + 'K'
                                                    : '-'}
                                            </p>
                                            <p className="text-xs text-zinc-600">
                                                likes
                                            </p>
                                        </div>
                                        <Link className="rounded-lg bg-zinc-700 p-2 transition-colors hover:bg-zinc-600">
                                            <Eye className="h-4 w-4" />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
                            <h2 className="mb-4 flex items-center gap-2 text-xl font-bold">
                                <Users className="h-5 w-5 text-purple-400" />
                                Audience
                            </h2>
                            <div className="space-y-4">
                                <div>
                                    <div className="mb-2 flex justify-between text-sm">
                                        <span className="text-zinc-400">
                                            Spotify
                                        </span>
                                        <span className="font-semibold">
                                            45%
                                        </span>
                                    </div>
                                    <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
                                        <div
                                            className="h-full bg-green-500"
                                            style={{ width: '45%' }}
                                        ></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="mb-2 flex justify-between text-sm">
                                        <span className="text-zinc-400">
                                            Apple Music
                                        </span>
                                        <span className="font-semibold">
                                            30%
                                        </span>
                                    </div>
                                    <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
                                        <div
                                            className="h-full bg-purple-500"
                                            style={{ width: '30%' }}
                                        ></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="mb-2 flex justify-between text-sm">
                                        <span className="text-zinc-400">
                                            YouTube Music
                                        </span>
                                        <span className="font-semibold">
                                            15%
                                        </span>
                                    </div>
                                    <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
                                        <div
                                            className="h-full bg-red-500"
                                            style={{ width: '15%' }}
                                        ></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="mb-2 flex justify-between text-sm">
                                        <span className="text-zinc-400">
                                            SoundCloud
                                        </span>
                                        <span className="font-semibold">
                                            10%
                                        </span>
                                    </div>
                                    <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
                                        <div
                                            className="h-full bg-orange-500"
                                            style={{ width: '10%' }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
                            <div className="mb-4 flex items-center justify-between">
                                <div className="rounded-lg bg-green-600/20 p-3">
                                    <Music className="h-6 w-6 text-green-400" />
                                </div>
                            </div>
                            <p className="mb-1 text-2xl font-bold">
                                {myReleases.length}
                            </p>
                            <p className="text-sm text-zinc-500">
                                Total Releases
                            </p>
                        </div>
                    </div>
                </div>

                <div className="md-8">
                    <div className="relative mb-12">
                        <div className="h-48 rounded-2xl bg-gradient-to-r from-purple-900 to-pink-900"></div>
                        <div className="absolute -bottom-16 left-8 flex items-end gap-6">
                            <img
                                src={'#'}
                                alt={'#'}
                                className="h-32 w-32 rounded-full border-4 border-zinc-950 object-cover shadow-xl"
                            />
                            <div className="mb-4">
                                <h1 className="mb-2 text-4xl font-bold text-white">
                                    {user.name}
                                </h1>
                                <p className="text-zinc-300">{'2'} releases</p>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <div className="mb-8 grid gap-6 lg:grid-cols-2">
                            <div className="rounded-xl bg-zinc-900 p-6">
                                <h2 className="mb-3 text-xl font-bold">
                                    About
                                </h2>
                                <p className="text-zinc-400">
                                    {profile?.about ||
                                        'No information available.'}
                                </p>
                            </div>

                            <div className="rounded-xl bg-zinc-900 p-6">
                                <h2 className="mb-3 text-xl font-bold">
                                    Social Media
                                </h2>
                                <div className="flex flex-wrap gap-3">
                                    <a
                                        key={'instagram'}
                                        href={profile?.instagram || '#'}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 rounded-lg bg-zinc-800 px-4 py-3 transition-colors hover:bg-zinc-700"
                                    >
                                        <span className="text-xl">📷</span>
                                        <span>Instagram</span>
                                        <ExternalLink className="h-4 w-4 text-zinc-600" />
                                    </a>
                                    <a
                                        key={'twitter'}
                                        href={profile?.twitter || '#'}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 rounded-lg bg-zinc-800 px-4 py-3 transition-colors hover:bg-zinc-700"
                                    >
                                        <span className="text-xl">🐦</span>
                                        <span>Twitter</span>
                                        <ExternalLink className="h-4 w-4 text-zinc-600" />
                                    </a>
                                    <a
                                        key={'youtube'}
                                        href={profile?.youtube || '#'}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 rounded-lg bg-zinc-800 px-4 py-3 transition-colors hover:bg-zinc-700"
                                    >
                                        <span className="text-xl">▶️</span>
                                        <span>YouTube</span>
                                        <ExternalLink className="h-4 w-4 text-zinc-600" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
