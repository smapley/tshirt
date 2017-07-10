/**
 * Created by EricNts on 2017/6/8.
 */
Ext.define('smapley.platform.menu.store.MenuStore',{
    extend:'Ext.data.TreeStore',
    alias:'store.menuStore',
    root: {
        text: '根节点',
        expanded: false
    },
    proxy:{
        type:'ajax',
        url:'menu/getAll.do',
        actionMethods:{
            read:'POST'
        },
        reader:{
            type:'json',
            successProperty:'code',
            rootProperty:'data'
        }
    }
});