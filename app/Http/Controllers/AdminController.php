<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function showDashboard() {
        return Inertia::render('Admin/Dashboard');
    }

    public function showUsers() {
        return Inertia::render('Admin/Users', [
            'users' => User::all()
        ]);
    }
}
