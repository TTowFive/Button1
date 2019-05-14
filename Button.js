var count = 0;
var Show

function WhenClick(){
  count++;
  Show = document.getElementById("ShowClickNum_bar");
  Show.innerHTML = count;
  // alert(Show);

}

function WhenClick_2(){
  count = 0;
  Show.innerHTML = count
}
