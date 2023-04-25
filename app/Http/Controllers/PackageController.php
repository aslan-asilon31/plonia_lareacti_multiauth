<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Package;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;

class PackageController extends Controller
{
    public function index()
    {
        return Package::select('id','country','description_package','price')->get();
    }
}
