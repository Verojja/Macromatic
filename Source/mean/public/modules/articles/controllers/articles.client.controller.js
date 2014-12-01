'use strict';
angular.module('articles').controller('ArticlesController', function() {
    this.abilityName = "Test";
    this.syntax = "Syntax";
   
    this.generateSyntax = function generateSyntax() {
      this.syntax = "#showtooltip" + this.abilityName;
    };
  });