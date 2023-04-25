<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Package;

class PackageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Package::create([
            'country'	=> 'indonesia',
            'description_package'	=> 'Raja Ampat',
            'price'	=> 12000000,
        ]);
        Package::create([
            'country'	=> 'Dubai',
            'description_package'	=> 'Uni Emirat Arab',
            'price'	=> 15000000,
        ]);
        Package::create([
            'country'	=> 'Jepang',
            'description_package'	=> 'Tokyo',
            'price'	=> 16300000,
        ]);
    }
}
