<template>
    <div class="top">
        <div class="left"></div>
        <div class="right"></div>
    </div>
</template>

<script>
export default {
    name:'TopBar'
}
</script>

<style lang="scss" scoped>
    .top{
        height: 50px;
        width: 100%;
        .left{
            background-color: #515a6e;
            width: 240px;
            height: 100%; 
        }
        .right{
            height: 100%; 
            width: calc(100% - 240px);
        }
    }
</style>