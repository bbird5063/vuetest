<template>
  <div class="app">
    <form @submit.prevent> <!-- чтобы не было перезагрузки мы откл. действия по умолчанию -->
      <h4>Создание поста</h4>
      <!-- при помощи зарегитриваного слова $event мы обошлись без функции  -->
      <!-- 
        "title = $event.target.value"  - для body тоже самое делает функция: 
        this.body = event.target.value
        Для тегов ненужно "this."

        Двустороннее связывание
        --------------------------------
        v-bind:value="title":
        v-bind - связывает атрибуты тега с выражением: v-bind:value="title" - 
        Аргумент "value" тега "input" свазана с моделью "title" (из data())
        МЫ К ИНПУТУ ... БАЙДИМ МОДЕЛЬ ...

         @input="title = $event.target.value":
        При вводе данных(@input) они присваиваются переменной title(this.title)
        @input="title = $event.target.value". Причем присваиваются посимвольно.
        Поэтому набирая текст в инпуте мы видим, как посимвольно этот текст 
        появляется ИР(Vue), т.е. сразу заносятся в нашу модель.
        Если эту директиву убрать:
        набор текста (в ИР(Vue)) в переменной (модели) сразу появляются в инпуте, 
        а наоборот не работает - рассинхрон. Модель мы забандили, но мы не отслеживаем 
        изменения в инпуте.

        v-bind:value="title" - изменения в "title" -> "input value"
        @input="title = $event.target.value" - изменения в "input" -> "title"
        .target. - это сам input
      -->

      <input
        v-bind:value="title"
        @input="title = $event.target.value"
        class="input"
        type="text"
        placeholder="Название"
      >
      <input
        v-bind:value="body"
        @input="inputBody"
        class="input"
        type="text"
        placeholder="Описание"
      >
      <button
        class="btn"
        @click="createPost"
      >Создать</button>
    </form>

    <div
      class="post"
      v-for="post in posts"
    >
      <div><strong>Название: </strong>{{ post.title }}</div>
      <div><strong>Описание: </strong>{{ post.body }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        { id: 1, title: 'JavaScript 1', body: 'Описание поста 1' },
        { id: 2, title: 'JavaScript 2', body: 'Описание поста 2' },
        { id: 3, title: 'JavaScript 3', body: 'Описание поста 3' },
        { id: 4, title: 'JavaScript 4', body: 'Описание поста 4' },
      ],
      id: null,
      title: '', // модель
      body: ''
    }
  },

  methods: {
    createPost(event) {
      const newPost = {
        id: Date.now(),
        title: this.title,
        body: this.body,
      }
      this.posts.push(newPost);
      this.title = this.body = '';
    },

    inputBody(event) {
      this.body = event.target.value; // target это сам input
      console.log(event); // ввод каждого символа это event
    }

  }
}
</script>

<style>
* {
  /* полное обнуление отступов */
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}

.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
}

form {
  display: flex;
  flex-direction: column;
}

.input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}

.btn {
  align-self: flex-end;
  margin-top: 15px;
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
}
</style>