$(function(){
  var $box = $(".sudoku-box"),
      boxStr;

  function createNumBox(){
    var str = '',
        arr = ["2%","12%","22%","35%","45%","55%","68%","78%","88%"];
    for(let i=0;i<9;i++){
      for(let j=0;j<9;j++){
        str += '<div class="num-box box-';
        switch(i){
          case 0:
          case 1:
          case 2:
            if(j<3){
              str += '1"';
            }else if(j<6){
              str += '2"';
            }else{
              str += '3"';
            }
          break;
          case 3:
          case 4:
          case 5:
            if(j<3){
              str += '4"';
            }else if(j<6){
              str += '5"';
            }else{
              str += '6"';
            }
            break;
          case 6:
          case 7:
          case 8:
            if(j<3){
              str += '7"';
            }else if(j<6){
              str += '8"';
            }else{
              str += '9"';
            }
            break;
        }
         str += 'style="top:' +arr[i]+ ';left: ' +arr[j]+ '"><span>'+j+'</span></div>';
      }
    }
    return str;
  }
  boxStr = createNumBox();
  $box.append(boxStr);


});