<template>
<div class="adduser">

    <v-card class="ma-2">
           
        <v-flex xs12 md12 class="pl-6 pr-6">
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                <v-layout row wrap>
                    <v-flex xs12 md4 class="pl-2 pr-2" v-for="(v,k) in items " :key="k">
                        <b-form-group id="input-group-1" :label="v.label" label-for="input-1">

                            <v-menu ref="menu" v-model="menu" :close-on-content-click="false" v-if="v.label == 'Select Date:'" transition="scale-transition" offset-y full-width min-width="290px">
                                <template v-slot:activator="{ on }">
                                    <b-form-input style=" cursor: pointer; " id="input-1" v-model="v.value" label="Birthday date" readonly v-on="on"></b-form-input>
                                    <!-- <v-text-field v-model="date" label="Birthday date" prepend-icon="mdi-calendar-blank" readonly v-on="on"></v-text-field> -->
                                </template>
                                <v-date-picker ref="picker" v-model="v.value" min="1950-01-01" @change="save"></v-date-picker>
                            </v-menu>

                            <b-form-input id="input-1" v-else v-model="v.value" :type="v.type" required :placeholder="v.desc"></b-form-input>
                        </b-form-group>
                        <!-- <b-form-group v-if="v.label == 'Select Date:'" v-show="true" id="input-group-1" :label="v.label" label-for="input-1">
                            <b-form-input id="input-1" v-model="v.value" :type="v.type" required :placeholder="v.desc"></b-form-input>
                        </b-form-group> -->

                    </v-flex>
                    <v-flex xs12 md4 class="pl-2 pr-2">
                        <b-form-group id="input-group-3" label="Locations:" label-for="input-3">
                            <b-form-select id="input-3" v-model="Location" :options="Locations" required></b-form-select>
                        </b-form-group>
                    </v-flex>
                    <v-flex xs12 md4 class="pl-2 pr-2">
                        <b-form-group id="input-group-3" label="language:" label-for="input-3">
                         <b-form-checkbox-group  
                            v-model="checked" id="checkboxes-4" style=" cursor: pointer; ">
                        <b-form-checkbox :value="lag" v-for="lag in language " :key="lag" >
                              <p style=" cursor: pointer; ">  {{lag}}  </p> 
                        </b-form-checkbox>                      
                    </b-form-checkbox-group>
                      </b-form-group>
                    </v-flex>
                </v-layout>
            
                <v-btn type="submit" color="primary" class="ma-2">Submit</v-btn>
                <v-btn type="reset" color="error">Reset</v-btn>
            </b-form>
            <b-card class="mt-3" header="Form Data Result">
                <pre class="m-0">{{ checked + ' Nation : ' +  Location }}</pre>
            </b-card>
        </v-flex>
    </v-card>

</div>
</template>

<script>
export default {
    data() {
        return {
            language : ['English','Thailand','Chinese','Vietnam','Japan'],
            menu: false,
            Location: null,
            checked: [],
            items: [{
                    type: 'email',
                    label: 'Email address:',
                    desc: 'Enter email',
                    value: ''
                },
                {
                    type: 'text',
                    label: 'Username-EN:',
                    desc: 'Enter Username',
                    value: ''
                },
                {
                    type: 'text',
                    label: 'Username-LA:',
                    desc: 'Enter Username',
                    value: ''
                },
                {
                    type: 'password',
                    label: 'Password:',
                    desc: 'Enter Password',
                    value: ''
                },
                {
                    type: 'number',
                    label: 'Number Phone:',
                    desc: 'Enter Number Phone',
                    value: ''
                },
                {
                    type: 'text',
                    label: 'Select Date:',
                    desc: 'Birthday Date',
                    value: ''
                },
                {
                    type: 'text',
                    label: 'Address:',
                    desc: 'Enter Address',
                    value: ''
                },
                {
                    type: 'text',
                    label: 'About me:',
                    desc: 'Enter About Me',
                    value: ''
                },
                {
                    type: 'text',
                    label: 'Equipment:',
                    desc: 'Enter Equipment',
                    value: ''
                },
                {
                    type: 'text',
                    label: 'Your ID Card:',
                    desc: 'Enter Your ID Card',
                    value: ''
                },
                {
                    type: 'text',
                    label: 'Billing Address:',
                    desc: 'Enter Billing Address',
                    value: ''
                },
                {
                    type: 'text',
                    label: 'Book Bank Account:',
                    desc: 'Enter Book Bank Account',
                    value: ''
                },
            ],
            Locations: [{
                text: 'Select One',
                value: null
            }, 'Attapeu', 'Bokeo', 'Bolikhamsai', 'Champasak', 'Hua Phan', 'Khammouane', 'Luang Namtha', 'Luang Prabang', 'Oudomxay', 'Phongsali', 'Sayabouly', 'Salavan', 'Savannakhet', 'Vientiane Prefecture', 'Vientiane Province', 'Xieng Khouang', 'Xaisomboun Province'],
            show: true
        }
    },
    methods: {
        onSubmit(evt) {
            evt.preventDefault()
            alert(JSON.stringify(this.items))
        },
        onReset(evt) {
            evt.preventDefault()
            // Reset our form values
           // this.Location = null
           // this.checked = []
            // Trick to reset/clear native browser form validation state
            this.show = false
            this.$nextTick(() => {
                this.show = true
            })
        },
        save(date) {
            //this.$refs.menu.save(date)
        },
    },
    watch: {
        menu(val) {
            val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
        },
    },
}
</script>
