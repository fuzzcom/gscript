// genesis script

//import:/Users/flint/Downloads/tater.jpg
//url_import:https://alexlevinson.com/test_me.txt

var hello_world;
var hash;

function BeforeDeploy() {
 hello_world = "helloworld";
 return true; 
}

function Deploy() {
  hash = MD5(hello_world);
  console.log(hash);
  var tater = Asset("tater.jpg");
  console.log(tater.length);
  var ts = Timestamp();
  var fn = "/tmp/" + ts + "_tater.jpg";
  WriteFile(fn, tater);
  return true;
}

function AfterDeploy() {
  console.log(HOSTNAME);
  return true;
}
