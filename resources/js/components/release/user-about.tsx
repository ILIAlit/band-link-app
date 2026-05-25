import type { User } from '@/types';

export default function UserAbout({
    author,
}: {
    author: Pick<
        User,
        'id' | 'name' | 'avatar' | 'about' | 'instagram' | 'twitter' | 'youtube'
    >;
}) {
    return (
        <>
            <div className="rounded-2xl bg-zinc-900 p-8">
                <h2 className="mb-6 text-2xl font-bold">About the Artist</h2>
                <div className="flex items-start gap-6">
                    <img
                        src={author.avatar}
                        alt={author.name}
                        className="h-24 w-24 rounded-full object-cover"
                    />
                    <div className="flex-1">
                        <h3 className="mb-2 text-xl font-bold">
                            {author.name}
                        </h3>
                        <p className="mb-4 text-zinc-400">{`${author?.about}`}</p>

                        <div className="flex gap-3">
                            <a
                                key={1}
                                href={`${author?.instagram}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 rounded-lg bg-zinc-800 px-4 py-2 text-sm transition-colors hover:bg-zinc-700"
                            >
                                <span>{'📷'}</span>
                                <span>Instagram</span>
                            </a>

                            <a
                                key={2}
                                href={`${author?.twitter}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 rounded-lg bg-zinc-800 px-4 py-2 text-sm transition-colors hover:bg-zinc-700"
                            >
                                <span>{'🐦'}</span>
                                <span>Twitter</span>
                            </a>

                            <a
                                key={3}
                                href={`${author?.youtube}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 rounded-lg bg-zinc-800 px-4 py-2 text-sm transition-colors hover:bg-zinc-700"
                            >
                                <span>{'▶️'}</span>
                                <span>You tube</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
