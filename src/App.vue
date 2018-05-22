<template>
    <v-app id="app">
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

export default {
    name: "app",
    components: {
        VApp,
        VContainer,
        Toolbar,
        Navigation
    },
    data: function() {
        return {};
    }
}
</script>


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
</style>
