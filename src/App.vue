<template>
  <div>
    <div>Count likes: {{ cntLikes }}</div> <!--текстовая интерполяция-->
    <div>Count dislikes: {{ cntDislikes }}</div>
    <button @click="addLike">Like</button>
    <button @click="addDislike">Dislike</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cntLikes: 0, // объявление переменных, которые связываются с '{{...}}'' - текстовая интерполяция
      cntDislikes: 0,
    }
  },

  methods: {
    addLike() {
      this.cntLikes++;
    },
    addDislike() {
      this.cntDislikes++;
    },
  },
}
</script>

<style scoped></style>