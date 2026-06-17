import { Link } from '@inertiajs/react';
import { Eye, BarChart3, Delete } from 'lucide-react';
import { useState } from 'react';
import release from '@/routes/release';
import type { Release } from '@/types';
import ShareButton from '../share-button';

export default function UserReleaseList({
    myReleases,
}: {
    myReleases: Release[] | undefined;
}) {
    const [deleteButtonHide, setDeleteButtonHide] = useState(false);

    function hideDeleteButton() {
        setDeleteButtonHide(true);
        setTimeout(() => {
            setDeleteButtonHide(false);
        }, 2000);
    }

    if (!myReleases?.length) {
        <div className="py-20 text-center">
            <h2 className="text-2xl font-bold text-zinc-400">
                Release not found
            </h2>
        </div>;
    }

    return (
        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 lg:col-span-2">
            <div className="mb-6 flex items-center justify-between">
                <h2 className="flex items-center gap-2 text-xl font-bold">
                    <BarChart3 className="h-5 w-5 text-purple-400" />
                    Performance Overview
                </h2>
            </div>

            <div className="space-y-4">
                {myReleases?.map((releaseItem) => (
                    <div
                        key={releaseItem.id}
                        className="flex items-center gap-4 rounded-lg bg-zinc-800/50 p-4 transition-colors hover:bg-zinc-800"
                    >
                        <img
                            src={releaseItem.cover_image}
                            alt={releaseItem.title}
                            className="h-16 w-16 rounded-lg object-cover"
                        />
                        <div className="min-w-0 flex-1">
                            <h3 className="mb-1 truncate font-semibold">
                                {releaseItem.title}
                            </h3>
                            <p className="text-sm text-zinc-500">
                                {new Date(
                                    releaseItem.release_date,
                                ).toLocaleDateString('ru-RU')}
                            </p>
                        </div>

                        <div className="flex items-center gap-6 text-sm">
                            <Link
                                hidden={deleteButtonHide}
                                onClick={hideDeleteButton}
                                href={release.delete(releaseItem.id)}
                            >
                                <Delete />
                            </Link>
                            <ShareButton
                                urlRelease={new URL(
                                    release.getone(releaseItem.id).url,
                                    window.location.origin,
                                ).toString()}
                            />
                            <Link
                                href={release.getone(releaseItem.id)}
                                className="rounded-lg bg-zinc-700 p-2 transition-colors hover:bg-zinc-600"
                            >
                                <Eye className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
