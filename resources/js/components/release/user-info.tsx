import { Link } from '@inertiajs/react';

export default function UserInfo({
    id,
    name,
    avatar,
}: {
    id: number;
    name: string;
    avatar: string | undefined;
}) {
    return (
        <>
            <Link className="group mb-4 inline-flex items-center gap-3">
                {avatar ? (
                    <img
                        src={avatar}
                        alt={`${name}'s avatar`}
                        className="h-15 w-15 rounded-full border-4 border-zinc-950 object-cover shadow-xl"
                    />
                ) : (
                    <div className="flex h-15 w-15 items-center justify-center rounded-full border-4 border-zinc-950 bg-zinc-800 text-3xl font-bold text-white shadow-xl">
                        {name.charAt(0).toUpperCase()}
                    </div>
                )}
                <span className="text-xl text-zinc-300 transition-colors group-hover:text-purple-400">
                    {name}
                </span>
            </Link>
        </>
    );
}
