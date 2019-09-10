<template>
<div class="about">
    <v-card class="pa-2">
      <v-list>
          <v-list-item-group >
        <v-list-item>
             <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Users management</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
          </v-list-item-group>
      </v-list>

        <v-row class="mb-6" justify="letf">
            <v-col lg="2">
                <b-field class="text-center">
                    <b-datepicker v-model="from" :first-day-of-week="1" placeholder="From">

                        <button class="button is-primary" @click="from = new Date()">
                            <b-icon icon="calendar-today"></b-icon>
                            <span>Today</span>
                        </button>

                        <button class="button is-danger" @click="from = null">
                            <b-icon icon="close"></b-icon>
                            <span>Clear</span>
                        </button>
                    </b-datepicker>
                </b-field>
            </v-col>
            <v-col lg="2">
                <b-field class="text-center">
                    <b-datepicker v-model="to" :first-day-of-week="1" placeholder="To">

                        <button class="button is-primary" @click="to = new Date()">
                            <b-icon icon="calendar-today"></b-icon>
                            <span>Today</span>
                        </button>

                        <button class="button is-danger" @click="to = null">
                            <b-icon icon="close"></b-icon>
                            <span>Clear</span>
                        </button>
                    </b-datepicker>
                </b-field>
            </v-col>

            <v-col lg="2">
                <v-btn rounded color="primary" dark>Select</v-btn>
            </v-col>
        </v-row>
    </v-card>
</div>
</template>

<script>
export default {
    data() {
        return {
            from: '',
            to: ''
        };
    },
    methods: {
        getUserID(id) {
            console.log(id);

        }
    }
};
</script>
