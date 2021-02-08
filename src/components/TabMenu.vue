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
              </div>
            </nav>

<!--
  <header>
    <ol>
      <li v-for="(item, index) in items" :key=index>
         <router-link v-bind:to=item.path>
            {{ item.title }}
         </router-link>
      </li>
    </ol>
  </header>
-->
</template>

<script>
export default {
  name: 'TabMenu',
  data () {
    return {
      items: [
        { title: 'top', path: '/' },
        { title: 'about', path: '/about' },
        { title: 'skills', path: '/skills' },
        { title: 'outputs', path: '/outputs' },
        { title: 'posts', path: '/post'}
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
@media screen and (max-width:800px){
    .collapse {
        display: none;
    }
    .sp {
        display: block;
    }
    nav {
    height: 80px;
    }
    ul {
        overflow: hidden;
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
