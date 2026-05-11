<template>
    <div class="error-area ptb-54">
        <div class="d-table">
            <div class="d-table-cell">
                <div class="error-content">
                    <!-- <h1><i :class="submitState.icon"></i></h1> -->
                    <h1><i class="ri-checkbox-circle-fill" :style="submitState.style"></i></h1>
                    <h1>{{ submitState.header }}</h1>
                    <h3>{{ submitState.content }}</h3>
                    <p>{{ submitState.description }}</p>
                    <a href="#" class="default-btn" @click="goto">{{ submitState.buttonContent }}</a>
                    <br>
                    <a href="#" class="add-btn" @click="add">重新新增商品</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SubmitState",
    props: {
        submitState:{
            type:Object,
            default:{
                icon:null,
                style:null,
                header:null,
                content:null,
                description:null,
                path:null,
                buttonContent:null                
            },
            required: false,
        },      
    },
    data() {
        return {};
    },
    methods: {
        goto() {
            this.$router.replace({ path: this.submitState.path });
        },
        add() {
            this.$router.go(0)
        }
    },
};
</script>

<style scoped>
@import "~@a/front/css/remixicon.css";
.product-add-container {
    display: flex;
}

.error-area {
    text-align: center;
    flex-grow: 1;
    position: relative;
    z-index: 1;
}

.d-table {
    width: 100%;
    height: 100%;
}

.d-table-cell {
    vertical-align: middle;
}

.error-area .error-content {
    z-index: 1;
    position: relative;
}

.default-btn {
    font-size: 15px;
    color: #ffffff;
    line-height: 1;
    -webkit-transition: all ease 0.5s;
    transition: all ease 0.5s;
    text-align: center;
    position: relative;
    z-index: 1;
    overflow: hidden;
    display: inline-table;
    padding: 16px 30px;
    font-weight: 400;
    background-color: #ff6a00;
}

.add-btn {
    font-size: 18px;
    line-height: 1;
    -webkit-transition: all ease 0.5s;
    transition: all ease 0.5s;
    text-align: center;
    position: relative;
    z-index: 1;
    overflow: hidden;
    display: inline-table;
    padding: 16px 30px;
    font-weight: 400;
}

.error-area .error-content h3 {
    margin: 30px 0 0;
    position: relative;
    color: #ff0000;
}
</style>