<template>
<div>

    <!-- App.vue -->
    <v-app app color="#2fb7bd">
        <v-navigation-drawer app v-model="drawer">
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
            <v-list dense nav rounded>
                <v-list-group color="grey" v-for="item in items" :key="item.title" v-model="item.active" :prepend-icon="item.icon" rounded>
                    <template v-slot:activator>
                        <v-list-item-content>
                            <v-list-item-title v-text="item.title"></v-list-item-title>
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
        </v-navigation-drawer>

        <v-app-bar app color="rgb(94, 183, 247)">
            <v-app-bar-nav-icon color="white" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title router-link to="/">
                <v-btn outlined @click="getData" class="white--text" outer-link to="/">{{$store.getters.titel}}</v-btn>
            </v-toolbar-title>
            <!-- size="36" -->
            <div class="flex-grow-1"></div>
            <v-btn icon>
                <v-badge>
                    <template v-slot:badge>3</template>
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
            <v-container app fluid>
                <!-- If using vue-router -->
                <transition name="fade">
                    <v-card>
                        <router-view />
                        <v-btn color="pink" class="mb-12 mr-3" dark small bottom right fixed fab>
                            <v-icon>mdi-plus</v-icon>
                        </v-btn>

                    </v-card>
                </transition>

            </v-container>

        </v-content>

        <v-footer app md6>
            <v-bottom-navigation class="hidden-sm-and-up" scroll-target="#scroll-area-1" hide-on-scroll absolute horizontal>
                <v-btn text color="deep-purple accent-4">
                    <span>Recents</span>
                    <v-icon>mdi-history</v-icon>
                </v-btn>
                <v-btn text color="deep-purple accent-4">
                    <span>Favorites</span>
                    <v-icon>mdi-heart</v-icon>
                </v-btn>
                <v-btn text color="deep-purple accent-4">
                    <span>Nearby</span>
                    <v-icon>mdi-map-marker</v-icon>
                </v-btn>
            </v-bottom-navigation>
        </v-footer>

    </v-app>
</div>
</template>

<script>
export default {
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
            drawer: null,
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
    },
    methods: {
        getData() {
            this.$store.commit('setTitel', 'RMS');
        }
    },

};
</script>

<style>
/* This is for documentation purposes and will not be needed in your application */

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */
    {
    opacity: 0;
}
</style>
