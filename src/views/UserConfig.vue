<template>
<div class="about">
    <v-card-title large left>
        <v-icon>mdi-home</v-icon> <b class="title font-weight-light">Users management</b>
    </v-card-title>
    <v-container class="grey lighten-5">
        <v-layout row wrap>
            <v-flex xs6 md3 pa-1>
                <b-field block class="text-center">
                    <b-datepicker v-model="from" :first-day-of-week="1" placeholder="From">
                        <v-btn pa-1 @click="from = new Date()">
                            <b-icon icon="calendar-today"></b-icon>
                            <span>Today</span>
                        </v-btn>
                        <v-btn pa-1 @click="from = null">
                            <b-icon icon="close"></b-icon>
                            <span>Clear</span>
                        </v-btn>
                    </b-datepicker>
                </b-field>
            </v-flex>
            <v-flex xs6 md3 pa-1>
                <b-field class="text-center">
                    <b-datepicker v-model="to" :first-day-of-week="1" placeholder="From">
                        <v-btn pa-1 @click="to = new Date()">
                            <b-icon icon="calendar-today"></b-icon>
                            <span>Today</span>
                        </v-btn>
                        <v-btn pa-1 @click="to = null">
                            <b-icon icon="close"></b-icon>
                            <span>Clear</span>
                        </v-btn>
                    </b-datepicker>
                </b-field>
            </v-flex>
            <v-flex xs4 md4 pa-1>
                <v-btn block color="blue"> Submit </v-btn>
            </v-flex>
        </v-layout>
        <section>
            <b-field grouped group-multiline>
                <button class="button field is-danger" @click="checkedRows = []" :disabled="!checkedRows.length">
                    <b-icon icon="close"></b-icon>
                    <span>Clear checked</span>
                </button>
                <b-select v-model="checkboxPosition">
                    <option value="left">Checkbox at left</option>
                    <option value="right">Checkbox at right</option>
                </b-select>
            </b-field>

            <b-tabs>
                <b-tab-item label="Table">
                    <b-table :data="data" :columns="columns" :checked-rows.sync="checkedRows" :is-row-checkable="(row) => row.id !== 3" checkable :checkbox-position="checkboxPosition">

                        <template slot="bottom-left">
                            <b>Total checked</b>: {{ checkedRows.length }}
                        </template>
                    </b-table>
                </b-tab-item>

                <b-tab-item label="Checked rows">
                    <pre>{{ checkedRows }}</pre>
                </b-tab-item>
            </b-tabs>
        </section>
    </v-container>

</div>
</template>

<script>
export default {
    data() {
        const data = [{
                'id': 1,
                'first_name': 'Jesse',
                'last_name': 'Simmons',
                'date': '2016-10-15 13:43:27',
                'gender': 'Male'
            },
            {
                'id': 2,
                'first_name': 'John',
                'last_name': 'Jacobs',
                'date': '2016-12-15 06:00:53',
                'gender': 'Male'
            },
            {
                'id': 3,
                'first_name': 'Tina',
                'last_name': 'Gilbert',
                'date': '2016-04-26 06:26:28',
                'gender': 'Female'
            },
            {
                'id': 4,
                'first_name': 'Clarence',
                'last_name': 'Flores',
                'date': '2016-04-10 10:28:46',
                'gender': 'Male'
            },
            {
                'id': 5,
                'first_name': 'Anne',
                'last_name': 'Lee',
                'date': '2016-12-06 14:38:38',
                'gender': 'Female'
            }
        ]
        return {
            from: null,
            to: null,
            data,
            checkboxPosition: 'left',
            checkedRows: [data[1], data[3]],
            columns: [{
                    field: 'id',
                    label: 'ID',
                    width: '40',
                    numeric: true
                },
                {
                    field: 'first_name',
                    label: 'First Name',
                },
                {
                    field: 'last_name',
                    label: 'Last Name',
                },
                {
                    field: 'date',
                    label: 'Date',
                    centered: true
                },
                {
                    field: 'gender',
                    label: 'Gender',
                }
            ]
        }
    },
    methods: {
        getUserID(id) {
            console.log(id);

        }
    }
};
</script>
