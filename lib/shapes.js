function circle(){
    return <svg width="100" height="100">
    <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
    </svg>
    };
    
    
    function square(){
    
    return <svg width="100" height="100">
    <rect x="10" y="10" width="80" height="80" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
    </svg>
    };
    
    function triangle(){
     return <svg width="100" height="100">
    <polygon points="50,10 10,90 90,90" style="fill:lime;stroke:purplestroke-width:1" />
    </svg>
    };

    module.exports = { createSVG };