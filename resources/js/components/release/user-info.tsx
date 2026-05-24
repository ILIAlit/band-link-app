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
            <Link
                href={`/artist/${id}`}
                className="group mb-4 inline-flex items-center gap-3"
            >
                <img
                    src={avatar}
                    alt={name}
                    className="h-12 w-12 rounded-full object-cover"
                />
                <span className="text-xl text-zinc-300 transition-colors group-hover:text-purple-400">
                    {name}
                </span>
            </Link>
        </>
    );
}
