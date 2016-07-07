// Generated on 2016-03-16 using generator-jekyllrb 1.4.1
'use strict';

//-----------------------------------------------------
// Directory reference:
//   css: css
//   sass: _scss
//   javascript: scripts
//   images: img
//   fonts: fonts
//-----------------------------------------------------

module.exports = function (grunt) {

  // Show elapsed time after tasks run
  require('time-grunt')(grunt);

  //-----------------------------------------------------
  // LOAD TASKS FASTER
  // https://medium.com/@lmartins/faster-grunt-workflow-ced193c2900b
  //-----------------------------------------------------

  require('jit-grunt')(grunt, {

    // Uncomment if plugins can't be resolved in automatic mapping
    buildcontrol: 'grunt-build-control',
    cdnify: 'grunt-cdnify',
    sass_globbing: 'grunt-sass-globbing', // does this speed this up?
    sass: 'grunt-sass',
    browsersync: 'grunt-browser-sync',
    useminPrepare: 'grunt-usemin'
  });

  grunt.initConfig({
    //-----------------------------------------------------
    // Variables
    //-----------------------------------------------------

    yeoman: {
      app: 'src',
      dist: 'dist',
      assets: 'dist/assets',
      port: '9000',
      git: 'https://github.com/liquidvisual/loshift-0516.git',
    },

    //-----------------------------------------------------
    // WATCH
    //-----------------------------------------------------
    watch: {
      sass: {
        files: ['<%= yeoman.app %>/_scss/**/*.{scss,sass}', '<%= yeoman.app %>/builder-app/_scss/**/*.{scss,sass}'],
        tasks: ['sass_globbing:dist', 'sass:server'] //'autoprefixer:dist' // remove globbing for speed
      },
      autoprefixer: {
        files: ['<%= yeoman.app %>/css/**/*.css'],
        tasks: ['copy:stageCss', 'autoprefixer:server']
      },
      jekyll: {
        files: [
          '<%= yeoman.app %>/**/*.{html,yml,md,mkd,markdown}',
          '!<%= yeoman.app %>/_bower_components/**/*'
        ],
        tasks: ['jekyll:server']
      }
    },
    //-----------------------------------------------------
    // BROWSER SYNC
    //-----------------------------------------------------
    browserSync: {
      server: {
        bsFiles: {
          src: [
            '.jekyll/**/*.html',
            '{.tmp,<%= yeoman.app %>}/css/**/*.css',
            '{.tmp,<%= yeoman.app %>}/scripts/**/*.js',
            '{.tmp,<%= yeoman.app %>}/builder-app/scripts/**/*.js',
            '<%= yeoman.app %>/img/**/*.{gif,jpg,jpeg,png,svg,webp}'
          ]
        },
        options: {
          notify: false,
          // Here you can disable/enable each feature individually
          ghostMode: {
              clicks: false,
              forms: false,
              scroll: false
          },
          // Don't send any file-change events to browsers
          codeSync: true,
          // Open the site in Chrome & Firefox
          // browser: ["google chrome", "firefox"]
          port: '<%= yeoman.port %>',
          host: '0.0.0.0',
          server: {
            baseDir: [
              ".jekyll",
              ".tmp",
              "<%= yeoman.app %>"
            ]
          },
          watchTask: true
        }
      },
      dist: {
        options: {
          server: {
            baseDir: "<%= yeoman.dist %>"
          }
        }
      },
      test: {
        bsFiles: {
          src: [
            '.jekyll/**/*.html',
            '.tmp/css/**/*.css',
            '{.tmp,<%= yeoman.app %>}/scripts/**/*.js',
            '{.tmp,<%= yeoman.app %>}/builder-app/scripts/**/*.js',
            '{<%= yeoman.app %>}/_bower_components/**/*.js',
            '<%= yeoman.app %>/img/**/*.{gif,jpg,jpeg,png,svg,webp}'
          ]
        },
        options: {
          server: {
            baseDir: [
              ".jekyll",
              ".tmp",
              "<%= yeoman.app %>"
            ]
          },
          watchTask: true
        }
      }
    },
    //-----------------------------------------------------
    // CLEAN
    //-----------------------------------------------------
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '<%= yeoman.dist %>/*',
            // Running Jekyll also cleans the target directory.  Exclude any
            // non-standard `keep_files` here (e.g., the generated files
            // directory from Jekyll Picture Tag).
            '!<%= yeoman.dist %>/.git*'
          ]
        }]
      },
      server: [
        '.tmp',
        '.jekyll'
      ]
    },
    //-----------------------------------------------------
    // SASS GLOBBING
    //
    // EG. @import "app/components/all.scss";
    //-----------------------------------------------------
    sass_globbing: {
      dist: {
        files: {
          '<%= yeoman.app %>/_scss/app/components/_all.scss': '<%= yeoman.app %>/_scss/app/components/**/*.{scss,sass}',
        },
        options: {
          useSingleQuotes: false
        }
      }
    },
    //-----------------------------------------------------
    // SASS
    //-----------------------------------------------------
    sass: {
      options: {
        sourceMap: true,
        //imagePath: '',
        includePaths: ['<%= yeoman.app %>/_bower_components/bootstrap/scss',
                       '<%= yeoman.app %>/_bower_components/foundation/scss',
                       '<%= yeoman.app %>/_bower_components/jQuery.mmenu/src/scss']
      },
      dist: {
        files: [{
          expand: true,
          outputStyle: 'compressed',
          cwd: '<%= yeoman.app %>/_scss',
          src: '**/*.{scss,sass}',
          dest: '.tmp/css',
          ext: '.css'
        },
        // LV BUILDER - comment out if not using
        {
          expand: true,
          cwd: '<%= yeoman.app %>/builder-app/_scss',
          src: '**/*.{scss,sass}',
          dest: '.tmp/css',
          ext: '.css'
        }]
      },
      server: {
        options: {
          // debugInfo: true,
          // lineNumbers: true,
          // sourceComments: 'map',
          outputStyle: 'expanded'
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/_scss',
          src: '**/*.{scss,sass}',
          dest: '.tmp/css',
          ext: '.css'
        },
        // LV BUILDER - comment out if not using
        {
          expand: true,
          cwd: '<%= yeoman.app %>/builder-app/_scss',
          src: '**/*.{scss,sass}',
          dest: '.tmp/css',
          ext: '.css'
        }]
      }
    },
    //-----------------------------------------------------
    // AUTOPREFIXER
    //-----------------------------------------------------
    autoprefixer: {
      options: {
        browsers: ['last 2 versions']
      },
      dist: {
        expand: true,
        cwd: '.tmp',
        src: '**/{css,concat}/*.css',
        dest: '.tmp'
      }
    },
    //-----------------------------------------------------
    // JEKYLL
    //-----------------------------------------------------
    jekyll: {
      options: {
        bundleExec: true,
        config: '_config.yml,_config.build.yml', // no spaces
        src: '<%= yeoman.app %>'
      },
      dist: {
        options: {
          dest: '<%= yeoman.dist %>',
        }
      },
      server: {
        options: {
          config: '_config.yml',
          dest: '.jekyll'
        }
      },
      check: {
        options: {
          doctor: true
        }
      }
    },
    //-----------------------------------------------------
    // USEMIN
    //-----------------------------------------------------
    useminPrepare: {
      options: {
        dest: '<%= yeoman.dist %>'
      },
      html: '<%= yeoman.dist %>/index.html'
    },
    usemin: {
      options: {
        assetsDirs: ['<%= yeoman.assets %>', '<%= yeoman.dist %>','<%= yeoman.assets %>/img'],
      },
      html: ['<%= yeoman.dist %>/**/*.html'],
      // Ensures image paths are revved inside CSS files
      css: ['<%= yeoman.assets %>/css/**/*.css']
    },
    //-----------------------------------------------------
    // HTML MINIFY (Disabled)
    //-----------------------------------------------------
    // htmlmin: {
    //   dist: {
    //     options: {
    //       collapseWhitespace: true,
    //       collapseBooleanAttributes: true,
    //       removeAttributeQuotes: true,
    //       removeRedundantAttributes: true
    //     },
    //     files: [{
    //       expand: true,
    //       cwd: '<%= yeoman.dist %>',
    //       src: '**/*.html',
    //       dest: '<%= yeoman.dist %>'
    //     }]
    //   }
    // },
    //-----------------------------------------------------
    // Concat, Uglify, CSS Min
    //-----------------------------------------------------
    // Usemin adds files to concat
    concat: {},
    // Usemin adds files to uglify
    uglify: {},
    // Usemin adds files to cssmin
    cssmin: {
      dist: {
        options: {
          check: 'gzip'
        }
      }
    },
    //-----------------------------------------------------
    // Image Minification
    //-----------------------------------------------------
    imagemin: {
      dist: {
        options: {
          progressive: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: '**/*.{jpg,jpeg,png}',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: '**/*.svg',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    //-----------------------------------------------------
    // COPY
    //-----------------------------------------------------
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          src: [
            // Jekyll processes and moves HTML and text files.
            // Usemin moves CSS and javascript inside of Usemin blocks.
            // Copy moves asset files and directories.
            'img/**/*',
            'fonts/**/*',
            // Like Jekyll, exclude files & folders prefixed with an underscore.
            '!**/_*{,/**}',
            // Explicitly add any files your site needs for distribution here.
            //'_bower_components/jquery/jquery.js',
            'favicon.ico',
            'apple-touch*.png'
          ],
          dest: '<%= yeoman.assets %>'
        }]
      }
    },
    //-----------------------------------------------------
    // FILE REV
    //-----------------------------------------------------
    filerev: {
      options: {
        length: 4
      },
      dist: {
        files: [{
          src: [
            '<%= yeoman.assets %>/scripts/**/*.js',
            '<%= yeoman.assets %>/builder-app/scripts/**/*.js',
            '<%= yeoman.assets %>/css/**/*.css',
            '<%= yeoman.assets %>/img/**/*.{gif,jpg,jpeg,png,svg,webp}',
            '<%= yeoman.assets %>/fonts/**/*.{eot*,otf,svg,ttf,woff}'
          ]
        }]
      }
    },
    //-----------------------------------------------------
    // BUILD CONTROL (GIT)
    //-----------------------------------------------------
    buildcontrol: {
        options: {
          commit: true,
          connectCommits: false,
          push: true,
          message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
        },
        master: {
          options: {
            dir: './',
            remote: '<%= yeoman.git %>',
            branch: 'master'
          }
        },
        pages: {
          options: {
            dir: '<%= yeoman.dist %>',
            remote: '<%= yeoman.git %>',
            branch: 'gh-pages'
          }
        },
        local: {
          options: {
            remote: '../',
            branch: 'build'
        }
      }
    },
    //-----------------------------------------------------
    // JS HINT
    //-----------------------------------------------------
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        '<%= yeoman.app %>/scripts/**/*.js',
        '<%= yeoman.app %>/builder-app/scripts/**/*.js',
        'test/spec/**/*.js'
      ]
    },
    //-----------------------------------------------------
    // CSS LINT
    //-----------------------------------------------------
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      check: {
        src: [
          '<%= yeoman.app %>/css/**/*.css'
        ]
      }
    },
    //-----------------------------------------------------
    // SCSS LINT
    //-----------------------------------------------------
    // https://github.com/robwierzbowski/generator-jekyllrb/issues/106
    // scsslint: {
    //   // See https://www.npmjs.org/package/grunt-scss-lint for options.
    //   allFiles: [
    //     '<%= yeoman.app %>/_scss/**/*.scss'
    //   ]
    // },
    //-----------------------------------------------------
    // CDNIFY - Prepend paths to inline assets
    //-----------------------------------------------------
    cdnify: {
      dist: {
        options: {
          rewriter: function (url) {
            var baseurl = '';
            if (url.indexOf('/img') === 0)
              return baseurl+'/assets'+url; // add query string to all other URLs
            else if (url.indexOf('http://') !== 0) // don't affect CDNs
              return baseurl+url; // leave data URIs untouched
          }
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: '**/*.{css,html}',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    //-----------------------------------------------------
    // CONCURRENT
    //
    // Globbing might be slightly risky, but it speeds the
    // process up quite a bit in dev and always seems to
    // complete before the others.
    //-----------------------------------------------------
    concurrent: {
      server: [
        'sass_globbing:dist',
        'sass:server',
        'jekyll:server'
      ],
      dist: [
        'sass:dist',
        'copy:dist'
      ]
    },
    //-----------------------------------------------------
    // Launch DIST on build
    //-----------------------------------------------------
    shell: {
      serveDist: {
        command: ['cd <%= yeoman.dist %>',
                  'open http://localhost:8000',
                  'python -m SimpleHTTPServer 8000',
                  'open http://localhost:8000',
                  'cd -'
        ].join('&&')
       }
    }

  //--
  });
  //-----------------------------------------------------
  // GRUNT SERVE
  //-----------------------------------------------------

  grunt.registerTask('serve', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'browserSync:dist']);
    }

    grunt.task.run([
      'clean:server',
      // 'sass_globbing:dist', // sets up globbing - safety - occurs again below (for browsersync)
      'concurrent:server',
      // 'autoprefixer:dist', this will stop sass maps from working
      'browserSync:server',
      'watch'
    ]);
  });

  grunt.registerTask('server', function () {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve']);
  });

  //=======================================
  // GRUNT CHECK
  //=======================================

  grunt.registerTask('check', [
    'clean:server',
    'jekyll:check',
    'sass_globbing:dist',
    'sass:server',
    'jshint:all',
    'csslint:check',
    // 'scsslint'
  ]);

  //=======================================
  // GRUNT BUILD
  //=======================================

  grunt.registerTask('build', [
    'clean',
    'jekyll:dist', // Jekyll cleans files from the target directory, so must run first
    'sass_globbing:dist',
    'concurrent:dist',
    'useminPrepare',
    'concat',
    'cssmin',
    'autoprefixer:dist',
    'uglify',
    //'imagemin',
    //'svgmin',
    //'filerev',
    'usemin',
    'cdnify'
    //'htmlmin' // best not to use this
    // 'shell:server'
    ]);

  grunt.registerTask('host', [
    'shell:serveDist'
    ]);

  //=======================================
  // GRUNT DEPLOY (GIT)
  //=======================================

  grunt.registerTask('deploy', [
    //'check',
    //'test',
    'build',
    //'buildcontrol:master'
    'buildcontrol:pages',
    ]);

  //=======================================
  // Default
  //=======================================

  grunt.registerTask('default', [
    'check',
    'test',
    'build'
  ]);
};