<template>
    <div class="wrapper">
        <router-view v-slot="{ Component }">
            <transition :name="transitionName">
                <component :is="Component" />
            </transition>
        </router-view>
        <Tabbar placeholder route v-show="showFooter">
            <TabbarItem icon="home-o" replace to="/">Home</TabbarItem>
            <TabbarItem icon="search" replace to="/about">About</TabbarItem>
            <TabbarItem icon="friends-o" replace to="/todoList">
                ToDo
            </TabbarItem>
            <TabbarItem icon="setting-o" replace to="/luckdraw">
                LuckDraw
            </TabbarItem>
        </Tabbar>
        <!-- <floating-ball></floating-ball> -->
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Tabbar, TabbarItem } from "vant";
// import FloatingBall from "@/views/pageDiv.vue";

export default defineComponent({
    name: "App",
    components: {
        Tabbar,
        TabbarItem,
        // FloatingBall,
    },
    data() {
        return {
            transitionName: "",
        };
    },
    computed: {
        showFooter() {
            return this.$route.path.split("/").length < 3;
        },
    },
    watch: {
        //使用watch 监听$router的变化
        $route(to, from) {
            //如果to索引大于from索引,判断为前进状态,反之则为后退状态
            console.log(to, "to");
            console.log(from, "from");
            if (to.meta.index > from.meta.index) {
                //设置动画名称
                this.transitionName = "slide-left";
            } else {
                this.transitionName = "slide-right";
            }
        },
    },
});
</script>

<style>
.wrapper {
    position: relative;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
    will-change: transform;
    transition: all 500ms;
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.slide-right-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
}

.slide-right-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
}

.slide-left-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
}

.slide-left-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
}
</style>
