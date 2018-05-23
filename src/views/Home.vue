<template>
    <div class="home">
        <div class="home-content">
            <span class="brand">MUSICDORO</span>
            <p class="gradient-mask-text"> É uma ferramenta interativa que une a tecnica do <strong>Pomodoro</strong> ao ensino musical.
            Aprenda como utilizar essa tecnica para estudar e exercitar a <strong>Divisão Rítmica</strong>.</p>
            <div class="padding10"></div>
            <img src="../assets/apple.svg" alt="apple-pomodoro" height="42" width="42">            
            <img src="../assets/metronome.svg" alt="Metronome" height="42" width="42">
        </div>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: "home",
    components: {

    },
    data: function() {
        return {};
    }
};
</script>

<style lang="scss" scoped>
*{
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
}

body{
    font-family: 'Bitter', serif;
}

.home{
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90vh;
    position: relative;
}

.home-content{
    text-align: center;
}

.brand{
    font-family: 'Lato', sans-serif;
    font-size: 40px;
    margin-bottom: 20px;
    display: block;
    font-weight: 900;
}

strong{
    font-style: italic;
}

.gradient-mask-text{
    font-size: 1.4em;
    line-height: 1.4em;
    width: 60vw;
    margin: 0 auto;
    position: relative;
    padding: 60px 20px;
    background: transparent; 
    background: -webkit-gradient(linear, left top, right bottom, color-stop(0%, #61c2ff), color-stop(100%, #cd4444));
    background: -webkit-linear-gradient(-45deg, #61c2ff 0%, #cd4444 100%);
    -webkit-background-clip: text; 
    -webkit-text-fill-color: transparent; 
    background-clip: text; 
    text-fill-color: transparent;
}

.gradient-mask-text:after, .gradient-mask-text:before {
    display: block;
    content: '';
    position: absolute;
    left: 50%;
    width: 252px;
    margin-left: -126px;
    height: 1px;
    background: #6bb6ee;
}

.gradient-mask-text:before {
    top: 0;
    background: #6bb6ee;
    background: -moz-linear-gradient(-45deg, #6bb6ee 0%, #8a92b8 100%);
    background: -webkit-gradient(linear, left top, right bottom, color-stop(0%, #6bb6ee), color-stop(100%, #8a92b8));
    background: -webkit-linear-gradient(-45deg, #6bb6ee 0%, #8a92b8 100%);
    background: -o-linear-gradient(-45deg, #6bb6ee 0%, #8a92b8 100%);
    background: -ms-linear-gradient(-45deg, #6bb6ee 0%, #8a92b8 100%);
    background: linear-gradient(135deg, #6bb6ee 0%, #8a92b8 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#6bb6ee', endColorstr='#8a92b8',GradientType=1 );
}

.gradient-mask-text:after {
    bottom: 0;
    background: #9389aa;
    background: -moz-linear-gradient(-45deg, #9389aa 0%, #b5606d 100%);
    background: -webkit-gradient(linear, left top, right bottom, color-stop(0%, #9389aa), color-stop(100%, #b5606d));
    background: -webkit-linear-gradient(-45deg, #9389aa 0%, #b5606d 100%);
    background: -o-linear-gradient(-45deg, #9389aa 0%, #b5606d 100%);
    background: -ms-linear-gradient(-45deg, #9389aa 0%, #b5606d 100%);
    background: linear-gradient(135deg, #9389aa 0%, #b5606d 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#9389aa', endColorstr='#b5606d',GradientType=1 );
}
</style>

