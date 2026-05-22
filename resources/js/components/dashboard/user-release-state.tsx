import { Music, Users } from 'lucide-react';
import type { Release } from '@/types';

export default function UserReleaseState({
    myReleases,
}: {
    myReleases: Release[];
}) {
    return (
        <div className="space-y-6">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
                <h2 className="mb-4 flex items-center gap-2 text-xl font-bold">
                    <Users className="h-5 w-5 text-purple-400" />
                    Audience
                </h2>
                <div className="space-y-4">
                    <div>
                        <div className="mb-2 flex justify-between text-sm">
                            <span className="text-zinc-400">Spotify</span>
                            <span className="font-semibold">45%</span>
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
                            <span className="text-zinc-400">Apple Music</span>
                            <span className="font-semibold">30%</span>
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
                            <span className="text-zinc-400">YouTube Music</span>
                            <span className="font-semibold">15%</span>
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
                            <span className="text-zinc-400">SoundCloud</span>
                            <span className="font-semibold">10%</span>
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
                <p className="mb-1 text-2xl font-bold">{myReleases.length}</p>
                <p className="text-sm text-zinc-500">Total Releases</p>
            </div>
        </div>
    );
}
