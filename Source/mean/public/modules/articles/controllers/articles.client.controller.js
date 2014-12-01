'use strict';
angular.module('articles').controller('ArticlesController', function() {
    this.abilitySyntax = [];
    this.itemUse = [];
    this.chat = [];
    this.macroSyntax = '#showtooltip';
    
    this.modChoices = {
      None: '',
      alt: 'alt',
      shift: 'ctrl',
      control: 'shift'
    };

    this.spellTarget = {
      None: '',
      self: 'Target Self',
      hover: 'At MousePointer',
      target: 'Current Target',
      focus: 'Focus Target'
    };

    this.volume = {
      say: '/say ',
      shout: '/yell '
    };

    this.addAbility = function() {
      var that = this.abilitySyntax;
      var mods = this.modChoices;
      var targets = this.spellTarget;
      var abilityFactory = function(){
        return {
          abilityID: that.length,
          abilityMod: mods.None,
          abilityTarget: targets.None,
          abilityName: ''
        };
      };
      that.push(abilityFactory());
    };

    this.addChat = function() {
      var that = this.chat;
      var chatvals = this.volume;
      var addChatFactory = function(){
        return {
          chatID: that.length,
          chatMsg: '',
          chatVolume: chatvals.say
        };
      };
      that.push(addChatFactory());
    };

    this.addItem = function() {
      var that = this.itemUse;
      var itemUseFactory = function(){
        return {
          itemID: that.length,
          itemName: ''
        };
      };
      that.push(itemUseFactory());
    };
    
    this.cast = function cast(abilityName, modkey, target) {
      var mod = this.modChoices;
      var tar = this.spellTarget;
      var spellSyntax, targetSyntax;
      if(target===tar.None){
        spellSyntax = (modkey===mod.None)? ' ' + abilityName :' [mod: ' + modkey +'] ' + abilityName;
      }
      else{
        targetSyntax = (target==='Target Self')? 'player': (target==='At MousePointer')? 'mouseover': (target==='Current Target')? 'target' : 'focus';
        spellSyntax = (modkey==='')? ' [@'+targetSyntax+'] ' + abilityName :' [mod: ' + modkey + ',[@'+targetSyntax+'] ' + abilityName;
      } 
      return spellSyntax;
    };

    this.generateMacroSyntax = function generateSyntax() {
      var spells = this.abilitySyntax;
      var items = this.itemUse;
      var chat = this.chat;
      var syntax = '#showtooltip';
      var i = 0;
      for (i = 0; i < spells.length; i++) { 
        if(i>0){
          syntax +=  ';';
        }
        else{
          syntax += '\n';
          syntax +=  '/cast';
        }
        syntax += this.cast(spells[i].abilityName,spells[i].modkey,spells[i].abilityTarget);
      }
      for (i = 0; i < items.length; i++) { 
        if(i===0) {
          syntax += '\n';
        }
        syntax += '/use ' + items[i].itemName;
      }
      for (i = 0; i < chat.length; i++) { 
        if(i===0) {
          syntax += '\n';
        }
        syntax += chat[i].chatVolume + ' ' + chat[i].chatMsg;
      }
      this.macroSyntax = syntax;
    };


  }).filter('iif', function () {
   return function(input, trueValue, falseValue) {
        return input ? trueValue : falseValue;
   };
});

  // value={{$first | iif : "invoice.cast(a)" : "invoice.castWithMod(a,'shift'}}"