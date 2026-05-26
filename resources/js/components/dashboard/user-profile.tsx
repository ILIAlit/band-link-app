//import { useHttp } from '@inertiajs/react';
import { Form } from '@inertiajs/react';
import { ExternalLink } from 'lucide-react';
import { useState } from 'react';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogTitle,
    DialogDescription,
    DialogClose,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import dashboard from '@/routes/dashboard';
//import profile from '@/routes/profile';
import type { User, Profile } from '@/types';

export default function UserProfile({
    user,
    profile: profileData,
    releaseCount,
}: {
    user: User;
    profile?: Profile;
    releaseCount: number | undefined;
}) {
    const [inputAbout, setInputAbout] = useState(profileData?.about || '');
    const [inputInstagram, setInputInstagram] = useState(
        profileData?.instagram || '',
    );
    const [inputTwitter, setInputTwitter] = useState(
        profileData?.twitter || '',
    );
    const [inputYoutube, setInputYoutube] = useState(
        profileData?.youtube || '',
    );

    //const { get } = useHttp();

    // function search() {
    //     get(profile.get(3).url, {
    //         onSuccess: (response) => {
    //             console.log('Profile data:', response);
    //         },
    //     });
    // }

    // search();

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
            <div className={'flex justify-center'}>
                <Dialog>
                    <DialogTrigger>
                        <Button
                            className={
                                'bg-purple-600 text-white transition-colors'
                            }
                        >
                            Edit profile
                        </Button>
                    </DialogTrigger>

                    <DialogContent>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile.
                        </DialogDescription>

                        <div className="flex flex-col gap-3">
                            <Form
                                action={dashboard.update()}
                                disableWhileProcessing
                                className="flex flex-col gap-6"
                            >
                                {({ processing, errors }) => (
                                    <>
                                        <div className="grid gap-6">
                                            <div className="grid gap-2">
                                                <Label htmlFor="name">
                                                    Avatar
                                                </Label>
                                                <Input
                                                    id="avatar"
                                                    type="file"
                                                    autoFocus
                                                    tabIndex={0}
                                                    autoComplete="avatar"
                                                    name="avatar"
                                                    placeholder="avatar"
                                                />
                                                <Input
                                                    id="avatarSrc"
                                                    type="text"
                                                    autoFocus
                                                    tabIndex={8}
                                                    autoComplete="avatarSrc"
                                                    name="avatarSrc"
                                                    placeholder="avatar URL"
                                                    value={
                                                        profileData?.avatar ||
                                                        ''
                                                    }
                                                />
                                                <InputError
                                                    message={errors.about}
                                                    className="mt-2"
                                                />
                                            </div>
                                            <div className="grid gap-2">
                                                <Label htmlFor="name">
                                                    About
                                                </Label>
                                                <Input
                                                    id="about"
                                                    type="text"
                                                    autoFocus
                                                    tabIndex={1}
                                                    autoComplete="about"
                                                    name="about"
                                                    placeholder="about"
                                                    value={inputAbout}
                                                    onChange={(event) =>
                                                        setInputAbout(
                                                            event.target.value,
                                                        )
                                                    }
                                                />
                                                <InputError
                                                    message={errors.about}
                                                    className="mt-2"
                                                />
                                            </div>

                                            <div className="grid gap-2">
                                                <Label htmlFor="email">
                                                    Instagram
                                                </Label>
                                                <Input
                                                    id="instagram"
                                                    type="text"
                                                    tabIndex={2}
                                                    autoComplete="instagram"
                                                    name="instagram"
                                                    placeholder="Instagram"
                                                    value={inputInstagram}
                                                    onChange={(event) =>
                                                        setInputInstagram(
                                                            event.target.value,
                                                        )
                                                    }
                                                />
                                                <InputError
                                                    message={errors.instagram}
                                                />
                                            </div>

                                            <div className="grid gap-2">
                                                <Label htmlFor="twitter">
                                                    Twitter
                                                </Label>
                                                <Input
                                                    id="twitter"
                                                    tabIndex={3}
                                                    autoComplete="twitter"
                                                    name="twitter"
                                                    placeholder="Twitter"
                                                    value={inputTwitter}
                                                    onChange={(event) =>
                                                        setInputTwitter(
                                                            event.target.value,
                                                        )
                                                    }
                                                />
                                                <InputError
                                                    message={errors.twitter}
                                                />
                                            </div>

                                            <div className="grid gap-2">
                                                <Label htmlFor="password_confirmation">
                                                    YouTube
                                                </Label>
                                                <Input
                                                    id="youtube"
                                                    tabIndex={4}
                                                    autoComplete="youtube"
                                                    name="youtube"
                                                    placeholder="YouTube"
                                                    value={inputYoutube}
                                                    onChange={(event) =>
                                                        setInputYoutube(
                                                            event.target.value,
                                                        )
                                                    }
                                                />
                                                <InputError
                                                    message={errors.youtube}
                                                />
                                            </div>
                                            <div
                                                className={
                                                    'mt-4 flex justify-end gap-3'
                                                }
                                            >
                                                <DialogClose>
                                                    <a className="mr-4">
                                                        Cancel
                                                    </a>
                                                </DialogClose>
                                                <DialogClose>
                                                    <Button
                                                        type="submit"
                                                        tabIndex={5}
                                                    >
                                                        {processing && (
                                                            <Spinner />
                                                        )}
                                                        Save
                                                    </Button>
                                                </DialogClose>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </Form>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
}
