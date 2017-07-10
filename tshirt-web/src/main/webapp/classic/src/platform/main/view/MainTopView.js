/**
 * Created by EricNts on 2017/6/8.
 */
Ext.define('smapley.platform.main.view.MainTopView',{
    extend:'Ext.toolbar.Toolbar',
    alias:'widget.mainTopView',
    cls: 'sencha-dash-dash-headerbar shadow',
    height: 64,
    itemId: 'headerBar',
    items: [{
        xtype: 'component',
        reference: 'senchaLogo',
        cls: 'sencha-logo',
        html: '<div class="main-logo"><img src="resources/platform/images/main/company-logo.png">Sencha</div>',
        width: 250
    },  {
        margin: '0 0 0 8',
        ui: 'header',
        iconCls:'x-fa fa-navicon',
        id: 'main-navigation-btn',
        handler: 'onToggleNavigationSize'
    },
        '->',
        {
            xtype: 'segmentedbutton',
            margin: '0 16 0 0',

            platformConfig: {
                ie9m: {
                    hidden: true
                }
            },

            items: [{
                iconCls: 'x-fa fa-desktop',
                pressed: true
            }, {
                iconCls: 'x-fa fa-tablet',
                handler: 'onSwitchToModern',
                tooltip: 'Switch to modern toolkit'
            }]
        },
        {
            iconCls:'x-fa fa-search',
            ui: 'header',
            href: '#searchresults',
            hrefTarget: '_self',
            tooltip: 'See latest search'
        },
        {
            iconCls:'x-fa fa-envelope-o',
            ui: 'header',
            href: '#email',
            hrefTarget: '_self',
            tooltip: 'Check your email'
        },
        {
            iconCls:'x-fa fa-question',
            ui: 'header',
            href: '#faq',
            hrefTarget: '_self',
            tooltip: 'Help / FAQ\'s'
        },
        {
            iconCls:'x-fa fa-th-large',
            ui: 'header',
            href: '#profile',
            hrefTarget: '_self',
            tooltip: 'See your profile'
        },
        {
            xtype: 'tbtext',
            text: 'Goff Smith',
            cls: 'top-user-name'
        },
        {
            xtype: 'image',
            cls: 'header-right-profile-image',
            height: 35,
            width: 35,
            alt:'current user image',
            src: 'resources/images/user-profile/2.png'
        }]
});