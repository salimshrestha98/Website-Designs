$(document).ready(function() {

    function animateSkills() {
        var skillLines = document.querySelectorAll(".skill-line");
        var skillLevels = ["90%","80%","75%","60%","70%"]
        for( var i = 0; i < skillLines.length; i++) {
            $(skillLines[i]).animate({"width": skillLevels[i] },2000);
        }
    }


    var zoomables = $(".zoomable");
    var offsets = new Array;
    var originalHeight = $('html').height();

    for(var i = 0; i< zoomables.length; i++) {
        self = $(zoomables[i]);
        offsets.push(self.offset().top);
    }
  
    $('html').height(originalHeight);
    
    window.onscroll = function() {
        var currentOffset = window.pageYOffset + 250;
        for(var i=0;i<zoomables.length;i++) {
            var self = $(zoomables[i]);
            if ( offsets[i] < currentOffset) {
                if(zoomables[i].id == "skills") {
                    animateSkills();
                } 
                self.addClass("animated zoomIn");
                self.css("opacity",1);      
            }
        }
    }  
    


    var headerNode = document.getElementById('type-container');

    var txtList = [
        "<my-name>",
        "Salim Shrestha",
        "</my-name>",
        "<i-do>",
        "Web Designing",
        "UI/UX Designing",
        "Web Development",
        "</i-do>",
        "<i-believe>",
        "\"Web Presence Is Power!\"",
        "\"Together We Can!\"",
        "</i-believe>"
    ];

    var pointer = 0;
    var counter = 0;
    var currentTxt = null;
    var temp = null;

    function write() {
        if( counter < txtList.length) {
            currentTxt = txtList[counter];
            temp = document.createElement("p");
            if(currentTxt[0] != '<') {
                $(temp).addClass("level2txt");
            }

            else {
                $(temp).addClass("level1txt");
            }

            headerNode.appendChild(temp);
            type();
        }
        
    }

    function type() {
        if(pointer < currentTxt.length) {
            setTimeout(function() {
                temp.innerHTML += currentTxt[pointer++];
                type();
            },150);
        }

        else {
            pointer = 0;
            counter++;
            setTimeout(write,500);
        }
        
    }

    write();

});