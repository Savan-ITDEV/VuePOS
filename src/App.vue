<template>
  <div>
    <!-- App.vue -->
    <v-app app color="#2fb7bd">
      <v-navigation-drawer app v-model="drawer" >
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
        <!-- <v-divider></v-divider> -->

        <!-- <v-list dense nav>
          <v-list-item v-for="item in items" :key="item.title" router :to="item.route" link>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>-->

        <v-list dense nav rounded>
          <v-list-group
            color="grey"
            v-for="item in items"
            :key="item.title"
            v-model="item.active"
            :prepend-icon="item.icon"
            rounded
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              v-for="subItem in item.items"
              :key="subItem.title"
              router
              :to="subItem.route"
              link
            >
              <v-list-item-icon>
                <v-icon color="#1a8470">mdi-menu-right-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="subItem.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar app color="#2fb7bd">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title router-link to="/">
          <label class="white--text">RMS</label>
        </v-toolbar-title>

        <!-- size="36" -->
        <div class="flex-grow-1"></div>

        <b-button @click="home" type="is-primary">Getdata</b-button>

        <v-btn class="mx-2" fab dark outlined small router-link to="/">
          <v-icon>mdi-home</v-icon>
        </v-btn>

        <!--   <v-menu left bottom>
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
        </v-menu>-->
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
        {
          title: "Administrator",
          icon: "mdi-account",
          items: [
            {
              title: "Users Config",
              route: "/UserConfig",
              icon: "mdi-menu-right-outline"
            },
            {
              title: "Menu Config",
              route: "/MenuConfig",
              icon: "mdi-book-open-outline"
            },
            {
              title: "SMTP Config",
              route: "/SmtpConfig",
              icon: "mdi-contact-mail-outline"
            }
          ]
        },
        {
          title: "Management",
          icon: "mdi-file-document-box",
          items: [
            { title: "Canteen  ", route: "/Canteen", icon: "mdi-account" },
            { title: "feedback   ", route: "/Feedback", icon: "mdi-account" },
            { title: "Leave  ", route: "/Leave" },
            { title: "SR Extension", route: "/Extension" },
            { title: "Attendance  ", route: "/Attendance" },
            { title: "POS  ", route: "/POS" },
            { title: "Employee  ", route: "/Employee" },
            { title: "Security FP  ", route: "/Security" },
            { title: "Probation Notification", route: "/Probation" },
            { title: "SRQ ", route: "/SRQ" },
            { title: "SPA ", route: "/SPA" },
            { title: "Exempted ", route: "/Exempted" }
          ]
        },
        {
          title: "Report",
          icon: "mdi-file-chart",
          items: [{ title: "Log", route: "/log" }]
        }
      ]
    };
  },
   async created() {
     // const axios = require("axios");
      // axios
      //   .get("https://randomuser.me/api/")
      //   .then(function(response) {
      //     // handle success
      //     console.log(response);
      //   })
      //   .catch(function(error) {
      //     // handle error
      //     console.log(error);
      //   })
      //   .finally(function() {
      //     // always executed
      //   });
      let res = await this.$http.get('https://randomuser.me/api/')
      console.log(res.data);
      
  },
  methods: {
    home() {
     
    }
  }
};
</script>

<style >
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>