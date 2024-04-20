<template>
  <div class="py-10">
    <div v-if="snippet" class="max-w-screen-xl px-5 lg:px-0 mx-auto">
      <h1 class="font-bold text-4xl">{{ snippet[0].name }}</h1>
      <div class="mockup-code my-8 pl-2">
        <pre><code>{{ snippet[0].code }}</code></pre>
      </div>
      <div class="mb-8">
        <button @click="copyCode(snippet[0].code)" class="btn btn-primary mr-5">
          Copy code
          <svg class="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/></svg>
        </button>
        <button @click="copyURL()" class="btn btn-secondary">
        Copy URL
          <svg class="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"/></svg>
        </button>
      </div>
      <p>
        Created on: {{ snippet[0].created_at }}
      </p>

      <dialog id="code_copy_success" class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-lg">Copied code!</h3>
          <p class="py-4">Successfully copied {{ snippet[0].name }}</p>
        </div>
        <form method="dialog" class="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <dialog id="url_copy_success" class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-lg">Copied URL!</h3>
          <p class="py-4">Thanks for sharing your code!</p>
        </div>
        <form method="dialog" class="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
    <div v-else>
      Loading...
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const snippet = ref(null)

async function getSnippet() {
  let { data: snippetData, error } = await supabase
      .from('snippets')
      .select('*')
      .eq('key', route.params.key)

  return snippetData
}

onMounted(async () => {
  snippet.value = await getSnippet()
});

// TODO: Create function that transfers the created_at date to NL standard

function copyCode(code: any) {
  navigator.clipboard.writeText(code)

  code_copy_success.showModal()
}

function copyURL() {
  const host = useRequestURL().host

  navigator.clipboard.writeText(host + route.fullPath)

  url_copy_success.showModal()
}
</script>

<style scoped>
.mockup-code pre:before {
  @apply !mr-0;
}
</style>
