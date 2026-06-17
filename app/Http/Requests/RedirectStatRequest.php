<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;


class RedirectStatRequest extends FormRequest
{

    public function all($keys = null)
    {
        $data = parent::all($keys);
        $data['platform_url'] = $this->route('platform_url');
        $data['release_id'] = $this->route('release_id');
        return $data;
    }

    
    public function rules(): array
    {
        return [
            'platform_url' => 'required',
            'release_id' => 'required| exists:releases,id',
        ];
    }
}
