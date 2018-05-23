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
                        <v-container grid-list-xl>
                            <v-layout column="true">
                                <v-flex class="aling">
                                    <v-card dark color="primary">
                                        <v-card-title class="text-center">Pomodoro</v-card-title>
                                        <v-layout>
                                            <v-flex class="aling" sm6>
                                                <timer></timer>
                                            </v-flex>
                                            <v-flex class="aling" sm6>
                                                <p class="exercicie-title">Exercicio: Simples</p>
                                                <div class="btn-aling">
                                                    <v-btn color="success" to="/exercite">Start</v-btn>        
                                                </div>
                                            </v-flex>          
                                        </v-layout>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                        </v-container>
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
.carousel {
    height: 86vh;
}

.aling {
    padding-top: 0 !important;
}

.card__title {
    display: block;
    padding-bottom: 0px;
}

p { 
    margin-top: 35px !important;
}

.btn-aling {
    margin-left: 10px;
    margin-top: 25px;
}

</style>

