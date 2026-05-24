import type { User } from '@/types';

export default function UserAbout({
    author,
}: {
    author: Pick<
        User,
        'id' | 'name' | 'avatar' | 'about' | 'instagram' | 'twitter' | 'youtube'
    >;
}) {
    console.log(author);

    return <>{}</>;
}
