<template>
  <div>
    <div class="text-4xl font-bold">{{ post.title }}</div>
    <div>{{ post.body }}</div>
    <div class="italic mt-4">
      Author: <span class="text-red-500">{{ user.name }}</span>
    </div>
  </div>
</template>

<script setup>
import usePosts from "./composable/posts";
import router from "@/router";
const { currentRoute } = router;
const { fetchPost, post, user } = usePosts();
fetchPost(currentRoute.value.params.id);
</script>

<style></style>
