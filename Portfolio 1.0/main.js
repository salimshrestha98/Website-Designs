$(document).ready(function() {

    function animateSkills() {
        var skillLines = document.querySelectorAll(".skill-line");

        for( var i = 0; i < skillLines.length; i++) {
            var wid = $(skillLines[i]).children(0).html();
            $(skillLines[i]).animate({"width": wid },1500);
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
        var currentOffset = window.pageYOffset+300;
        for(var i=0;i<zoomables.length;i++) {
            var self = $(zoomables[i]);
            if ( offsets[i] < currentOffset) {
                if(zoomables[i].id == "skills") {
                    setTimeout(function() {
                        animateSkills();
                    },1000);
                    
                } 
                self.addClass("animated zoomIn");
                self.css("opacity",1);      
            }
        }
    }  
    
    function typeEffect() {
        
        var txtList = ["Hi !","I am Salim.","I design and develop clean and usable sites."];
        var inn = 0;
        var txt = txtList[inn];
        var j = 0;
        var elArray = ["type1","type2","type3"];

        for(var i = 0; i<3; i++) {
            document.getElementById(elArray[i]).innerHTML = "";
        }
        
        var el = document.getElementById(elArray[inn]);

        function typeWriter() {
            if(j == 0) el.innerHTML = "";
            if( j < txt.length ) {
                el.innerHTML += txt.charAt(j);
                j++;
                setTimeout(typeWriter,150);
            }

            else {
                j = 0;
                txt = txtList[++inn];
                el = document.getElementById(elArray[inn]);
                setTimeout(typeWriter,1500);
            }
        }

        typeWriter();
    }
    typeEffect();

     {
        setInterval(function() {
            if (window.pageYOffset < 500) typeEffect();   
        },15000);
    }



    $("#underflow").height(1.2*$("#i-am").height());
})