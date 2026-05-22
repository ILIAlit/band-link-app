import { Head, usePage } from '@inertiajs/react';
import UserProfile from '@/components/dashboard/user-profile';
import UserReleaseList from '@/components/dashboard/user-release-list';
import UserReleaseState from '@/components/dashboard/user-release-state';
import { mockArtists, mockReleases } from '@/data/mockData';
import type { Profile, Auth } from '@/types';

export default function Dashboard() {
    const page = usePage<{
        auth: Auth;
        profile?: Profile;
    }>();

    const { auth, profile } = page.props;
    const user = auth.user;

    const currentArtist = mockArtists[0];
    const myReleases = mockReleases.filter(
        (r) => r.artist.id === currentArtist.id,
    );

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
                    <UserReleaseList myReleases={myReleases} />
                    <UserReleaseState myReleases={myReleases} />
                </div>
                <UserProfile user={user} profile={profile} />
            </div>
        </>
    );
}
