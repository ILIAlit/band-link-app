import { Form } from '@inertiajs/react';
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
import dashboard from '@/routes/dashboard';
import type { Profile } from '@/types';
import { Spinner } from '../ui/spinner';

export default function UpdateProfileDialog({
    profileData,
}: {
    profileData: Profile | undefined;
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

    return (
        <div className={'flex justify-center'}>
            <Dialog>
                <DialogTrigger>
                    <Button
                        className={'bg-purple-600 text-white transition-colors'}
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
                                            <Label htmlFor="name">Avatar</Label>
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
                                                    profileData?.avatar || ''
                                                }
                                            />
                                            <InputError
                                                message={errors.about}
                                                className="mt-2"
                                            />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="name">About</Label>
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
                                                <a className="mr-4">Cancel</a>
                                            </DialogClose>
                                            <DialogClose>
                                                <Button
                                                    type="submit"
                                                    tabIndex={5}
                                                >
                                                    {processing && <Spinner />}
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
    );
}
