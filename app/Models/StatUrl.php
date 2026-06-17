<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;
use App\Enums\PlatformEnum;
use App\Models\Release;

class StatUrl extends Model
{

protected $table = 'stat_urls';

    protected $fillable = [
        
        'platform_url',
        'url',
    ];
    protected $casts = [
        'platform_url' => PlatformEnum::class, 
    ];
    public function release()
    {
        return $this->belongsTo(Release::class);
    }
}


