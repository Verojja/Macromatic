'use strict';
angular.module('articles').controller('ArticlesController', function() {
    this.abilitySyntax = [];
    this.itemUse = [];
    this.chat = [];
    this.macroSyntax = "#showtooltip";
    
    this.modChoices = {
      None: "",
      alt: "alt",
      shift: "ctrl",
      control: "shift"
    };

    this.spellTarget = {
      None: "",
      self: "Target Self",
      hover: "At MousePointer",
      target: "Current Target",
      focus: "Focus Target"
    };

    this.volume = {
      say: "/say ",
      shout: "/yell ",
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
      var that = this.abilitySyntax;
      var mods = this.modChoices;
      var targets = this.spellTarget;
      var abilityFactory = function(){
        return {
          abilityID: "" + that.length,
          abilityMod: mods.None,
          abilityTarget: targets.None,
          abilityName: ""
        }
      }
      that.push(abilityFactory());
    };

    this.addChat = function() {
      var that = this.chat;
      var chatvals = this.volume;
      var addChatFactory = function(){
        return {
          chatID: "" + that.length,
          chatMsg: "",
          chatVolume: chatvals.say
        }
      }
      that.push(addChatFactory());
    };

    this.addItem = function() {
      var that = this.itemUse;
      var itemUseFactory = function(){
        return {
          itemID: that.length,
          itemName: ""
        }
      }
      that.push(itemUseFactory());
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