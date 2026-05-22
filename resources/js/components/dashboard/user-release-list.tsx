import { Link } from '@inertiajs/react';
import { Eye, BarChart3 } from 'lucide-react';
import { useState } from 'react';
import type { Release } from '@/types';

export default function UserReleaseList({
    myReleases,
}: {
    myReleases: Release[];
}) {
    const [timeRange, setTimeRange] = useState<'7d' | '30d' | 'all'>('30d');

    return (
        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 lg:col-span-2">
            <div className="mb-6 flex items-center justify-between">
                <h2 className="flex items-center gap-2 text-xl font-bold">
                    <BarChart3 className="h-5 w-5 text-purple-400" />
                    Performance Overview
                </h2>
                <select
                    value={timeRange}
                    onChange={(e) =>
                        setTimeRange(e.target.value as '7d' | '30d' | 'all')
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
                                <p className="font-bold text-pink-400">Share</p>
                            </div>
                            <Link className="rounded-lg bg-zinc-700 p-2 transition-colors hover:bg-zinc-600">
                                <Eye className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
