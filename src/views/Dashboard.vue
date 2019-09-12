<template>
<div class="dashboard">
    <v-layout row wrap>
        <v-flex xs12 sm6 md3 v-for="(i,n) in menus" :key="n">
            <a @click="goTodetail(i.route)">
                <v-hover v-slot:default="{ hover }">
                    <v-card :elevation="hover ? 12 : 2" class="text-xs-center ma-2">
                        <v-row class="py-1 pl-1">
                            <v-col class="shrink">
                                <v-icon size="100" color="rgb(94, 183, 247)">{{i.icon}}</v-icon>
                            </v-col>
                            <v-col class="text-left">
                                <v-container class="pa-1">
                                    <h5 class="text-left">{{i.title}}</h5>
                                </v-container>
                            </v-col>
                            <a>
                                <small style="font-size:11px" class="text-xs-center ma-5">Released on 07, Apr 2018</small>
                            </a>
                        </v-row>
                    </v-card>
                </v-hover>
            </a>
        </v-flex>
        <v-flex xs10 sm6 md3>
            <v-overlay :value="overlay">
                <v-card color="primary" dark>
                    <v-card-text>
                        Loading...
                        <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
                    </v-card-text>
                </v-card>
            </v-overlay>
        </v-flex>
    </v-layout>

    <!-- <v-dialog  v-model="dialog" hide-overlay persistent width="320">
            <v-card  color="primary" dark>
                <v-card-text>
                   Loading...
                    <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
                </v-card-text>
            </v-card>
        </v-dialog> -->

</div>
</template>

<script>
import db from '../plugins/firebaseInit'
export default {
    data() {
        return {
            overlay: true,
            dialog: true,
            menus: [],
            items: [{
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
            ],

        };
    },
    computed: {

    },
    methods: {
        goTodetail(url) {
            this.$router.push(url);
        }
    },
    watch: {

    },
    mounted() {
        db.collection('menu').orderBy("title", "asc").get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                const data = {
                    'title': doc.data().title,
                    'icon': doc.data().icon,
                    'route': doc.data().route
                }
                this.overlay = false;
                this.menus.push(data);
            })
        })
    },
    created() {}
};
</script>

<style scoped>
.portrait.v-card {
    margin: 0 auto;
    max-width: 600px;
    width: 100%;
}
</style>
