<template>
  <div class="bg-blue-300">
    <div class="container mx-auto min-h-screen flex flex-col justify-center">
      <div class="text-center">
        <!-- Begin Login Box -->
        <div class="inline-block shadow-2xl bg-white rounded p-20">
          <h1 class="text-2xl font-bold">Login</h1>
          <div class="grid grid-cols-1 sm:grid-cols-3 mt-12 gap-5 items-center">
            <!-- Username input -->
            <label for="username" class="font-semibold text-lg">Username</label>
            <input
              type="text"
              id="username"
              class="p-2 w-full border rounded sm:col-span-2 focus:outline-none focus:border-blue-500"
            />

            <!-- Password input -->
            <label for="password" class="font-semibold text-lg">Password</label>
            <input
              type="password"
              id="password"
              class="p-2 w-full border rounded sm:col-span-2 focus:outline-none focus:border-blue-500"
            />
            <!-- Begin action -->
            <div class="sm:col-start-2 sm:col-span-2">
              <button
                class="bg-blue-500 font-bold text-white px-4 py-2 rounded"
              >
                Sign in
              </button>
              <button
                class="bg-white border border-blue-500 font-bold text-blue-500 px-4 py-2 rounded"
              >
                Sign Up
              </button>
            </div>
            <!-- End action -->
          </div>
        </div>
        <!-- End Login Box -->
      </div>
    </div>
  </div>
</template>
