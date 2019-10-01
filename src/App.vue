<template>
<div>
    <!-- App.vue -->
    <v-app app color="#2fb7bd">
         <drawers />
        <!-- <v-navigation-drawer app v-model="drawer">
            <v-list-item two-line>
                <v-list-item-avatar>
                    <img class="elevation-3" src="https://randomuser.me/api/portraits/women/81.jpg">
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title><b>Savan</b></v-list-item-title>
                    <v-list-item-subtitle>
                        <v-icon size="13" color="green">mdi-brightness-1</v-icon> online
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
              <ul>
                <li v-for="(value, key) in datas" :key="key">{{ key }}: {{ value }} </li>
            </ul> -->

        <!-- <v-list dense nav rounded>
            <v-list-group color="grey" v-for="(item,k) in datas" :key="k" v-model="item.active" rounded>
                <template v-slot:activator>
                    <v-list-item-content>
                        <v-list-item-title v-text="k"></v-list-item-title>
                    </v-list-item-content>
                </template>

                <v-list-item v-for="subItem in item.items" :key="subItem.title" router :to="subItem.route" link>
                    <v-list-item-icon>
                        <v-icon color="#1a8470">mdi-menu-right-outline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-text="subItem.title"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-group>
            </v-list>
        </v-navigation-drawer> -->

        <v-app-bar dense dark app color="rgb(94, 183, 247)">
            <v-app-bar-nav-icon color="white" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title router-link to="/">
                <v-btn outlined @click="getData" class="white--text" outer-link to="/">{{$store.getters.titel}}</v-btn>
            </v-toolbar-title>
            <!-- size="36" -->
            <div class="flex-grow-1"></div>
            <v-btn icon>
                <v-badge overlap color="orange">
                    <template v-slot:badge>10</template>
                    <v-icon color="white">mdi-email</v-icon>
                </v-badge>
            </v-btn>

            <v-btn icon>
                <v-icon color="white">mdi-chevron-right-circle-outline</v-icon>
            </v-btn>
        </v-app-bar>
        <!-- Sizes your content based upon application components -->
        <v-content>
            <!-- Provides the application the proper gutter -->
            <!-- If using vue-router -->
            <transition name="fade">
                <!-- <v-card class="pa-3 ma-3"> -->
                    <router-view class="pa-2 ma-2" />
                    <!-- <v-btn color="pink" class="ma-12"  dark bottom small  right fixed fab>
                        <v-icon>mdi-plus</v-icon>
                    </v-> -->
                <!-- </v-card> -->
            </transition>
        </v-content>

        <v-footer app>
            <v-bottom-navigation grow class="hidden-sm-and-up" scroll-target="#scroll-area-1" hide-on-scroll absolute>
                <v-btn>
                    <span>Recents</span>
                    <v-icon>mdi-history</v-icon>
                </v-btn>

                <v-btn>
                    <span>Favorites</span>
                    <v-icon>mdi-heart</v-icon>
                </v-btn>

                <v-btn>
                    <span>Nearby</span>
                    <v-icon>mdi-map-marker</v-icon>
                </v-btn>
            </v-bottom-navigation>
        </v-footer>

    </v-app>
</div>
</template>

<script>
import db from './plugins/firebaseInit'
import drawers from './views/Drawer'
export default {
    components: {
        drawers
    },
    data() {
        return {
            direction: 'top',
            fab: false,
            fling: false,
            hover: false,
            tabs: null,
            top: false,
            right: true,
            bottom: true,
            left: false,
            transition: 'slide-y-reverse-transition',
            // datas: {},
            restaurant: {},
            items: [{
                    title: "Administrator",
                    icon: "mdi-account",
                    items: [{
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
                    items: [{
                            title: "Canteen  ",
                            route: "/Canteen",
                            icon: "mdi-account"
                        },
                        {
                            title: "feedback   ",
                            route: "/Feedback",
                            icon: "mdi-account"
                        },
                        {
                            title: "Leave  ",
                            route: "/Leave"
                        },
                        {
                            title: "SR Extension",
                            route: "/Extension"
                        },
                        {
                            title: "Attendance  ",
                            route: "/Attendance"
                        },
                        {
                            title: "POS  ",
                            route: "/POS"
                        },
                        {
                            title: "Employee  ",
                            route: "/Employee"
                        },
                        {
                            title: "Security FP  ",
                            route: "/Security"
                        },
                        {
                            title: "Probation Notification",
                            route: "/Probation"
                        },
                        {
                            title: "SRQ ",
                            route: "/SRQ"
                        },
                        {
                            title: "SPA ",
                            route: "/SPA"
                        },
                        {
                            title: "Exempted ",
                            route: "/Exempted"
                        }
                    ]
                },
                {
                    title: "Report",
                    icon: "mdi-file-chart",
                    items: [{
                        title: "Log",
                        route: "/log"
                    }]
                }
            ]
        };
    },
    created() {
        // var data = new Map();
        // db.collection("menuList").doc("LA").get().then(function (docs) {
        //     // console.log(docs.data());
        //     data.push(docs.data());
        //     // this.datas.push(docs.data().Administrator);
        // })
        // //console.log(data);
        // data.forEach((val, key) => {
        //     console.log(key, val);
        // });

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
        // let res = await this.$http.get("https://randomuser.me/api/");
        // console.log(res.data);
        // const data = [];
        // db.collection("menuList").onSnapshot(function (doc) {

        //      console.log("Current data: ", doc.docs);
        //     // data.push(doc.data());

        // // });
        // db.collectionGroup('menuList').doc('LA').get().then(querySnapshot => {
        //     // console.log(querySnapshot.docs.map(doc => doc.data()));
        //     console.log(querySnapshot);
        //     //  console.log(col.data());

        // });

        // db.collection("menuList").doc("LA").set({

        // });
    },
    methods: {
        getData() {
            this.$store.commit('setTitel', 'RMS');
        }
    },
    mounted() {

        $(document).ready(function () {
            $('.v-badge__badge').css('max-height', '15px');
            $('.v-badge__badge').css('max-width', '13px');
            $('.v-badge__badge').css('font-size', '9px');
        });
    },
    computed: {
        drawer: {
            get() {
                return this.$store.state.drawer
            },
            set(value) {                     
                this.$store.commit('setDrawer', value)
            },
        },
    },
};
</script>

<style>
.v-badge__badge {
    min-width: 15px;
    height: 15px;
    font-size: 10px;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */
    {
    opacity: 0;
}
</style>
