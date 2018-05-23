<template>
    <div>
        <div class="padding20"></div>
        <h1 class="text-center">Exercícios</h1>
        <div class="padding20"></div>        
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <v-layout row>
                    <!-- Metronomo -->
                    <v-flex sm5>
                        <metronome></metronome>
                    </v-flex>

                    <!-- Timer -->
                    <v-flex sm7>              
                        <timer></timer>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import Metronome from '@/components/Metronome.vue';
import Timer from '@/components/Timer.vue';

export default {
    name: 'exercite',
    data: function () {
        return {
        }
    },
    components: {
        Metronome,
        Timer
    }
}
</script>

<style lang="scss" scoped>

</style>

