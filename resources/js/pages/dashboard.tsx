import { Head, usePage } from '@inertiajs/react';
import CreateReleaseDialog from '@/components/dashboard/create-release-dialog';
import UserProfile from '@/components/dashboard/user-profile';
import UserReleaseList from '@/components/dashboard/user-release-list';
import UserReleaseState from '@/components/dashboard/user-release-state';
import type { Auth, Release } from '@/types';

export default function Dashboard() {
    const page = usePage<{
        auth: Auth;
        releases?: Release[];
    }>();
    const { auth, releases } = page.props;
    const user = auth.user;

    return (
        <>
            <Head title="Dashboard" />
            <div className="mx-auto max-w-7xl">
                <div className="mb-8 flex">
                    <div>
                        <h1 className="mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-4xl font-bold text-transparent">
                            Dashboard
                        </h1>
                        <p className="text-zinc-400">
                            Welcome back, {user.name}
                        </p>
                    </div>
                    <CreateReleaseDialog />
                </div>
                <div className="mb-8 grid gap-6 lg:grid-cols-3">
                    <UserReleaseList myReleases={releases} />
                    <UserReleaseState myReleases={releases} />
                </div>
                <UserProfile user={user} releaseCount={releases?.length} />
            </div>
        </>
    );
}
