import { Head, Link } from '@inertiajs/react';
import { Calendar, TrendingUp } from 'lucide-react';
import { useMemo, useState } from 'react';
import { mockReleases } from '@/data/mockData';

export default function Welcome() {
    const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
    const sortedReleases = useMemo(() => {
        return [...mockReleases].sort((a, b) => {
            const dateA = new Date(a.releaseDate).getTime();
            const dateB = new Date(b.releaseDate).getTime();

            return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
        });
    }, [sortOrder]);

    return (
        <>
            <Head title="Welcome" />
            <div>
                <div className="mb-8 flex items-center justify-between">
                    <div>
                        <h1 className="mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-4xl font-bold text-transparent">
                            Latest Releases
                        </h1>
                        <p className="text-zinc-400">
                            Discover new music from talented artists
                        </p>
                    </div>

                    <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-zinc-400" />
                        <select
                            value={sortOrder}
                            onChange={(e) =>
                                setSortOrder(
                                    e.target.value as 'newest' | 'oldest',
                                )
                            }
                            className="rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-2 text-zinc-200 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                        >
                            <option value="newest">Newest First</option>
                            <option value="oldest">Oldest First</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-6 lg:grid-cols-3 xl:grid-cols-4">
                    {sortedReleases.map((release) => (
                        <Link
                            key={release.id}
                            className="group overflow-hidden rounded-xl bg-zinc-900 transition-all duration-300 hover:scale-105 hover:bg-zinc-800 hover:shadow-xl hover:shadow-purple-900/20"
                        >
                            <div className="aspect-square overflow-hidden">
                                <img
                                    src={release.coverUrl}
                                    alt={release.title}
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-4">
                                <h3 className="mb-1 text-lg font-bold transition-colors group-hover:text-purple-400">
                                    {release.title}
                                </h3>
                                <p className="mb-3 text-sm text-zinc-400">
                                    {release.artist.name}
                                </p>

                                <div className="flex items-center justify-between text-xs text-zinc-500">
                                    <span>
                                        {new Date(
                                            release.releaseDate,
                                        ).toLocaleDateString('ru-RU')}
                                    </span>
                                    {release.stats && (
                                        <span className="flex items-center gap-1">
                                            <TrendingUp className="h-3 w-3" />
                                            {(
                                                release.stats.streams / 1000
                                            ).toFixed(0)}
                                            K
                                        </span>
                                    )}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}
