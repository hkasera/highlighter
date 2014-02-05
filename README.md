# Highlighter - Highlights the selected text.

__Author__   - Harshita Kasera  
__License__   - MIT 


# Introduction

Highlighter is a pure javascript plugin that lets you highlight the text selected through mouse. There is a jQuery version also with customizable options.

# Demo
[Click here](http://jsfiddle.net/hkasera/sdUUD/18/) to see a working demo of the javascript plugin.

[Click here](http://jsfiddle.net/hkasera/pT5s8/) to see a working demo of the jQuery highlighter plugin.


# Installation

For javascript version just include the file highlighter.js
    
    <script src="highlighter.js"></script>
    <link rel="stylesheet" href="highlighter.css" />

For jQuery version you need to add jQuery and the jQuery highlighter plugin and select the target as below :

     <script src="jquery.js"></script>
     <script src="highlighter-jquery.js"></script>
     <link rel="stylesheet" href="highlighter.css" />
     
     $("#target1").highlight({
        highlighted: "highlighter-y" // Specify the class name for the highlighted element
     });
     $("#target2").highlight({
        highlighted: "highlighter-g" // Specify the class name for the highlighted element
     });



