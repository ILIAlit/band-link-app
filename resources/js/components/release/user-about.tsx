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
                    {author?.avatar ? (
                        <img
                            src={author?.avatar}
                            alt={`${author.name}'s avatar`}
                            className="h-32 w-32 rounded-full border-4 border-zinc-950 object-cover shadow-xl"
                        />
                    ) : (
                        <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-zinc-950 bg-zinc-800 text-3xl font-bold text-white shadow-xl">
                            {author.name.charAt(0).toUpperCase()}
                        </div>
                    )}
                    <div className="flex-1">
                        <h3 className="mb-2 text-xl font-bold">
                            {author.name}
                        </h3>
                        <p className="mb-4 text-zinc-400">
                            {author.about as string}
                        </p>

                        <div className="flex gap-3">
                            <a
                                hidden={!author.instagram}
                                key={1}
                                href={author?.instagram as string}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 rounded-lg bg-zinc-800 px-4 py-2 text-sm transition-colors hover:bg-zinc-700"
                            >
                                <span>{'📷'}</span>
                                <span>Instagram</span>
                            </a>

                            <a
                                hidden={!author.twitter}
                                key={2}
                                href={author?.twitter as string}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 rounded-lg bg-zinc-800 px-4 py-2 text-sm transition-colors hover:bg-zinc-700"
                            >
                                <span>{'🐦'}</span>
                                <span>Twitter</span>
                            </a>

                            <a
                                hidden={!author.youtube}
                                key={3}
                                href={author?.youtube as string}
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
