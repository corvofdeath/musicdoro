<template>
    <div>
        <div class="padding20"></div>
        <h1 class="text-center">Exercícios</h1>
        <div class="padding20"></div>        
        <v-layout row>
            <v-flex lg6 offset-lg3>
                <v-layout>
                    <!-- Metronomo -->
                    <v-flex>
                        <metronome></metronome>
                    </v-flex>

                    <!-- Timer -->
                    <v-flex>              
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

