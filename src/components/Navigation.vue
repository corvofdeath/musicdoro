<template>
    <v-bottom-nav :value="true" absolute color="transparent">
        <v-btn flat color="teal" value="home" to="/">
            <span>Início</span>
            <v-icon>home</v-icon>
        </v-btn>
        <v-btn flat color="teal" value="exemple" to="/exemple">
            <span>Aprenda</span>
            <v-icon>school</v-icon>
        </v-btn>
        <v-btn flat color="teal" value="exercice" to="/exercite">
            <span>Exercite</span>
            <v-icon>hourglass_full</v-icon>
        </v-btn>
    </v-bottom-nav>
</template>

<script>
// @ is an alias to /src
import VBottomNav from "vuetify/es5/components/VBottomNav";
import VBtn from "vuetify/es5/components/VBtn";

export default {
    name: "navigation",
    components: {
        VBottomNav,
        VBtn,
    },
    data: function() {
        return {};
    }
};
</script>

<style lang="scss" scoped>

</style>

