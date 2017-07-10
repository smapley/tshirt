/**
 * Created by EricNts on 2017/6/5.
 */
Ext.define('smapley.platform.menu.view.MenuView', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.menuView',
    xtype:'menuView',
    columnLines: true,
    title: '菜单管理',
    requires: [
        'smapley.platform.menu.view.MenuViewModel',
        'smapley.platform.menu.view.MenuController'
    ],
    controller: 'menuController',
    viewModel: 'menuViewModel',
    bind: '{menuList}',
    anchor : '100% -1',

    columns: [
        {
            xtype: 'treecolumn',
            text: '菜单名',
            width: 200,
            sortable: true,
            dataIndex: 'name',
            align: 'left'
        }
    ],
    tbar: {
        xtype: 'toolbar',
        items: [{
            text: '新增'
        }, {
            text: '修改'
        }, {
            text: '删除'
        }]

    },
    dockedItems: [{
        xtype: 'pagingtoolbar',
        bind: '{menuList}',
        dock: 'bottom',
        displayInfo: true
    }]
});