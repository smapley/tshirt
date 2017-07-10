/**
 * Created by wuzhixiong on 2017/6/4.
 */
Ext.define('smapley.platform.main.view.Main', {
    extend: 'Ext.container.Viewport',

    requires: [
        'smapley.platform.main.view.MainController',
        'smapley.platform.main.view.MainViewModel',
        'smapley.platform.main.view.MainTopView'
    ],

    controller: 'mainController',
    viewModel: 'mainViewModel',

    cls: 'sencha-dash-viewport',
    itemId: 'mainView',

    layout: {
        type: 'border',
        align: 'stretch'
    },

    listeners: {
        render: 'onMainViewRender'
    },

    items: [{
        xtype: 'mainTopView',
        region: 'north'
    }, {
        region: 'west',
        xtype: 'treelist',
        reference: 'navigationTreeList',
        itemId: 'navigationTreeList',
        scrollable:'y',
        ui: 'nav',
        bind: '{navItems}',
        width: 250,
        expanderFirst: false,
        expanderOnly: false,
        listeners: {
            selectionchange: 'onNavigationTreeSelectionChange'
        }
    }, {
        region: 'center',
        xtype: 'container',
        reference: 'mainCardPanel',
        itemId: 'contentPanel',
        layout: {
            type: 'card',
            anchor: '100%'
        }
    }]
});