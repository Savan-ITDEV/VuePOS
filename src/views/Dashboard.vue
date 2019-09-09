<template>
  <div class="dashboard">
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm6 md3 v-for="(i,n) in items" :key="n">
          <a @click="goTodetail(i.route)">
            <v-hover v-slot:default="{ hover }">
              <v-card :elevation="hover ? 12 : 2" class="text-xs-center ma-2">
                <v-row class="py-1 pl-1">
                  <v-col class="shrink">
                    <v-icon size="100" color="cyan darken-3">{{i.icon}}</v-icon>
                  </v-col>
                  <v-col class="text-left">
                    <v-container class="pa-1">
                      <h5 class="text-left">{{i.title}}</h5>
                    </v-container>
                  </v-col>
                  <a>
                    <small
                      style="font-size:11px"
                      class="text-xs-center ma-5"
                    >Released on 07, Apr 2018</small>
                  </a>
                </v-row>
              </v-card>
            </v-hover>
          </a>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Canteen Reports ",
          icon: "mdi-food",
          route: "/canteen"
        },
        {
          title: "Customers feedback Reprots  ",
          icon: "mdi-account-group",
          route: "/feedback"
        },
        {
          title: "Leave Reports  ",
          icon: "mdi-airplane",
          route: "/home"
        },
        {
          title: "SR Extension Reports  ",
          icon: "mdi-phone-in-talk",
          route: "/home"
        },
        {
          title: "Attendance Reports ",
          icon: "mdi-calendar",
          route: "/home"
        },
        {
          title: "POS Reports",
          icon: "mdi-shopping",
          route: "/home"
        },
        {
          title: "Employee Information Reports ",
          icon: "mdi-account",
          route: "/home"
        },
        {
          title: "Security FP Reports ",
          icon: "mdi-fingerprint",
          route: "/home"
        },
        {
          title: "Probation Notification Reports ",
          icon: "mdi-account-card-details-outline",
          route: "/home"
        },
        {
          title: "SRQ Reports ",
          icon: "mdi-account-clock",
          route: "/home"
        },
        {
          title: "SPA Reports ",
          icon: "mdi-hotel",
          route: "/home"
        },
        {
          title: "Attendance exempted ",
          icon: "mdi-account-tie",
          route: "/home"
        }
      ]
    };
  },
  methods: {
    goTodetail(url) {
      this.$router.push(url);
    }
  }
};
</script>
<style scoped>
.portrait.v-card {
  margin: 0 auto;
  max-width: 600px;
  width: 100%;
}
</style>