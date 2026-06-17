import { Form } from '@inertiajs/react';
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

import release from '@/routes/release';

export default function CreateReleaseDialog() {
    return (
        <div className={'flex items-center justify-center'}>
            <Dialog>
                <DialogTrigger>
                    <Button
                        className={'bg-purple-600 text-white transition-colors'}
                    >
                        Create release
                    </Button>
                </DialogTrigger>

                <DialogContent>
                    <DialogTitle>Create release</DialogTitle>
                    <DialogDescription>Make your release.</DialogDescription>

                    <div className="flex flex-col gap-3">
                        <Form
                            action={release.create()}
                            disableWhileProcessing
                            className="flex flex-col gap-6"
                        >
                            {({ processing, errors }) => (
                                <>
                                    <div className="grid gap-6">
                                        <div className="grid gap-2">
                                            <Label htmlFor="name">Cover</Label>
                                            <Input
                                                id="cover"
                                                type="file"
                                                autoFocus
                                                tabIndex={0}
                                                autoComplete="cover"
                                                name="cover"
                                                placeholder="cover"
                                            />
                                            <Input
                                                id="coverSrc"
                                                type="text"
                                                autoFocus
                                                tabIndex={8}
                                                autoComplete="coverSrc"
                                                name="coverSrc"
                                                placeholder="cover URL"
                                            />
                                            <InputError
                                                message={errors.cover}
                                                className="mt-2"
                                            />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="name">Title</Label>
                                            <Input
                                                id="title"
                                                type="text"
                                                autoFocus
                                                tabIndex={1}
                                                autoComplete="title"
                                                name="title"
                                                placeholder="title"
                                            />
                                            <InputError
                                                message={errors.title}
                                                className="mt-2"
                                            />
                                        </div>

                                        <div className="grid gap-2">
                                            <Label htmlFor="email">
                                                Spotify
                                            </Label>
                                            <Input
                                                id="spotify_url"
                                                type="text"
                                                tabIndex={2}
                                                autoComplete="spotify_url"
                                                name="spotify_url"
                                                placeholder="Spotify"
                                            />
                                            <InputError
                                                message={errors.spotify_url}
                                            />
                                        </div>

                                        <div className="grid gap-2">
                                            <Label htmlFor="twitter">
                                                Apple music
                                            </Label>
                                            <Input
                                                id="apple_music_url"
                                                tabIndex={3}
                                                autoComplete="apple_music_url"
                                                name="apple_music_url"
                                                placeholder="Apple music"
                                            />
                                            <InputError
                                                message={errors.apple_music_url}
                                            />
                                        </div>

                                        <div className="grid gap-2">
                                            <Label htmlFor="password_confirmation">
                                                YouTube music
                                            </Label>
                                            <Input
                                                id="youtube_music_url"
                                                tabIndex={4}
                                                autoComplete="youtube_music_url"
                                                name="youtube_music_url"
                                                placeholder="YouTube music"
                                            />
                                            <InputError
                                                message={
                                                    errors.youtube_music_url
                                                }
                                            />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="password_confirmation">
                                                Sound cloud
                                            </Label>
                                            <Input
                                                id="sound_cloud_url"
                                                tabIndex={5}
                                                autoComplete="sound_cloud_url"
                                                name="sound_cloud_url"
                                                placeholder="Sound cloud"
                                            />
                                            <InputError
                                                message={errors.sound_cloud_url}
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
