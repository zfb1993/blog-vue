<template>
    <div class="layout">
        <TopBar></TopBar>
        <div class="container">
            <div class="menu">
                <Menu :active-name="activeName" theme="dark" :class="menuitemClasses" @on-select="get_menu_name">
                    <MenuGroup :title="group.name" v-for="(group,index) in routes" :key="index">
                        <MenuItem v-for="(item,i) in group.children" :key="i" 
                            :name="JSON.stringify({name:item.name,path:group.path+item.path})"
                            :to="group.path+item.path"
                        >
                            <Icon type="md-document" />
                            {{item.name}}
                        </MenuItem>
                    </MenuGroup>
                </Menu>
            </div>
            <div class="content">
                <Content style="margin-bottom:50px;height:fit-content">
                    <router-view  :pageSizeOpts="pageSizeOpts"></router-view>
                </Content>
            </div>
        </div>
        
    </div>
</template>
<script>
    import {routes} from '../router'
    import TopBar from './widgets/TopBar'
    export default {
        components:{
            TopBar
        },
        data () {
            return {
                isCollapsed: false,
                theme: 'dark',
                routes:routes,
                pageSizeOpts:[10,20,30,40,50],
                activeName:'',
            };
        },
        methods:{
            get_menu_name(name) {
                this.activeName = name;
            }
        },
        computed: {
            menuitemClasses: function () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        },
        mounted(){
            this.activeName = JSON.stringify({name: this.$route.name, path: this.$route.path});
        }
    }
</script>
<style lang="scss" scoped>
    body{
        position: absolute;
        height: 100%;
        width: 100%;
    }
    .layout{
        background: #f5f7f9;
        position: absolute;
        border-radius: 4px;
        overflow: hidden;
        height: 100%;
        width: 100%;
        .tarBar{
            width: 100%;
            height: 50px;
        }
        .container{
            height: calc(100% - 50px);
            display: flex;
            .menu{
                width: 240px;
                height: 100%;
                ul{
                    height: 100%;
                }
            }
            .content{
                width: calc(100% - 240px);
                padding-left: 30px;
            }
        }
    }
    .ivu-menu-item.ivu-menu-item-active.ivu-menu-item-selected{
        color: white !important;
        background: #2B85FB !important;
    }

</style>