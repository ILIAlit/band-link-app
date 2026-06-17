<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;


class CreateReleaseRequest extends FormRequest
{

    public function authorize(): bool
    {
        return true;
    }
    public function rules(): array
    {
        return [
            'cover' => 'image|mimes:jpeg,png,jpg,gif',
            'title' => 'required',
            'coverSrc' => 'nullable',
            'links'=> 'array',
            'spotify_url'=> 'nullable',
            'apple_music_url'=> 'nullable',
            'youtube_music_url'=> 'nullable',
            'sound_cloud_url'=> 'nullable',
        ];
    }
}
