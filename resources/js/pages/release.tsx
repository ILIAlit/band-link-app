import { Head, usePage } from '@inertiajs/react';

export default function Release({ id }: { id: string }) {
    console.log(usePage());

    return (
        <>
            <Head title="Release" />
            release{id}
        </>
    );
}
