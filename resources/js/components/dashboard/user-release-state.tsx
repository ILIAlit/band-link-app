import { useHttp } from '@inertiajs/react';
import { Music, Users, ViewIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import stat from '@/routes/stat';
import type { Release, Stats } from '@/types';
import { Spinner } from '../ui/spinner';

export default function UserReleaseState({
    myReleases,
}: {
    myReleases: Release[] | undefined;
}) {
    const [stats, setStats] = useState<Stats>();
    const [load, setLoad] = useState(true);
    const { get } = useHttp();

    useEffect(() => {
        get(stat.get().url, {
            onSuccess: (response: any) => {
                setStats(response.stats);
            },
            onFinish: () => {
                setLoad(false);
            },
        });
    }, [get]);

    const calcAllRedirect = (statData: Stats | undefined) => {
        return statData
            ? Object.values(statData).reduce((sum, value) => sum + value)
            : 0;
    };

    const calcStat = (platformCount: number | undefined) => {
        const totalViews = calcAllRedirect(stats);

        return platformCount
            ? Math.round((100 * platformCount) / totalViews)
            : 0;
    };

    if (!myReleases?.length) {
        return (
            <div className="py-20 text-center">
                <h2 className="text-2xl font-bold text-zinc-400">
                    Release not found
                </h2>
            </div>
        );
    }

    if (load) {
        return (
            <div className="md-8 flex h-64 items-center justify-center rounded-xl bg-zinc-900">
                <Spinner className="size-9" />
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
                <h2 className="mb-4 flex items-center gap-2 text-xl font-bold">
                    <Users className="h-5 w-5 text-purple-400" />
                    Audience {}
                </h2>
                <div className="space-y-4">
                    <div>
                        <div className="mb-2 flex justify-between text-sm">
                            <span className="text-zinc-400">Spotify</span>
                            <span className="font-semibold">
                                {calcStat(stats?.spotify_url)}
                            </span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
                            <div
                                className="h-full bg-green-500"
                                style={{
                                    width: calcStat(stats?.spotify_url) + '%',
                                }}
                            ></div>
                        </div>
                    </div>
                    <div>
                        <div className="mb-2 flex justify-between text-sm">
                            <span className="text-zinc-400">Apple Music</span>
                            <span className="font-semibold">
                                {calcStat(stats?.apple_music_url)}
                            </span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
                            <div
                                className="h-full bg-purple-500"
                                style={{
                                    width:
                                        calcStat(stats?.apple_music_url) + '%',
                                }}
                            ></div>
                        </div>
                    </div>
                    <div>
                        <div className="mb-2 flex justify-between text-sm">
                            <span className="text-zinc-400">YouTube Music</span>
                            <span className="font-semibold">
                                {calcStat(stats?.youtube_music_url)}
                            </span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
                            <div
                                className="h-full bg-red-500"
                                style={{
                                    width:
                                        calcStat(stats?.youtube_music_url) +
                                        '%',
                                }}
                            ></div>
                        </div>
                    </div>
                    <div>
                        <div className="mb-2 flex justify-between text-sm">
                            <span className="text-zinc-400">SoundCloud</span>
                            <span className="font-semibold">
                                {calcStat(stats?.sound_cloud_url)}
                            </span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
                            <div
                                className="h-full bg-orange-500"
                                style={{
                                    width:
                                        calcStat(stats?.sound_cloud_url) + '%',
                                }}
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
                <p className="mb-1 text-2xl font-bold">{myReleases.length}</p>
                <p className="text-sm text-zinc-500">Total Releases</p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
                <div className="mb-4 flex items-center justify-between">
                    <div className="rounded-lg bg-blue-600/20 p-3">
                        <ViewIcon className="h-6 w-6 text-blue-400" />
                    </div>
                </div>
                <p className="mb-1 text-2xl font-bold">
                    {calcAllRedirect(stats)}
                </p>
                <p className="text-sm text-zinc-500">Total Views</p>
            </div>
        </div>
    );
}
