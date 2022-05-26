function red() {
    document.getElementById("color").style.color = "red"
    document.getElementById("pallete").style.backgroundColor = document.getElementById("color").style.color
}
function blue() {
    document.getElementById("color").style.color = "blue"
    document.getElementById("pallete").style.backgroundColor = document.getElementById("color").style.color
}
function yellow() {
    document.getElementById("color").style.color = "yellow"
    document.getElementById("pallete").style.backgroundColor = document.getElementById("color").style.color
}
function black() {
    document.getElementById("color").style.color = "black"
    document.getElementById("pallete").style.backgroundColor = document.getElementById("color").style.color
}
function white() {
    document.getElementById("color").style.color = "white"
    document.getElementById("pallete").style.backgroundColor = document.getElementById("color").style.color
}

function custom() {
    if (document.getElementById("customInput").value === ":)") {
        blank()
        document.getElementById("b2").style.backgroundColor = "red"
        document.getElementById("b4").style.backgroundColor = "blue"
        document.getElementById("d2").style.backgroundColor = "yellow"
        document.getElementById("d4").style.backgroundColor = "black"
        document.getElementById("e2").style.backgroundColor = "red"
        document.getElementById("e3").style.backgroundColor = "blue"
        document.getElementById("e4").style.backgroundColor = "yellow"
        document.getElementById("pallete").style.backgroundColor = document.getElementById("color").style.color
    }
    else {
        document.getElementById("color").style.color = document.getElementById("customInput").value
        document.getElementById("pallete").style.backgroundColor = document.getElementById("color").style.color
    }
}

function blank() {
    document.getElementById("a1").style.backgroundColor = "white"
    document.getElementById("a2").style.backgroundColor = "white"
    document.getElementById("a3").style.backgroundColor = "white"
    document.getElementById("a4").style.backgroundColor = "white"
    document.getElementById("a5").style.backgroundColor = "white"
    document.getElementById("b1").style.backgroundColor = "white"
    document.getElementById("b2").style.backgroundColor = "white"
    document.getElementById("b3").style.backgroundColor = "white"
    document.getElementById("b4").style.backgroundColor = "white"
    document.getElementById("b5").style.backgroundColor = "white"
    document.getElementById("c1").style.backgroundColor = "white"
    document.getElementById("c2").style.backgroundColor = "white"
    document.getElementById("c3").style.backgroundColor = "white"
    document.getElementById("c4").style.backgroundColor = "white"
    document.getElementById("c5").style.backgroundColor = "white"
    document.getElementById("d1").style.backgroundColor = "white"
    document.getElementById("d2").style.backgroundColor = "white"
    document.getElementById("d3").style.backgroundColor = "white"
    document.getElementById("d4").style.backgroundColor = "white"
    document.getElementById("d5").style.backgroundColor = "white"
    document.getElementById("e1").style.backgroundColor = "white"
    document.getElementById("e2").style.backgroundColor = "white"
    document.getElementById("e3").style.backgroundColor = "white"
    document.getElementById("e4").style.backgroundColor = "white"
    document.getElementById("e5").style.backgroundColor = "white"
}

function a1fu() {
        document.getElementById("a1").style.backgroundColor = document.getElementById("color").style.color
    }
    
function a2fu() {
    
        document.getElementById("a2").style.backgroundColor = document.getElementById("color").style.color 
    }
    

function a3fu() {
    
        document.getElementById("a3").style.backgroundColor = document.getElementById("color").style.color 
    }
    

function a4fu() {
    
        document.getElementById("a4").style.backgroundColor = document.getElementById("color").style.color 
    }
    

function a5fu() {
    
        document.getElementById("a5").style.backgroundColor = document.getElementById("color").style.color 
    }
    

function b1fu() {
    
        document.getElementById("b1").style.backgroundColor = document.getElementById("color").style.color 
    }
    

function b2fu() {
    
        document.getElementById("b2").style.backgroundColor = document.getElementById("color").style.color 
    }
    

function b3fu() {
    
        document.getElementById("b3").style.backgroundColor = document.getElementById("color").style.color 
    }
    

function b4fu() {
    
        document.getElementById("b4").style.backgroundColor = document.getElementById("color").style.color 
    }
    

function b5fu() {
    
        document.getElementById("b5").style.backgroundColor = document.getElementById("color").style.color
    }
    

function c1fu() {
    
        document.getElementById("c1").style.backgroundColor = document.getElementById("color").style.color
    }
    

function c2fu() {
    
        document.getElementById("c2").style.backgroundColor = document.getElementById("color").style.color 
    }
    

function c3fu() {
    
        document.getElementById("c3").style.backgroundColor = document.getElementById("color").style.color 
    }
    

function c4fu() {
    
        document.getElementById("c4").style.backgroundColor = document.getElementById("color").style.color 
    }
    

function c5fu() {
    
        document.getElementById("c5").style.backgroundColor = document.getElementById("color").style.color 
    }
    

function d1fu() {
    
        document.getElementById("d1").style.backgroundColor = document.getElementById("color").style.color 
    }
    

function d2fu() {
    
        document.getElementById("d2").style.backgroundColor = document.getElementById("color").style.color 
    }
    

function d3fu() {
    
        document.getElementById("d3").style.backgroundColor = document.getElementById("color").style.color 
    }
    

function d4fu() {
    
        document.getElementById("d4").style.backgroundColor = document.getElementById("color").style.color 
    }
    

function d5fu() {
    
        document.getElementById("d5").style.backgroundColor = document.getElementById("color").style.color 
    }
    

function e1fu() {
    
        document.getElementById("e1").style.backgroundColor = document.getElementById("color").style.color 
    }
    

function e2fu() {
    
        document.getElementById("e2").style.backgroundColor = document.getElementById("color").style.color 
    }
    

function e3fu() {
    
        document.getElementById("e3").style.backgroundColor = document.getElementById("color").style.color 
    }
    

function e4fu() {
    
        document.getElementById("e4").style.backgroundColor = document.getElementById("color").style.color 
    }
    

function e5fu() {
    
        document.getElementById("e5").style.backgroundColor = document.getElementById("color").style.color 
    }
    
function sideBarGone() {
    document.getElementById("rightSideTab").style.display = "none"
    document.getElementById("leftSideTab").style.display = "none"
    document.getElementById("sideback").style.display = "block"
}
function sideBarBack() {
    document.getElementById("rightSideTab").style.display = "block"
    document.getElementById("leftSideTab").style.display = "block"
    document.getElementById("sideback").style.display = "none"
}

function changeBackground() {
    document.getElementById("body").style.backgroundColor = document.getElementById("color").style.color
}