/*
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

(function(document) {
  'use strict';

  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  var app = document.querySelector('#app');

  app.displayInstalledToast = function() {
    // Check to make sure caching is actually enabled—it won't be in the dev environment.
    if (!document.querySelector('platinum-sw-cache').disabled) {
      document.querySelector('#caching-complete').show();
    }
  };

  // Listen for template bound event to know when bindings
  // have resolved and content has been stamped to the page
  app.addEventListener('dom-change', function() {
    console.log('Our app is ready to rock!');
    app.section = 'categories';
  });

  // See https://github.com/Polymer/polymer/issues/1381
  window.addEventListener('WebComponentsReady', function() {
    // imports are loaded and elements have been registered
  });

  // Close drawer after menu item is selected if drawerPanel is narrow
  app.onDataRouteClick = function() {
    var drawerPanel = document.querySelector('#paperDrawerPanel');
    if (drawerPanel.narrow) {
      drawerPanel.closeDrawer();
    }
  };

  // Scroll page to top and expand header
  app.scrollPageToTop = function() {
    document.getElementById('mainContainer').scrollTop = 0;
  };

  app.categorySelected = function(e) {
    app.section = 'category';
    app.category = e.detail;
    app.isCategoriesSelected = true;
    app.title = this.getCategory(app.category).name;
  };

  app.getCategory = function(id) {
    for (var i = 0; i < app.categories.length; i++) {
      if (app.categories[i].activityId === id) {
        return app.categories[i];
      }
    }
  };

  app.showCategoryList = function() {
    app.section = 'categories';
    app.category = undefined;
  };

  app.showCategoryElement = function() {
    app.section = 'category';
  };

  app.showCategoryElement = function() {
    app.section = 'category';
  };

  app._quizSelected = function(event) {
    app.section = 'quiz';
    app.quiz = event.detail;
  };

})(document);
