<script setup lang="ts">
import TitleCircle from './TitleCircle.vue'
</script>

<template>
    <div class="grid-container">
        <!-- Repeat this grid-item as many times as you want rows -->
        <div class="grid-item1">
        </div>
        <div class="grid-item2">
        </div>
        <div class="grid-item3">
            <img id="planet3" src="../assets/custom-images/planet3.svg" alt="Small blue planet"/>

        </div>
        <div class="grid-item4"></div>
        <div class="grid-item5">

        </div>
        <div class="grid-item6"></div>
        <div class="grid-item7"></div>
        <!-- ROW 2-->
        <div class="grid-item1">
        </div>
        <div class="grid-item2">
            <img id="planet8" src="../assets/custom-images/planet8.svg" alt="Orange planet"/>

        </div>
        <div class="grid-item3"></div>
        <div class="grid-item4"></div>
        <div class="grid-item5">

        </div>
        <div class="grid-item6"></div>
        <div class="grid-item7"></div>
                <!-- ROW 3-->

        <div class="grid-item1">
        </div>
        <div class="grid-item2">
        </div>
        <div class="grid-item3"></div>
        <div class="grid-item4"></div>
        <div class="grid-item5">

        </div>
        <div class="grid-item6">

        </div>

        <div class="grid-item7">
            <img id="planet2" src="../assets/custom-images/planet2.svg" alt="Pink and orange planet"/>

        </div>
                <!-- ROW 4-->

        <div class="grid-item1">
        </div>
        <div class="grid-item2">
        </div>
        <div class="grid-item3"></div>
        <div class="grid-item4"></div>
        <div class="grid-item5">

        </div>
        <div class="grid-item6"></div>
        <div class="grid-item7"></div>
                <!-- ROW 5-->

        <div class="grid-item1">
        </div>
        <div class="grid-item2">
        </div>
        <div class="grid-item3"></div>
        <div class="grid-item4"></div>
        <div class="grid-item5">

        </div>
        <div class="grid-item6"></div>
        <div class="grid-item7"></div>
                <!-- ROW 6-->

        <div class="grid-item1">
        </div>
        <div class="grid-item2">
        </div>
        <div class="grid-item3"></div>
        <div class="grid-item4"></div>
        <div class="grid-item5">

        </div>
        <div class="grid-item6"></div>
        <div class="grid-item7"></div>
        <!--ROW 7-->
        <div class="grid-item1">
        </div>
        <div class="grid-item2">
        </div>
        <div class="grid-item3"></div>
        <div class="grid-item4"></div>
        <div class="grid-item5">

        </div>
        <div class="grid-item6"></div>
        <div class="grid-item7"></div>
        <!--ROW 8-->
        <div class="grid-item1">
        </div>
        <div class="grid-item2">
        </div>
        <div class="grid-item3"></div>
        <div class="grid-item4"></div>
        <div class="grid-item5">

        </div>
        <div class="grid-item6"></div>
        <div class="grid-item7"></div>
        <!--ROW 9-->
        <div class="grid-item2"></div>
        <div class="grid-item1"></div>
        <div class="grid-item2"></div>
        <!-- ... -->
    </div>
<div class="header-section">  

    <TitleCircle/>
</div>
</template>

<style scoped>

.grid-container {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-auto-rows: auto;
    width: 100%;
}
.grid-item {
border: 1px solid #ddd;
padding: 10px;
text-align: center;
}
.grid-item img {
width: 100%;
height: auto;
}







</style>