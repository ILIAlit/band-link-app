<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;


class GetStatRequest extends FormRequest
{

    public function all($keys = null)
    {
        $data = parent::all($keys);
        $data['release_id'] = $this->route('release_id');
        return $data;
    }

    
    public function rules(): array
    {
        return [
            // 'release_id' => 'required| exists:releases,id',
        ];
    }
}
