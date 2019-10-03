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
                    </v-flex>
                    <v-flex xs12 md4 class="pl-2 pr-2">
                        <b-form-group id="input-group-3" label="Locations:" label-for="input-3">
                            <b-form-select id="input-3" v-model="Location" :options="Locations" required></b-form-select>
                        </b-form-group>
                    </v-flex>
                    <v-flex xs12 md8 class="pl-2 pr-2">
                        <b-form-group id="input-group-3" label="language:" label-for="input-3">
                            <b-form-checkbox-group v-model="checked" id="checkboxes-4" style=" cursor: pointer; ">
                                <b-form-checkbox :value="lag" v-for="lag in language " :key="lag">
                                    <p style=" cursor: pointer; "> {{lag}} </p>
                                </b-form-checkbox>
                            </b-form-checkbox-group>
                        </b-form-group>
                    </v-flex>

                    <v-flex xs12 md4 class="pl-2 pr-2">
                        <b-form-group id="input-group-3" label="" label-for="input-3">
                            <p>Your Photo: <small id="nameAvatar" style=" color: #f31818;"> {{nameAvatar}} </small> </p>
                            <b-img style="cursor: pointer" :src="imageAvatar" id="imageSelector" @click="imageNameAvatar()" @error="onImgErrorAvatar()" class="img-thumbnails img-fluidx"></b-img>
                            <input type="file" id="file" hidden class="fileInputAvatar" accept="image/*" @change="onFileChangeAvatar($event)">
                            <v-btn color="primary" hidden class="ma-2 uplaoadx" @click="doUpload()">Upload</v-btn>
                        </b-form-group>
                    </v-flex>

                    <v-flex xs12 md4 class="pl-2 pr-2">
                        <b-form-group id="input-group-3" label="" label-for="input-3">
                            <p>Your ID Card: <small id="nameIdCard" style=" color: #f31818;"> {{nameIdCard}} </small> </p>
                            <b-img style="cursor: pointer" :src="imageIdCard" id="imageSelector" @click="imageNameIdCard()"  @error="onImgErrorIdCard()" class="img-thumbnails img-fluidx"></b-img>
                            <input type="file" id="file" hidden class="fileInputIdCard" accept="image/*" @change="onFileChangeIdCard($event)">
                            <v-btn color="primary" hidden class="ma-2 uplaoadx" @click="doUpload()">Upload</v-btn>
                        </b-form-group>
                    </v-flex>

                </v-layout>

                <v-btn type="submit" color="primary" class="ma-2">Submit</v-btn>
                <v-btn type="reset" color="error">Reset</v-btn>
            </b-form>
            <b-card class="mt-3" header="Form Data Result">

                <pre class="m-0">{{ checked + ' Nation : ' +  Location }}</pre>
                <!-- <pre class="m-0">  {{file.name}}   </pre> -->
                <!-- <pre class="m-0"> {{  file.size}} </pre>
                <pre class="m-0">{{ file.type}}  </pre> -->
            </b-card>
        </v-flex>
    </v-card>

    <v-bottom-sheet v-model="sheet">
        <v-sheet class="text-center" height="200px">
            <v-btn class="mt-6" text color="red" @click="sheet = !sheet">close</v-btn>
            <div class="py-3">Your file image is broken</div>
        </v-sheet>
    </v-bottom-sheet>

</div>
</template>

<script>
var imageExists = require('image-exists');
export default {
    data() {
        return {
            sheet: false,
            nameAvatar: '',
            nameIdCard: '',
            imageAvatar: require('../assets/default_image.png'),
            imageIdCard: require('../assets/default_image.png'),
            imageAccount: require('../assets/default_image.png'),
            mainProps: {
                center: true,
                fluidGrow: true,
                blank: true,
                blankColor: '#bbb',
                width: 600,
                height: 400,
                class: 'my-5'
            },
            language: ['English', 'Thailand', 'Chinese', 'Vietnam', 'Japan'],
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
            show: true,
            fileAvatar: '',
            fileIdCard: '',
        }
    },
    created() {

    },
    methods: {
        onImgErrorAvatar(event) {
            this.nameAvatar = 'Your file image is broken';
            this.imageAvatar = require('../assets/default_image.png');
            console.log(event);
            this.$swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
            
            //this.nameAvatar = '';
        },
        onSubmit(evt) {
            evt.preventDefault()
            alert(JSON.stringify(this.items))
        },
        onReset(evt) {
            evt.preventDefault()
            this.show = false
            this.$nextTick(() => {
                this.show = true
            })
        },
        save(date) {
            //this.$refs.menu.save(date)
        },
        imageNameAvatar() {
            $('.fileInputAvatar').click();
        },
        imageNameIdCard() {
            $('.fileInputIdCard').click();
        },
        onFileChangeAvatar(e) {
            const files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            this.fileAvatar = files[0];
            if (this.fileAvatar.size > 5000000) {
                console.log('Not allow 5MB');

                this.imageAvatar = '';

            } else {
           
                this.nameAvatar = '';
                this.createImage(files[0],0);
            }

        },
        onFileChangeIdCard(e) {
          
            const files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            this.fileIdCard = files[0];
            if (this.fileIdCard.size > 5000000) {
               
                this.$swal.fire({
                    type: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: '<a href>Why do I have this issue?</a>'
                })
                this.imageIdCard = '';

            } else {
                this.imageIdCard = '';
                this.createImage(files[0],1);
            }

        },
        createImage(file,con) {
            const reader = new FileReader();

            reader.onload = (e) => {
                if (con == 0) {
                    this.imageAvatar = e.target.result;
                } else if (con == 1) {
                    this.imageIdCard = e.target.result;
                } else if (con == 2) {
                }

            };
            reader.readAsDataURL(file);
        },
        doUpload() {
            const fd = new FormData();
            fd.append('file', this.fileAvatar);
            this.$http.post('http://localhost:8084/upload/', fd, {
                    onUploadProgress: uploadEvent => {
                        console.log('Upload Progress :' + Math.round(uploadEvent.loaded / uploadEvent.total * 100) + '%');
                    }
                }).then(function (response) {
                    console.log(response)
                })
                .catch(function (error) {
                    alert(error)
                })
        }
    },
    watch: {
        menu(val) {
            val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
        },
    },
}
</script>

<style>
.img-thumbnails {
    padding: 0.25rem;
    background-color: #fff;
    border: 1px solid #dee2e6;
    border-radius: 0.25rem;
    max-width: 100%;
}

.img-fluidx {
    width: 100%;
    height: 210px;
}
</style>
