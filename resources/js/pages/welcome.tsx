import { InfiniteScroll } from '@inertiajs/react';
import { Head, Link, usePage } from '@inertiajs/react';
import { Calendar } from 'lucide-react';
import { useState } from 'react';
import release from '@/routes/release';
import type { Auth, PaginateAuthorRelease } from '@/types';

export default function Welcome() {
    const page = usePage<{
        auth: Auth;
        releases: PaginateAuthorRelease;
    }>();
    const { releases } = page.props;
    //const { data: releaseData } = releases;

    console.log(page);

    const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
    // const sortedReleases = useMemo(() => {
    //     return [...releaseData].sort((a, b) => {
    //         const dateA = new Date(a.release_date).getTime();
    //         const dateB = new Date(b.release_date).getTime();

    //         return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    //     });
    // }, [sortOrder]);

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

                <div>
                    <InfiniteScroll
                        buffer={500}
                        loading={() => 'Loading more users...'}
                        data="releases"
                        className="grid grid-cols-2 gap-6 lg:grid-cols-3 xl:grid-cols-4"
                    >
                        {releases.data.map((releaseItem) => (
                            <Link
                                href={release.getone(releaseItem.id)}
                                key={releaseItem.id}
                                className="group overflow-hidden rounded-xl bg-zinc-900 transition-all duration-300 hover:scale-105 hover:bg-zinc-800 hover:shadow-xl hover:shadow-purple-900/20"
                            >
                                <div className="aspect-square overflow-hidden">
                                    <img
                                        src={releaseItem.cover_image}
                                        alt={releaseItem.title}
                                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>

                                <div className="p-4">
                                    <h3 className="mb-1 text-lg font-bold transition-colors group-hover:text-purple-400">
                                        {releaseItem.title}
                                    </h3>
                                    <p className="mb-3 text-sm text-zinc-400">
                                        {releaseItem.user?.name}
                                    </p>

                                    <div className="flex items-center justify-between text-xs text-zinc-500">
                                        <span>
                                            {new Date(
                                                releaseItem.release_date,
                                            ).toLocaleDateString('ru-RU')}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </InfiniteScroll>
                </div>
            </div>
        </>
    );
}
