<template>
  <nav class="navbar navbar-light navbar-expand-lg bg-light MyNav">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">HomePage</router-link>
      <ul class="nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/" active-class="active">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/test" active-class="active">Test</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'

export default {
  name: 'HomePageNavBar'
}
</script>

<style scoped>
li {
  height: 100%;
}

.MyNav {
  padding: 0;
}

.active {
  background-color: rgb(49, 108, 244);
  color: white;
}

a:focus {
  color: white;
}
</style>
