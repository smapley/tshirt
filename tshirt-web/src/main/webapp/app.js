/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'smapley.Application',

    name: 'smapley',

    requires: [
        // This will automatically load all classes in the smapley namespace
        // so that application classes do not need to require each other.
        'smapley.platform.main.view.Main'
    ],

    // The name of the initial view to create.
    mainView: 'smapley.platform.main.view.Main'
});
