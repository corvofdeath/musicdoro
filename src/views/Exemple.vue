<template>
    <v-carousel :light="true" :cycle="false">

        <!-- Pomodoro -->
        <v-carousel-item>
            <div class="padding20"></div>
            <v-layout row align-center>
                <v-flex xs12 sm6 offset-sm3>
                    <h1 class="text-center">Pomodoro</h1>
                    <div class="text-center">
                        <img src="../assets/apple.svg" alt="apple-pomodoro" height="42" width="42">
                    </div>
                    <v-layout row>
                        <v-flex sm5>
                            <v-card>
                                <v-card-title>
                                    <h3 class="text-center">O que é?</h3>
                                </v-card-title>
                                <v-card-text>
                                    <p>
                                        É um método de gerenciamento de tempo desenvolvido por Francesco Cirillo no final dos anos 1980. 
                                        A técnica consiste na utilização de um cronômetro para dividir o trabalho em períodos de 25 minutos, 
                                        separados por breves intervalos.
                                    </p>
                                    <p>
                                        A técnica deriva seu nome da palavra italiana pomodoro (tomate), 
                                        como referência ao popular cronômetro gastronômico na forma dessa fruta. 
                                    </p>
                                    <p>
                                        O método é baseado na ideia de que pausas frequentes podem aumentar a agilidade mental.
                                    </p>
                                </v-card-text>
                            </v-card>
                        </v-flex>
                        <v-flex sm7>
                            <v-card>
                                <v-card-title>
                                    <h3 class="text-center">Passo-a-passo</h3>
                                </v-card-title>
                                <v-card-text>
                                    <ul>
                                        <li>Escolher e listar as tarefas a serem executadas;</li>
                                        <li>Ajustar o cronômetro para o tempo desejado (geralmente 25 minutos);</li>
                                        <li>Escolher a tarefa inicial;</li>
                                        <li>Trabalhar na tarefa escolhida até que o alarme toque. Se alguma distração importante surgir, anotá-la e voltar o foco imediatamente de volta à tarefa;</li>
                                        <li>Quando o alarme tocar, marcar um "x" na lista de tarefas;</li>
                                        <li>Se houver menos de 4 marcações, fazer uma pausa curta (3-5 minutos);</li>
                                        <li>Se houver quatro pomodoros marcado, fazer uma pausa mais longa (15-30 minutos), zerando a contagem de marcações e retornando ao passo 1.</li>
                                    </ul>
                                </v-card-text>
                            </v-card>           
                        </v-flex>
                    </v-layout>                   
                </v-flex>
            </v-layout>
        </v-carousel-item>

        <!-- Teoria Musical -->
        <v-carousel-item>
            <div class="padding20"></div>
            <v-layout row align-center>
                <v-flex xs12 sm6 offset-sm3>
                    <h1 class="text-center">Compasso Musical</h1>
                    <div class="text-center">
                        <img src="../assets/compasso-musical.png" alt="compasso">
                    </div>
                    <v-layout row>
                        <v-flex sm5 xs12>
                            <v-card>
                                <v-card-title>
                                    <h3 class="text-center">O que é?</h3>
                                </v-card-title>
                                <v-card-text>
                                    <p>
                                        É uma divisão da música em intervalos de tempo iguais, com o objetivo de organizar a estrutura e facilitar a orientação para o leitor. 
                                        Esse intervalo de tempo é representado por barras verticais, 
                                        como no exemplo accima (destacado em laranja).
                                    <p>
                                    <p>
                                        Cada compasso comporta uma quantidade de notas correspondentes a sua duração de tempo. Por tanto, a falta de 
                                        preenchimento do compasso resulta no silencio e o excesso no corte do som. 
                                    </p>
                                    <p>O compasso deve sempre estar preenchido de acordo com a quantidade de tempo que ele comporta.</p>
                                </v-card-text>
                            </v-card>
                        </v-flex>
                        <v-flex sm7 xs12>
                            <v-card>
                                <v-card-title>
                                    <h3 class="text-center">Frações de Tempo</h3>
                                </v-card-title>
                                <v-card-text>
                                    <div class="text-center">
                                        <img src="../assets/fracao-de-compasso-musical.png" alt="tempo" height="42" width="42">
                                    </div>
                                    <p>
                                        Esta é a representação da quantidade de tempo que um compasso comporta. O número de cima informa
                                        quantas figuras cabem no compasso. O número de baixo informa qual figura musical servirá de referência
                                        para a análise.
                                    </p>
                                    <p>
                                        Neste exemplo a figura de referência é a <i><b>semínima</b></i> e é possível colocar quatro delas por compasso.
                                    </p>
                                    <div class="text-center">
                                        <img class="img-responsive" src="../assets/tabela-musical.png" alt="tabela">
                                    </div>
                                    <p class="legend text-center">Semibreve, Mínima, Semínima, Colcheia, Semicolcheia, Fusa e Semifusa</p>
                                </v-card-text>
                            </v-card>           
                        </v-flex>
                    </v-layout>                   
                </v-flex>
            </v-layout>
        </v-carousel-item>

        <!-- Metronomo -->
        <v-carousel-item>
            <div class="padding20"></div>
            <v-layout row align-center>
                <v-flex xs12 sm6 offset-sm3>
                    <h1 class="text-center">Metrônomo</h1>
                    <div class="text-center">
                        <img src="../assets/metronome.svg" alt="metronome" width="45" height="42">
                    </div>
                    <v-layout row>
                        <v-flex sm5 xs12>
                            <v-card>
                                <v-card-title>
                                    <h3 class="text-center">O que é?</h3>
                                </v-card-title>
                                <v-card-text>
                                    <p>
                                       O metrônomo é um aparelho que através de pulsos (sonoros) de duração regular, 
                                       indica um andamento musical. Ele pode ser utilizado para fins de estudo ou interpretação musical.
                                    <p>
                                    <p>
                                        O metrônomo mecânico consiste num pêndulo oscilante cujas oscilações, reguladas pela distância de um peso na haste do pêndulo, 
                                        podem ser mais lentas ou mais rápidas, sendo que a cada oscilação corresponde um tempo do compasso.
                                    </p>
                                    <p>Há também metrônomos eletrônicos, em que cada tempo do compasso é indicado pelo piscar de um LED e por um som eletrônico.</p>
                                </v-card-text>
                            </v-card>
                        </v-flex>
                        <v-flex sm7 xs12>
                            <v-card>
                                <v-card-title>
                                    <h3 class="text-center">Como usar</h3>
                                </v-card-title>
                                <v-card-text>
                                    <p>
                                        Os músicos utilizam metrônomos para manter um tempo padrão, ou seja, um pulso regular ao longo de toda a composição ou uma de suas seções. 
                                        Um metrônomo pode ser usado para indicar o tempo em torno do qual as variações serão realizadas.
                                    </p>
                                    <p>
                                       O treino métrico com esta ferramenta visa a capacidade de dividir o tempo músical precisamente. De acordo com o compasso é possivel utilizar 
                                       as batidas do metrônomo para colocar as notas e seus equivalentes tempos dentro do compasso. 
                                    </p>
                                    <p>
                                        Chamamos cada batida do compasso de <i><b>tempo</b></i>.
                                    </p>
                                    <p>
                                        <ul>
                                            <li>Simples: uma nota a cada tempo.</li>
                                            <li>Dupla: duas notas de iguais duração a cada tempo.</li>
                                            <li>Tercinas: três notas de iguais duração a cada tempo.</li>
                                            <li>Quiáltera: duas notas de iguais duração a cada tempo.</li>
                                            <li>Quintinas: cinco notas de iguais duração a cada tempo.</li>
                                            <li>Sextina: duas notas de iguais duração a cada tempo.</li>
                                        </ul>
                                    </p>
                                </v-card-text>
                            </v-card>           
                        </v-flex>
                    </v-layout>                   
                </v-flex>
            </v-layout>
        </v-carousel-item>

        <!-- Exercite -->
        <v-carousel-item>
            <div class="padding20"></div>
            <v-layout row align-center>
                <v-flex xs12 sm6 offset-sm3>
                    <h1 class="text-center">Exercite</h1>
                    <div class="text-center">
                        <img src="../assets/sound.svg" alt="sound" width="45" height="42">
                    </div>
                    <v-layout row>
                        <v-flex sm5 xs12>
                            <v-card>
                                <v-card-title>
                                    <h3 class="text-center">Musicdoro</h3>
                                </v-card-title>
                                <v-card-text>
                                    <p>
                                       Utilize a tecnica do pomodoro para poder estudar as divisões rítimicas vistas na seção anterior.
                                    <p>
                                    <p>
                                        Faça 5 minutos de exercício para cada item: <i>simples, dupla, tercinas...</i>
                                    </p>
                                    <p>Comece com um andamento leve para ir pegando o jeito.</p>
                                    <p>Aumente o andamento em <b>1</b> a cada dia de treino.</p>
                                    <p>Defina uma meta de andamento.</p>
                                </v-card-text>
                            </v-card>
                        </v-flex>
                        <v-flex sm7 xs12>
                            <v-card>
                                <v-card-title>
                                    <h3 class="text-center">Não perca tempo</h3>
                                </v-card-title>
                                <v-card-text>
                                    <p>
                                        Vá para aba "Exercite" e utilize nosso metrônomo junto com os cronomêtros definidos para os exercícios.
                                    </p>
                                    <p>
                                       Lembre-se de treinar diariamente e sempre aumentar o andamento a cada dia.
                                    </p>
                                    <p class="text-center">
                                        Boa sorte!
                                    </p>
                                    <div class="text-center">
                                        <v-btn color="success" to="/exercite">Exercite</v-btn>
                                    </div>
                                </v-card-text>
                            </v-card>           
                        </v-flex>
                    </v-layout>                   
                </v-flex>
            </v-layout>
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
    height: 88vh;
}

.content {
    font-family: 'Lato', sans-serif;    
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
    display: block;
    padding-bottom: 0px;
}

.legend {
    font-size: 11px;
    color: rgba(0, 0, 0, 0.5);
}

ul {
    padding-left: 15px;
}

@media (max-width: 1200px) {
    .img-responsive {
        width: 200px;
    }

    .content {
        font-size: 10px;
    }
}
</style>

