<template id="courseType">
    <el-row style="height: 100%;border: 1px solid #DCDFE6;margin-top: 10px">
        <el-col :span="6" style="border-right: 1px solid #DCDFE6; min-height:500px;">
            <div class="grid-content bg-purple" style="height: 100%">
                <el-tree style="border:none" :data="courseTypes" :props="defaultProps"  @node-click="handleNodeClick">
                </el-tree>
            </div>
        </el-col>
        <el-col :span="17" style="margin-left: 10px;padding-top: 10px">

        </el-col>
    </el-row>
</template>
<style>
    .el-row {
        margin-bottom: 20px;
        height: 100%;
    }
    :last-child {
        margin-bottom: 0;
    }
    #courseType el-col {
        border: 1px solid red;
        border-radius: 4px;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
</style>

<script>
    export default {
        data() {
            return {
                courseTypes:[],
                defaultProps: {
                    children: 'children',
                    label: 'name'
                }
            }
        },
        methods:{
            getTreeData(){
                //alert("1111111111111")
                // 发送一个异步请求: get请求 /product/courseType/treeData
                this.$http.get("/course/courseType/treeData").then(res=>{
                    console.log(this);
                    this.courseTypes = res.data;
                });
            },
            handleNodeClick(){

            }
        },
        mounted(){
            //对courseTypes数据赋值
           this.getTreeData();
        }
    };
</script>