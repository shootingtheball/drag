<html>
    <head>
        <style>
        </style>
    </head>
    <body>
        <script>
        function annaTransform(){
            var styleAll = window.getComputedStyle(document.createElement("div"),null);
            var data = ["transform","webkitTransform","MozTransform","msTransform","OTransform"];
            for (var i = 0;i< data.length; i++){
                if(data[i] in styleAll){
                    return data[i]
                } else return flase;
            }
        }

        function getTargetStyle(ele,style){
            return  window.getComputedStyle?window.getComputedStyle(ele,null)[style]:ele.currentStyle[style]
        }

        function getInitialPosition(ele){
            var trans = annaTransform();
            var pos = {
                x:0,
                y:0
            }
            if(tarns){
                var transform = getTargetStyle(ele,transform);
                if(transform==none){
                    returen pos;
                }else{
                    return pos = {
                        x:transform[4] + "px",
                        y:transform[5] + "px"
                    }
                }
            }else{
                var position = getTargetStyle(ele,position)
            }
            
        }
        </script>
    </body>
</html>
