/*
 * This config is only used during development and build phase only
 * It will not be available on production
 *
 */

(function(global) {
    // ENV
    global.ENV = global.ENV || 'development';



    var plugin = 'bootstrap'; // js-native / vex

    // map tells the System loader where to look for things
    var map = {
        'app': 'src/tmp/app',
        'test': 'src/tmp/test',
        "angular2-materialize": {
            "angular2-materialize": "node_modules/angular2-materialize",
            "materialize-css": "node-modules/materialize-css",
        },

        // 'materialize-css': 'node_modules/materialize-css',
        // 'angular2-materialize': 'node_modules/angular2-materialize'
    };

    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
            'app': {
                defaultExtension: 'js'
            },
            'test': {
                defaultExtension: 'js'
            },
            'rxjs': {
                defaultExtension: 'js'
            },

            "angular2-materialize": {
                "main": "dist/materialize-directive",
                "defaultExtension": "js"
            },
            "materialize-css": {
                "main": "dist/js/materialize"
            },
            "materialize": {
                "main": "dist/materialize-directive",
                "defaultExtension": "js"
            },
            'angular2-modal': { defaultExtension: 'js', main: 'bundles/angular2-modal.umd' }
            //use typescript for compilation

        }
        /*/
        ,
        'materialize-css': {
            'format': 'global',
            'main': 'dist/js/materialize',
            defaultExtension: 'js'
        },
        'angular2-materialize': {
            'main': 'dist/index',
            defaultExtension: 'js'
        }
        /**/


    // List npm packages here
    var npmPackages = [
        '@angular',
        'rxjs',
        'lodash',
        'materialize-css',
        'materialize',
        'angular2-materialize',
        'angular2-modal',
        'ng2-img-cropper',
        'ng2-file-upload'
    ];

    // Add package entries for packages that expose barrels using index.js
    var packageNames = [
        // App barrels
        'app/shared',
        'ng2-img-cropper',
        'ng2-file-upload',
        // 3rd party barrels
        'lodash'
    ];

    // Add package entries for angular packages
    var ngPackageNames = [
        'common',
        'compiler',
        'core',
        'forms',
        'http',
        'platform-browser',
        'platform-browser-dynamic',
        'router'
    ];

    npmPackages.forEach(function(pkgName) {
        map[pkgName] = 'node_modules/' + pkgName;
    });

    map[`angular2-modal/plugins/${plugin}`] = map['angular2-modal'] + '/bundles';
    packages[`angular2-modal/plugins/${plugin}`] = { defaultExtension: 'js', main: `angular2-modal.${plugin}.umd` };

    packageNames.forEach(function(pkgName) {
        packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
    });



    ngPackageNames.forEach(function(pkgName) {
        map['@angular/' + pkgName] = 'node_modules/@angular/' + pkgName +
            '/bundles/' + pkgName + '.umd.js';
        map['@angular/' + pkgName + '/testing'] = 'node_modules/@angular/' + pkgName +
            '/bundles/' + pkgName + '-testing.umd.js';
    });

    var config = {
        map: map,
        packages: packages
    };

    // filterSystemConfig - index.html's chance to modify config before we register it.
    if (global.filterSystemConfig) { global.filterSystemConfig(config); }

    System.config(config);

})(this);