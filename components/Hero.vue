<template>
  <div class="py-10">
    <div class="max-w-screen-xl px-5 lg:px-0 mx-auto">
      <h1 class="font-bold text-4xl">Share your code snippets</h1>
      <div class="mockup-code my-8">
        <textarea
          class="textarea textarea-ghost w-full bg-transparent !outline-none !border-none min-h-96"
          placeholder="your code"
        ></textarea>
      </div>
      <div>
        <NuxtLink class="btn btn-primary" to="/"> Share snippet </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
