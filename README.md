# grunt-html-upgrader

> Upgrade your html files with Grunt!

## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-html-upgrader --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-html-upgrader');
```

## The "html_upgrader" task

### Overview
In your project's Gruntfile, add a section named `html_upgrader` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  html_upgrader: {
    options: {
      type: 'bootstrap2-3' //available ['bootsrap2-3', 'fontAwesome3-4']
    },
    main: {
      files: {
        '': ['path/to/my/html/**/*.html'] // empty destination path will overwrite your files!
      }
    },
  },
});
```

### Upgraders

* _Bootstrap 2.3 -> 3.0_
Upgrade bootstrap from version 2.3 to 3.0.
Thanks to @divshot for most of the work https://github.com/divshot/bootstrap3_upgrader

* _Font Awesome 3 -> 4_
Upgrade Font Awesome from version 3 to 4


### Status

This is still unstable and a WIP. 

Any help with adding more upgrade scripts and improving the project is much appreciated.


