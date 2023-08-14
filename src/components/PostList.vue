<template>
  <!-- posts из "props: {posts: ..." -->
  <div
    class="post"
    v-for="post in posts"
  >
    <div><strong>Название: </strong>{{ post.title }}</div>
    <div><strong>Описание: </strong>{{ post.body }}</div>
  </div>
</template>

<script>
export default {
  props: {
    posts: { // то что мы ОЖИДАЕМ (ожидаем из app)
      type: Array,
      required: true, // обязательные
    }
  }
}
</script>

<style scoped>
.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
}
</style>