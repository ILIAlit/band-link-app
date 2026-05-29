import { useHttp } from '@inertiajs/react';

import { ExternalLink } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Spinner } from '@/components/ui/spinner';

import profile from '@/routes/profile';
import type { User, Profile } from '@/types';
import UpdateProfileDialog from './update-profile-dialog';

export default function UserProfile({
    user,
    releaseCount,
}: {
    user: User;
    releaseCount: number | undefined;
}) {
    const { get } = useHttp();
    const [profileData, setProfileData] = useState<Profile | undefined>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        get(profile.get(user.id).url, {
            onSuccess: (response: any) => {
                setProfileData(response.profile);
            },
            onFinish: () => {
                setLoading(false);
            },
        });
    }, [get]);

    if (loading) {
        return (
            <div className="md-8 flex h-64 items-center justify-center rounded-xl bg-zinc-900">
                <Spinner className="size-9" />
            </div>
        );
    }

    return (
        <div className="md-8">
            <div className="relative mb-12">
                <div className="h-48 rounded-2xl bg-gradient-to-r from-purple-900 to-pink-900"></div>
                <div className="absolute -bottom-16 left-8 flex items-end gap-6">
                    <img
                        src={profileData?.avatar}
                        alt={`${user.name}'s avatar`}
                        className="h-32 w-32 rounded-full border-4 border-zinc-950 object-cover shadow-xl"
                    />

                    <div className="mb-4">
                        <h1 className="mb-2 text-4xl font-bold text-white">
                            {user.name}
                        </h1>
                        <p className="text-zinc-300">
                            {releaseCount ?? 0} releases
                        </p>
                    </div>
                </div>
            </div>

            <div className="">
                <div className="mb-8 grid gap-6 lg:grid-cols-2">
                    <div className="rounded-xl bg-zinc-900 p-6">
                        <h2 className="mb-3 text-xl font-bold">About</h2>
                        <p className="text-zinc-400">
                            {profileData?.about || 'No information available.'}
                        </p>
                    </div>

                    <div className="rounded-xl bg-zinc-900 p-6">
                        <h2 className="mb-3 text-xl font-bold">Social Media</h2>
                        <div className="flex flex-wrap gap-3">
                            <a
                                key={'instagram'}
                                href={profileData?.instagram || '#'}
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
                                href={profileData?.twitter || '#'}
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
                                href={profileData?.youtube || '#'}
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
            <UpdateProfileDialog profileData={profileData} />
        </div>
    );
}
