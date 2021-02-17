<template>

<nav class="navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
  <!-- pc -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto">

          <li class="nav-item "v-for="(item, index) in items" :key=index>
              <router-link class="nav-link px-4 py-3" v-bind:to=item.path>
                  {{ item.title }}
              </router-link>

          </li>
        </ul>
      </div>

      <!-- sp -->
      <ul class="sp px-5">

        <li class="nav "v-for="(item, index) in items" :key=index>

          <router-link class="ancar text-white" v-bind:to=item.path>
              {{ item.title }}
          </router-link>

        </li>
      </ul>

    </div>
</nav>


</template>

<script>
export default {
  name: 'TabMenu',
  data () {
    return {
      items: [
        { title: 'Top', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Skills', path: '/skills' },
        { title: 'Outputs', path: '/outputs' },
        { title: 'Posts', path: '/post'}
      ]

    }
  }
}
</script>

<style scoped>

nav {
    height: 56px;
}
.nav-link:hover {
    background-color: rgba(9,1,95,0.5);
    transition: 0.5s;
}
.sp {
    display: none;
}

@media(max-width:1000px){
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.collapse {
        display: none;
}

.sp {
        display: block;
}

nav {
  height: 50px;
}

ul {
    overflow: hidden;
    text-align: center;
  }

ul li {
        float: left;
        list-style: none;
}

.ancar {
        display: block;
        padding: 4px 4px;
}

}
</style>
