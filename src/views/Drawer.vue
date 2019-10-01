<template>
<v-navigation-drawer app v-model="$store.state.drawer">
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
            <v-list-group sub-group color="grey" v-for="(item,k) in items" :key="k" v-model="item.active"  :prepend-icon="item.icon" rounded>
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

    <!-- <v-list>
        <v-list-group sub-group value="true" v-for="(item,k) in items" :key="k" v-model="item.active" >
            <template v-slot:activator>
                <v-list-item-content>
                    <v-list-item-title>{{item.title}}</v-list-item-title>
                </v-list-item-content>
            </template>

            <v-list-item v-for="subItem in item.items" :key="subItem.title" router :to="subItem.route" link>
                 <v-list-item-icon >
                          <v-icon color="#1a8470">mdi-menu-right-outline</v-icon>
                    </v-list-item-icon>
                <v-list-item-title v-text="subItem.title"></v-list-item-title>
               
            </v-list-item>
        </v-list-group>
    </v-list> -->
</v-navigation-drawer>
</template>

<script>
export default {
    data: function () {
        return {
            admins: [
                ['Management', 'people_outline'],
                ['Settings', 'settings'],
            ],
            cruds: [
                ['Create', 'add'],
                ['Read', 'insert_drive_file'],
                ['Update', 'update'],
                ['Delete', 'delete'],
            ],
            count: 0,
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
        }
    }
}
</script>
