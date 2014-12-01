'use strict';
angular.module('articles').controller('ArticlesController', function() {
    this.abilitySyntax = [];
    this.macroSyntax = "#showtooltip";
    
    this.modChoices = {
      alt: "alt",
      shift: "ctrl",
      control: "shift"
    };

    this.generateMacroSyntax = function generateSyntax() {
      this.macroSyntax = "#showtooltip" + "<br>";
      for (i = 0; i < this.abilitySyntax.length; i++) { 
        if(i>0){
          this.macroSyntax +=  "; "
        }
        this.macroSyntax += abilitySyntax[i];
      }
    };

    this.addAbility = function() {
      var abilityFactory = function(){
        return {
          abilityID: function() {
            return this.abilitySyntax.length;
          };
          abilityName: "";
        }
      }
      this.abilitySyntax.push(abilityFactory());
    };

    this.cast = function cast(abilityName) {
      return "/cast " + abilityName;
    };
    this.castWithMod = function castWithMod(abilityName, modkey) {
      return "/cast [mod: " + modkey + "] " + abilityName;
    };

  }).filter('iif', function () {
   return function(input, trueValue, falseValue) {
        return input ? trueValue : falseValue;
   };
});;

  // value={{$first | iif : "invoice.cast(a)" : "invoice.castWithMod(a,'shift'}}"