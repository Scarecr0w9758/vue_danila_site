<template>
  <div class="mx-4 rounded bg-gray-400 shadow">
    <div class="p-2">
      <div class="font-bold">Latest Posts</div>
    </div>
    <div class="bg-white p-2 border-2 border-gray-400">
      <div v-for="post in recentPosts" :key="post.id">
        <div class="mb-2">
          -
          <router-link :key="`/post/${post.id}`" :to="`/post/${post.id}`">{{
            post.title
          }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import usePosts from "./composable/posts.js";
import { computed, onMounted, ref } from "vue";
let recentPosts = ref([]);
const { posts, fetchPosts } = usePosts();
onMounted(() => fetchPosts());
recentPosts = computed(() => {
  return posts.value.slice(-10);
});
</script>

<style></style>
