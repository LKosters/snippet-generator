<template>
  <div class="py-10">
    <div class="max-w-screen-xl px-5 lg:px-0 mx-auto">
      <h1 class="font-bold text-4xl mb-8">Share your code snippets</h1>
      <form @submit.prevent="insertSnippet">
        <label class="form-control w-full max-w-xs">
          <div class="label">
            <span class="label-text">Snippet name</span>
          </div>
          <input v-model="snippet.name" type="text" placeholder="Type snippet name" class="input input-bordered w-full max-w-xs" />
        </label>
        <div class="mockup-code my-8">
          <textarea
              class="textarea textarea-ghost w-full bg-transparent !outline-none !border-none min-h-96"
              placeholder="Type your code"
              v-model="snippet.code">
          </textarea>
        </div>
        <div>
          <button type="submit" class="btn btn-primary" to="/"> Share snippet </button>
        </div>
        <div v-if="showSuccessMessage" class="text-green-500 mt-4">
          Snippet created successfully!
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
const supabase = SupabaseClient()

const snippet = ref({ name: '', code: '' })
const showSuccessMessage = ref(false)

async function insertSnippet() {
  const { data, error } = await supabase
      .from('snippets')
      .insert([
        { name: snippet.value.name , code: snippet.value.code },
      ])
      .select()

  await navigateTo('/snippets/' + data[0].key)

  if (error) {
    console.error('Error inserting snippet:', error.message)
  } else {
    showSuccessMessage.value = true
    snippet.value = { name: '', code: '' }
  }
}
</script>

<style scoped>
.textarea-ghost:focus, .textarea-ghost {
 @apply !text-base;
}
</style>
