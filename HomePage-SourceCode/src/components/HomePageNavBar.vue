<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light MyNav">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Smart Financial</router-link>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/" active-class="active">Home</router-link>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'HomePageNavBar'
}
</script>

<style scoped>
li {
  height: 100%;
}

.MyNav {
  position: fixed;
  width: 100%;
  z-index: 10;
}

.active {
  color: rgb(49, 108, 244);
}

a:focus {
  color: white;
}
</style>
