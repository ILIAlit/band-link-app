<?php

namespace App\Actions\Fortify;

use Illuminate\Http\UploadedFile;


class ImageUploader
{
    public function upload(UploadedFile $image): string
    {

        $imageName = time() . '.' . $image->extension();
        $image->move(public_path('images'), $imageName);
        $imgPath = env('APP_URL') . '/images/' . $imageName;
        return $imgPath;
    }
}
