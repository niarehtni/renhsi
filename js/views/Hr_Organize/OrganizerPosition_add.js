/*
 * @陕西唐远
 * @文件名: OrganizerPosition_add.js
 * @作者: 张黎博
 * @Git: zlb
 * @Date: 2019-10-28 15:25:23
 * @描述: 职位管理添加页js
 * @版本: 1.00
 * @修改历史纪录: （版本 修改时间 修改人 修改内容）
 * @记录:  
 */
var $, formSubmit, admin, table, form, rowid;
layui.config({
    base: '../../../layuiadmin/' //静态资源所在路径
}).extend({
    index: 'lib/index' //主入口模块
}).use(['index', 'form', 'table', "formSubmit"], function() {

    admin = layui.admin,
        table = layui.table,
        form = layui.form;
    formSubmit = layui.formSubmit;
    $ = layui.$;
    rowid = window.location.href.getQuery("rowId"); //列表页单行数据id



    formSubmit.init({
        dataUrl: { url: httpcom_RSGL },
        addData: { //添加的接口
            XDLMCID: "5000",
            XDLMSID: "DYBH20190823102721272119353"
        },
        editData: { //修改的接口
            XDLMCID: "6000",
            XDLMSID: "DYBH2019082310272127212155",
            XDLMID: rowid //修改的时候必须要有id
        },
        echoData: { //获取单行数据的接口
            XDLMSID: "DYBH20190823102721272121852",
            XDLMCID: "1001",
            XDLMA: rowid
        },
        // beforeSubmitCallback: function(data) { //提交前要要重新修改表单内的值的回调函数

        // },

        // beforeEchoDataCallback: function(data) { //回显之前的操作，data参数值为回显的数据
        //     $("#photoimh").attr("src", httpcom + data.rows[0].photo);
        // }
    })

    form.render();
});