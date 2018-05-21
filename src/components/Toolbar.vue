<template>
    <v-toolbar>
        <v-icon>queue_music</v-icon>
        <v-toolbar-title>MusicDoro</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-tooltip bottom>
                <v-btn flat slot="activator" href="https://github.com/corvofdeath/musicdoro" target="blank">
                    <v-icon>public</v-icon>
                </v-btn>
                <span>Codigo-Fonte</span>
            </v-tooltip>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
// @ is an alias to /src
import VBtn from "vuetify/es5/components/VBtn";
import VToolbar from "vuetify/es5/components/VToolbar";
import VTooltip from "vuetify/es5/components/VTooltip";

export default {
    name: "toolbar",
    components: {
        VBtn,
        VToolbar
    },
    data: function() {
        return {};
    }
};
</script>

<style lang="scss">

</style>

