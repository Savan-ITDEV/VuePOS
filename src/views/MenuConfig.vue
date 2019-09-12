<template>
<v-layout row wrap>
    <v-flex class="pa-4" xs12 sm6 md3 v-for="n in messages" :key="n.name">
        <v-hover v-slot:default="{ hover }">
            <v-card color="grey lighten-5">
                <v-img :aspect-ratio="19/10" :src="n.img">
                    <v-expand-transition>
                        <div v-if="hover" class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-5 white--text">
                            $14.99
                        </div>
                    </v-expand-transition>
                </v-img>
                <v-card-text class="pa-1 pl-3" style="position: relative;">
                    <v-btn absolute color="orange" @click="names = n.name, dialog = true,docs = n.doc" class="white--text" fab right top>
                        <v-icon>mdi-cart</v-icon>
                    </v-btn>
                    <div class="font-weight  title mb-2">{{n.name}}</div>
                </v-card-text>
            </v-card>
        </v-hover>

    </v-flex>
    <v-dialog v-model="dialog" max-width="290">
        <v-card>
            <v-card-title class="headline">Edit Products?</v-card-title>
            <b-field class="pa-3" label="Name">
                <b-input placeholder="No label" rounded v-model="names"> </b-input>
            </b-field>

            <v-card-actions>
                <div class="flex-grow-1"></div>
                <v-btn color="green darken-1" text @click="submiteData(names,dialog = false,docs)">
                    Submit
                </v-btn>
                <v-btn color="green darken-1" text @click="dialog = false">
                    Cancel
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
    <v-flex xs10 sm6 md3>
        <v-overlay :value="$store.getters.start">
            <v-card color="primary" dark>
                <v-card-text>
                    Loading...
                    <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
                </v-card-text>
            </v-card>
        </v-overlay>
    </v-flex>
</v-layout>
</template>

<script>
import {
    all
} from '../plugins/message'
import db from '../plugins/firebaseInit'
export default {
    subscriptions() {
        return {
            messages: all(),
        }
    },
    data() {
        return {
            rating: 3,
            dialog: false,
            names: '',
            docs: ''
        }
    },
    methods: {
        submiteData(names, da, docs) {
            console.log(names);
            console.log(docs);
            db.collection("products").doc(docs).update({
                name: names
            });
        }
    },

}
</script>

<style>
.v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .7;
    position: absolute;
    width: 100%;
}
</style>
