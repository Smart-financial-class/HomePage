<template>
  <div id="titles">
    <h1 id="header">News</h1>
    <hr>
    <div id="TitlesContainer" role="list">
      <div v-for="(title, index) of titles" :key="index" role="listitem">
        <div class="dot"></div>
        <a href="#" id="title">{{ title }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsTitleList',
  props: ['titles']
}
</script>

<style scoped>

h1, hr {
  margin: 0;
}

div#titles {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;
}

div#TitlesContainer {
  display: flex;
  flex-direction: column;
  align-content: space-between;
  height: 100%;
  justify-content: space-between;
}

div#TitlesContainer > div{
  height: auto;
  display: flex;
  align-items: center;
}

a#title {
  line-height: 30px;
  text-decoration: none;
}

div.dot {
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: black;
  display: inline-block;
  margin-right: 10px;
}
</style>
