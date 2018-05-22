<template>
    <v-carousel :light="true" :cycle="false">
        <v-carousel-item>
            <div class="padding20"></div>
            <v-layout row align-center>
                <v-flex xs12 sm6 offset-sm3 class="text-xs-center">
                    <h1 class="text-center">Pomodoro</h1>

                    <v-layout row>
                        <v-flex sm5>
                            <v-card>
                                <v-card-title>
                                    <h3>O que é?</h3>
                                </v-card-title>
                                <v-card-text>
                                    <p>é um método de gerenciamento de tempo desenvolvido por Francesco Cirillo no final dos anos 1980. 
                                    A técnica consiste na utilização de um cronômetro para dividir o trabalho em períodos de 25 minutos, 
                                    separados por breves intervalos.<p>
                                    <p>A técnica deriva seu nome da palavra italiana pomodoro (tomate), 
                                    como referência ao popular cronômetro gastronômico na forma dessa fruta. </p>
                                    <p>O método é baseado na ideia de que pausas frequentes podem aumentar a agilidade mental.</p>
                                    <div class="text-center">
                                        <img src="../assets/apple.svg" alt="apple-pomodoro" height="42" width="42">
                                    </div>
                                </v-card-text>
                            </v-card>
                        </v-flex>
                        <v-flex sm7>
                            <v-card>
                                <v-card-title>
                                    <h3>Passo-a-passo</h3>
                                </v-card-title>
                                <v-card-text>
                                    <ol>
                                        <li>Escolher e listar as tarefas a serem executadas;</li>
                                        <li>Ajustar o cronômetro para o tempo desejado (geralmente 25 minutos);</li>
                                        <li>Escolher a tarefa inicial;</li>
                                        <li>Trabalhar na tarefa escolhida até que o alarme toque. Se alguma distração importante surgir, anotá-la e voltar o foco imediatamente de volta à tarefa;</li>
                                        <li>Quando o alarme tocar, marcar um "x" na lista de tarefas;</li>
                                        <li>Se houver menos de 4 marcações, fazer uma pausa curta (3-5 minutos);</li>
                                        <li>Se houver quatro pomodoros marcado, fazer uma pausa mais longa (15-30 minutos), zerando a contagem de marcações e retornando ao passo 1.</li>
                                    </ol>
                                </v-card-text>
                            </v-card>           
                        </v-flex>
                    </v-layout>
                    
                </v-flex>
            </v-layout>
        </v-carousel-item>
        <v-carousel-item>
            <h1>Page 2</h1>
        </v-carousel-item>
        <v-carousel-item>
            <h1>Page 3</h1>
        </v-carousel-item>
    </v-carousel>
</template>

<script>
import VCarousel from 'vuetify/es5/components/VCarousel';
import VCard from 'vuetify/es5/components/VCard';

export default {
    name: 'exemple',
    data: function () {
        return {
        }
    },
    components: {
        VCarousel,
        VCard
    }
}
</script>

<style lang="scss" scoped>
.carousel {
    height: 86vh;
}

.card {
    margin: 5px;
    padding-left: 5px; 
    padding-right: 25px; 
}

.card__text {
    padding-top: 0px
}

.card__title {
    padding-top: 0px;
    padding-bottom: 0px;
}

ol {
    padding-left: 15px;
}
</style>

