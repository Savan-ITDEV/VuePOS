<template>
<div class="dashboard">
    <v-layout row wrap>
        <v-flex xs12 sm6 md3 v-for="(i,n) in menus" :key="n">
            <a @click="goTodetail(i.route)">
                <v-hover v-slot:default="{ hover }">
                    <v-card :elevation="hover ? 12 : 2" class="text-xs-center ma-2">
                        <v-row class=" pl-1">
                            <v-col class="shrink">
                                <v-icon size="100" color="rgb(94, 183, 247)">{{i.icon}}</v-icon>
                            </v-col>
                            <v-col class="text-left">
                                <v-container class="pa-1">
                                    <p class="text-left">{{i.title}}</p>
                                </v-container>
                            </v-col>
                        </v-row>
                        <v-row>
                            <small style="font-size:11px" class="text-center ml-10 mb-2">Released on 07, Apr 2018</small>
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
                        <v-progress-linear indeterminate color="white" class="mb-1"></v-progress-linear>
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
import {
    functions
} from 'firebase';
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
    created() {
        // db.collectionGroup('test1').get().then(querySnapshot => {
        //     querySnapshot.forEach(doc => {
        //         console.log(doc.id);
        //         console.log(doc.data());
        //         console.log(doc.data().name.address.city);
        //         console.log(doc.data().name.age);

        //     })
        // })

        // db.collection("test1").doc("p8d6AgLb05DM3V7xrxc9").update({
        //     "name.address.city": "laos",
        //     "name.address.provide": "savan",

        // });
        // db.collection("test1").doc("LA").set({
        //     name: "Los",
        //     state: "CA",
        //     country: 
        //     {
        //         "city": "laos",
        //         "provide": "savan",
        //         "post": "00001",
        //         test:{
        //             A:'a',
        //             B:'b'
        //         }
        //     }
        // })
        db.collection('posts').doc('demo-post').collection('comments').get().then(function (doc) {

        });
        db.collection('posts/demo-post/comments/5PEWN51cvjeN2THFcsIr/comments').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                console.log(doc);

            })
        })

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
