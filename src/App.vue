<template>
  <div>
    <!-- App.vue -->
    <v-app app>
      <v-navigation-drawer app v-model="drawer" dark>
        <v-card color="blue-grey darken-2">
          <v-list>
            <v-list-item>
              <v-list-item-avatar>
                <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
              </v-list-item-avatar>
            </v-list-item>

            <v-list-item link two-line>
              <v-list-item-content>
                <v-list-item-title class="title">Savan resorts</v-list-item-title>
                <v-list-item-subtitle>IT@Savanresorts.com</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-icon>mdi-menu-down</v-icon>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-card>
        <v-divider></v-divider>

        <v-list dense nav>
          <v-list-item v-for="item in items" :key="item.title" router :to="item.route" link>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar app dark>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

         <v-toolbar-title router-link to="/">RMS</v-toolbar-title>
        <!-- size="36" -->
        <div class="flex-grow-1"></div>

        <v-btn class="mx-2" fab dark outlined small router-link to="/">
          <v-icon>mdi-home</v-icon>
        </v-btn>

        <v-menu left bottom>
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item v-for="n in 5" :key="n" @click="() => {}">
              <v-list-item-title>Option {{ n }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>
      <!-- Sizes your content based upon application components -->
      <v-content>
        <!-- Provides the application the proper gutter -->
        <v-container app fluid>
          <!-- If using vue-router -->
       <transition name="fade">
            <router-view />
          </transition>
        </v-container>
      </v-content>
      <v-footer app>
        <!-- -->
      </v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      items: [
        { title: "Users Management", icon: "mdi-account", route: "/about" },
        { title: "Menu Management", icon: "mdi-account", route: "/Menu" },
        { title: "Report", icon: "mdi-file-chart", route: "/reports" },
        { title: "Log", icon: "mdi-account-group-outline", route: "/Users" }
      ]
    };
  }
};
</script>

<style >
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>