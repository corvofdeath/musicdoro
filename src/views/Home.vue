<template>
    <div>
        <Metronome></Metronome>
        <Timer></Timer>
    </div>  
</template>

<script>
// @ is an alias to /src
import Metronome from '@/components/Metronome.vue';
import Timer from '@/components/Timer.vue';

export default {
    name: "home",
    components: {
        Metronome,
        Timer
    },
    data: function () {
        return {
            
        }
    }
};
</script>
