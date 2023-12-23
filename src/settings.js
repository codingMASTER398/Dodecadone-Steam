function loadAudioFromURL(e){return new Promise(((n,t)=>{fetch(e).then((e=>e.arrayBuffer())).then((e=>{const t=new Uint8Array(e),r=new Blob([t],{type:"audio/mpeg"}),o=URL.createObjectURL(r),a=new Audio(o);n(a)})).catch((e=>{t(e)}))}))}

let snapSound;
(async()=>{
  snapSound = await loadAudioFromURL(`http://127.0.0.1:4622/src/sounds/settingSnap.wav`)
  snapSound.volume = 0.5
})();

if(window.isMod){
  if(!window.lcl) window.lcl = {mod:true}
  window.LCL = {
    setItem: (item, val) => {window.lcl[item] = val},
    getItem: (item) => window.lcl[item]
  }
}else window.LCL = localStorage;


function initSettings(){
  const settings = [...document.getElementsByTagName(`input`), ...document.getElementsByTagName(`select`)]
  let s;

  for(let i = 0; i < settings.length; i++){
    if(settings[i].type == `text`) continue;

    let setting = settings[i]
    let value = setting.getAttribute(`initial`);

    if(LCL.getItem(`setting${setting.id}`)){
      value = LCL.getItem(`setting${setting.id}`)
    }else LCL.setItem(`setting${setting.id}`, value)

    setting.value = value;
    setting.onchange = ()=>{
      value = setting.value
      LCL.setItem(`setting${setting.id}`, value)
      if(setting.id == "Cheats"){
        if(value == 1) document.querySelector(`#cheatsHidden`).hidden = false
        else document.querySelector(`#cheatsHidden`).hidden = true
      }
    }

    setting.oninput = ()=>{
      snapSound.pause()
      snapSound.currentTime = 0
      snapSound.play()
    }
  }
}