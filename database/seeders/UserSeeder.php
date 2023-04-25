<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
                'name'	=> 'aslanadmin',
                'role'	=> 'admin',
                'email'	=> 'aslanadmin@gmail.com',
                'password'	=> bcrypt('aslanadmin'),
                'image'	=> 'img1.jpg',
        ]);
        User::create([
                'name'	=> 'aslanuser',
                'role'	=> 'user',
                'email'	=> 'aslanuser@gmail.com',
                'password'	=> bcrypt('aslanuser'),
                'image'	=> 'img1.jpg',
        ]);
        User::create([
                'name'	=> 'aslanguest',
                'role'	=> 'guest',
                'email'	=> 'aslanguest@gmail.com',
                'password'	=> bcrypt('aslanguest'),
                'image'	=> 'img1.jpg',
        ]);
}
}
