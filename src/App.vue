<template>
    <v-app id="app" :dark="flash">
        <v-content fluid fill-height>
            <!-- Header -->
            <Toolbar></Toolbar>

            <!-- Body -->
            <router-view/>

            <!-- footer -->
            <Navigation></Navigation>
        </v-content>
    </v-app> 
</template>

<script>
import VApp from "vuetify/es5/components/VApp";
import VContainer from "vuetify/es5/components/VGrid/VContainer";

import Toolbar from '@/components/Toolbar.vue';
import Navigation from '@/components/Navigation.vue';

import NotificationService from './services/notification.js'

export default {
    name: "app",
    components: {
        VApp,
        VContainer,
        Toolbar,
        Navigation
    },
    data: function() {
        return {
            flash: false
        };
    },
    mounted: function () {
        NotificationService.getFlashNotification().subscribe(value => {
            this.flash = value;
        })
    }
}
</script>

<style lang="stylus">
@import '../node_modules/vuetify/src/stylus/app';
</style>


<style lang="scss">
body {
    margin: 0;
}

.btn {
    border: 0;
}

.text-center {
    text-align: center;
}

.padding10 {
    padding: 10px;
}

.padding20 {
    padding: 20px;
}

.padding30 {
    padding: 30px;
}

.content--wrap {
    height: 91vh;
}
</style>
