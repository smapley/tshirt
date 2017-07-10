/**
 * Created by EricNts on 2017/6/8.
 */
Ext.define('smapley.platform.menu.view.MenuViewModel', {
    extend:'Ext.app.ViewModel',
    alias:'viewmodel.menuViewModel',
    requires:[
        'smapley.platform.menu.store.MenuStore'
    ],
    stores:{
        menuList:{
            type:'menuStore'
        }
    }
});
