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
            'title' => 'required'
        ];
    }
}
