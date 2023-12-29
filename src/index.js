let cpn = `
** 
* Copyright (C) Lachlan Noble (coding398) - All Rights Reserved
* This work is licensed under Attribution-NonCommercial-ShareAlike 4.0 International.
* To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/
* 
*`

// THE GROUNDS!!1
let grounds, floor, sides, shapeG, combo = 0, comboS, spawnBar, nextDrop, best = 0, trash, chaos = false, allowRT = false, startTime = Date.now(), strings, frames = 0, placed = 0, dropLine = [], flipperL, flipperR, mTexts, highestCombo = 0, score = 0, cheatsWereEnabled = false, bubbles, lastRestart = Date.now();

if(window.isMod){
  if(!window.lcl) window.lcl = {mod:true}
  window.LCL = {
    setItem: (item, val) => {window.lcl[item] = val},
    getItem: (item) => window.lcl[item]
  }
}else window.LCL = localStorage;

;(async()=>{
  strings = await fetch(`http://127.0.0.1:4622/src/i18n/${LCL.getItem("settingLanguage") || "english"}.json`)
  strings = await strings.json()

  document.getElementsByTagName("*").forEach((e)=>{
    if(e.getAttribute("data-langname")) e.innerText = strings.body[e.getAttribute("data-langname")]
  })

  if(!isMod && LCL.getItem("settingLanguage") != "silly"){
    let f = await fetch(`http://127.0.0.1:4622/src/i18n_dm/${LCL.getItem("settingLanguage") || "english"}.json`)
    let ff = await fetch(`http://127.0.0.1:4622/src/i18n_dm/english.json`)

    f = await f.json(), ff = await ff.json();

    spawnableTraitsLang = spawnableTraits.map((t)=>{
      return f[ff.indexOf(t)]
    }) || structuredClone(spawnableTraits)
  }
})();

const sounds = {
  merge: mod.sounds.merge || new Audio(`http://127.0.0.1:4622/src/sounds/wranpck.wav`),
  fweng: mod.sounds.fweng || new Audio(`http://127.0.0.1:4622/src/sounds/fweeng.wav`),
  siren: mod.sounds.siren || new Audio(`http://127.0.0.1:4622/src/sounds/siren.wav`),
  newBest: mod.sounds.newBest || new Audio(`http://127.0.0.1:4622/src/sounds/whau.wav`),
  ghulp: mod.sounds.ghulp || new Audio(`http://127.0.0.1:4622/src/sounds/ghulp.wav`),
  cough: mod.sounds.cough || new Audio(`http://127.0.0.1:4622/src/sounds/cough.wav`),
  bang: mod.sounds.bang || new Audio(`http://127.0.0.1:4622/src/sounds/bang.mp3`),
  bang2: mod.sounds.bang2 || new Audio(`http://127.0.0.1:4622/src/sounds/bang.wav`),
  kick: mod.sounds.kick || new Audio(`http://127.0.0.1:4622/src/sounds/kick.wav`),
  death: mod.sounds.death || new Audio(`http://127.0.0.1:4622/src/sounds/death.wav`),
  tick: mod.sounds.tick || new Audio(`http://127.0.0.1:4622/src/sounds/tick.wav`),
  poke: mod.sounds.poke || new Audio(`http://127.0.0.1:4622/src/sounds/poke.wav`),
  drop: mod.sounds.drop || new Audio(`http://127.0.0.1:4622/src/sounds/drop.wav`),
  bubble1: mod.sounds.bubble1 || new Audio(`http://127.0.0.1:4622/src/sounds/bubble1.wav`),
  bubble2: mod.sounds.bubble2 || new Audio(`http://127.0.0.1:4622/src/sounds/bubble2.wav`),
  bubble3: mod.sounds.bubble3 || new Audio(`http://127.0.0.1:4622/src/sounds/bubble3.wav`),
  musicIntro: mod.sounds.musicIntro || new Audio(`http://127.0.0.1:4622/src/sounds/pentajam_intro.wav`),
  musicLoop: mod.sounds.musicLoop || new Audio(`http://127.0.0.1:4622/src/sounds/pentajam_loop.wav`),
  metalPipe: mod.sounds.metalPipe || new Audio(`http://127.0.0.1:4622/src/sounds/metal-pipe-clang.mp3`),
  ...mod.sounds
}

for (const key in mod.sounds) {
  sounds[key] = mod.sounds[key];
}

comboS = setTimeout(()=>{}, 0)

const shapes = mod.shapes

const spawnableTraits = mod.traits.map((t)=>t.name)
let spawnableTraitsLang;

if(isMod || LCL.getItem("settingLanguage") == "silly"){
  spawnableTraitsLang = mod.traits.map((t)=>t?.localisations?.[LCL.getItem("settingLanguage") || "english"]) || structuredClone(spawnableTraits)
}

//const spawnableTraits = ["dizzy"]

function calculateTimeDifference(startDate, endDate) {
  const timeDifference = endDate - startDate;

  // Calculate hours, minutes, seconds, and milliseconds
  const hours = Math.floor(timeDifference / 3600000);
  const minutes = Math.floor((timeDifference % 3600000) / 60000);
  const seconds = Math.floor((timeDifference % 60000) / 1000);
  const milliseconds = timeDifference % 1000;

  // Format the result with padded zeros
  const formattedTime =
    padZero(hours) +
    ':' +
    padZero(minutes) +
    ':' +
    padZero(seconds) +
    '.' +
    padZero(milliseconds, 1);

  return formattedTime;
}

// Helper function to pad zeros
function padZero(number, width = 2) {
  const numString = number.toString();
  return numString.length >= width ? numString : new Array(width - numString.length + 1).join('0') + numString;
}

mod.runner()

if(mod.canUseFlippers === false){
  document.getElementById(`rotation`).style.display = "none"
}

window.addEventListener(`resize`, ()=>{
  camera.y = 100;
  document.getElementById(`controlBar`).classList.add(`changedSize`)
})

let loadingMod = false

async function deleteMod(file){
  proc.send({
    type: 3,
    name: file
  })
  setTimeout(updateMods, 500)
}

async function runMod(file, noRun){
  if(loadingMod) return;
  loadingMod = true;

  if(typeof file == "number" && file == 99 && noRun){
    proc.send({
      type: 2,
      name: "saveToFile-"+Date.now()+".js",
      content: document.querySelector(`#modContents`).value
    })

    document.querySelector(`#modContents`).value = strings.body.saving

    setTimeout(()=>{
      loadingMod = false;
      document.querySelector(`#modContents`).value = strings.body.saved
      updateMods()
    },1000)
    return;
  }

  document.querySelector(`#LOOKATMEIMAHUGEBLACKBALL`).classList.add(`out`)

  if(typeof file == "number" && file == 99){
    proc.send({
      type: 2,
      name: "DONOTSHOW.js",
      content: document.querySelector(`#modContents`).value
    })
    setTimeout(()=>{
      window.location.href = "./mod.html?mod=DONOTSHOW.js"
    },1000)
    return;
  }

  proc.send({
    type: 1
  })
  setTimeout(()=>{
    window.location.href = "./mod.html?mod="+file
  },500)
}

function sanit(text){
  return text.replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#039;')
}

function updateMods(){
  let o = ``, mods =
  JSON.parse(localStorage.getItem(`mods`))

  for (let i = 0; i < mods.length; i++) {

    o += `<div class="gamemode">
    <h4>${sanit(mods[i].name)} <span class="by">by ${sanit(mods[i].by)}</span></h4>
    <a class="start" href="javascript:runMod('${sanit(mods[i].file)}')"><span class="material-symbols-rounded">
      sports_esports
      </span> ${strings.body.START}</a>
    <a href="javascript:deleteMod('${sanit(mods[i].file)}')"><span class="material-symbols-rounded">
      delete
      </span> ${strings.body.DELETE}</a>
  </div><br>`
  }

  document.getElementById(`gamemodes`).innerHTML = o
}
setInterval(updateMods, 1000)

async function setup() {
  initSettings()
	new Canvas();

  textFont('Roboto Slab');

  calculateDropLine()

  world.autoStep = false

  //spawnableTraitsLang = strings.traits

  world.allowSleeping = false

  camera.y = 100;
  camera.zoom = document.body.clientWidth * 0.0005;
  if(document.body.clientWidth > (document.body.clientHeight * 1.9)){
    camera.zoom *= 0.8
  }

  grounds = new Group()
  shapeG = new Group()
  trash = new Group()
  bubbles = new Group()
  mTexts = []

  mod.map(grounds)

  spawnBar = new Sprite(0,0)
  spawnBar.width = 20;
  spawnBar.height = 10000;
  spawnBar.color = "rgba(0,0,0,0)"
  spawnBar.collider = "n"
  spawnBar.stroke = "rgba(0,0,0,0.1)";

  drawingContext.shadowColor = 'rgba(0,0,0,0.3)';
  drawingContext.shadowBlur = 5

  try{document.getElementById(`abl`).innerText = strings.body.noAdBlock}catch{}

  tippy('#menu', {
    content: strings.body.settings,
  });

  tippy('#chaos', {
    content: strings.body.chaos,
  });

  tippy('#restart', {
    content: strings.body.restart,
  });

  if(!isMod) tippy('#achievements', {
    content: strings.body.achievements,
  });

  tippy('#rotation', {
    content: strings.body.rotation,
  });

  if(!isMod) document.getElementById(`exit`).addEventListener(`click`, ()=>{
    proc.send({
      type: 5
    })
  })

  if(!isMod){
    tippy('#mods', {
      content: strings.body.mods,
    });

    tippy('#discord', {
      content: "Discord",
    });

    tippy('#exit', {
      content: strings.body.exit,
    });

    document.getElementById(`discord`).addEventListener(`click`, ()=>{
      proc.send({type:4})
    })

    document.getElementById(`customThemeText`).addEventListener(`input`, ()=>{
      document.getElementById(`customTheme`).innerText = document.getElementById(`customThemeText`).value
    })
    document.getElementById(`mods`).addEventListener(`click`, ()=>{
      document.getElementById(`modModal`).showModal();
      setTimeout(()=>{
        sounds.metalPipe.play()
      },100)

      updateMods()
    })
    document.getElementById(`modsClose`).addEventListener(`click`, ()=>{
      document.getElementById(`modModal`).classList.add(`closing`)
      setTimeout(()=>{
        document.getElementById(`modModal`).close();
        document.getElementById(`modModal`).classList.remove(`closing`)
        sounds.metalPipe.play()
      },100)
    })
  }

  document.getElementById(`Language`).addEventListener(`change`, ()=>{
    setTimeout(async()=>{
      let s = await fetch(`http://127.0.0.1:4622/src/i18n/${LCL.getItem("settingLanguage") || "english"}.json`)
      strings = await s.json()

      document.getElementsByTagName("*").forEach((e)=>{
        if(e.getAttribute("data-langname")) e.innerText = strings.body[e.getAttribute("data-langname")]
      })

      if(!isMod && LCL.getItem("settingLanguage") != "silly"){
        let f = await fetch(`http://127.0.0.1:4622/src/i18n_dm/${LCL.getItem("settingLanguage") || "english"}.json`)
        let ff = await fetch(`http://127.0.0.1:4622/src/i18n_dm/english.json`)
    
        f = await f.json(), ff = await ff.json();
    
        spawnableTraitsLang = spawnableTraits.map((t)=>{
          return f[ff.indexOf(t)]
        }) || structuredClone(spawnableTraits)
      }else{
        spawnableTraitsLang = mod.traits.map((t)=>t?.localisations?.[LCL.getItem("settingLanguage") || "english"]) || structuredClone(spawnableTraits)
      }
    },100)
  })

  document.getElementById(`menu`).addEventListener(`click`, ()=>{
    document.getElementById(`settings`).showModal();
    setTimeout(()=>{
      sounds.metalPipe.play()
    },100)
  })
  document.getElementById(`menuClose`).addEventListener(`click`, ()=>{
    document.getElementById(`settings`).classList.add(`closing`)
    setTimeout(()=>{
      document.getElementById(`settings`).close();
      document.getElementById(`settings`).classList.remove(`closing`)
      sounds.metalPipe.play()
    },100)
  })

  document.getElementById(`rotation`).addEventListener(`click`, ()=>{
    if(allowRT){
      allowRT = false
      document.getElementById(`rotation`).classList.remove(`enabled`)
    }else{
      allowRT = true
      document.getElementById(`rotation`).classList.add(`enabled`)
    }
  })

  document.getElementById(`chaos`).addEventListener(`click`, ()=>{
    if(chaos){
      chaos = false
      document.getElementById(`chaos`).classList.remove(`enabled`)
    }else{
      chaos = true
      document.getElementById(`chaos`).classList.add(`enabled`)
    }
  })

  document.getElementById(`theme`).addEventListener(`change`, ()=>{
    document.body.className = document.getElementById(`theme`).value
    if(document.getElementById(`theme`).value == "performance"){
      drawingContext.shadowBlur = 0
    }else{
      drawingContext.shadowBlur = 5
    }
  })
  
  document.getElementById(`restart`).addEventListener(`click`, ()=>{
    lastRestart = Date.now()

    sounds.bang.currentTime = 0;
    if(LCL.getItem(`settingRestartExplosion`) == "1") sounds.bang.play();
    allSprites.attractTo(floor, -2000000)
  })

  sounds.musicIntro.play();
  sounds.musicIntro.addEventListener('ended', function () {
    sounds.musicLoop.play();
  })
  sounds.musicLoop.addEventListener('ended', function () {
    sounds.musicLoop.currentTime = 0;
    sounds.musicLoop.play()
  })
}

function scoreBubble(x,y,score,bonus, oscore){
  let s;

  if(score > 10){
    let split = Number(score);
    let rem = Math.ceil(score / 10)
    while(rem > 0){
      rem--;
      if(split < 10){
        scoreBubble(x, y, 10 - split, bonus, score)
      }else{
        scoreBubble(x, y, 10, bonus, score)
      }
      split -= 10
    }
    return;
  }else{
    s = new bubbles.Sprite(x, y), rem = 0, split = 0;

    if(oscore){
      x += (Math.random() * oscore - (oscore / 2)) * 3
      y += (Math.random() * oscore - (oscore / 2)) * 3
    }
  }

  s.radius = 5 + (score * 0.5)

  s.collider = "n"
  s.color = "rgba(255,255,255,0.2)"
  s.x = x, s.y = y;
  s.scale = 0;
  s.layer = 0;
  s.aliveFor = 0;
  s.ox = x;
  s.oy = y;
  s.score = score
}

function createTrash(x,y){
  let s = new trash.Sprite(x, y);
  s.width = random(10, 60)
  s.height = random(10, 60)

  s.vel.y = 1
  s.rotation = Math.random() * 360
  s.isSuperFast = true
}

function modTraitFromTraitName(t){
  return mod.traits.filter((e)=>e.name == t)[0]
}

function createShape(x,y,shape,index, trait){
  if(index == 1 && modTraitFromTraitName(trait).indexGenerator) index = modTraitFromTraitName(trait).indexGenerator();

  let s = new shapeG.Sprite(x - (shape.radius / 2), y, shape.radius, shape.shape == "circle" ? null : shape.shape);
  s.trait = trait
  s.index = index
  s.color = shape.color || "white"
  s.vel.y = -index
  s.rotation = Math.random() * 360
  s.strokeWeight = 3
  s.isSuperFast = true
  s.lastTouchOfTHEGROUNDS = 0
  s.aliveFor = 0;
  s.originalIndex = Number(index)
  
  if(index == 1) s.vel.y = 10;

  s.stroke = structuredClone(s.color)
  setTimeout(()=>{
    s.stroke.levels[0] *= 0.6
    s.stroke.levels[1] *= 0.6
    s.stroke.levels[2] *= 0.6
  }, 0)

  let face = new Sprite(x, y)
  face.width = 1
  face.height = 1
  face.collider = "none"
  face.scale = index * 0.2
  s.face = face;

  if(modTraitFromTraitName(trait).face){
    if(modTraitFromTraitName(trait).face.includes(`base64`)) face.img = modTraitFromTraitName(trait).face.replace('/', "./");
    else face.img = modTraitFromTraitName(trait).face;
  }else{
    face.remove()
  }

  s.david = modTraitFromTraitName(trait).david || false
  
  s.canDie = true;

  if(modTraitFromTraitName(s.trait).onSpawn){
    modTraitFromTraitName(s.trait).onSpawn(s)
  }

  if(!isMod && cheatsWereEnabled == false){
    proc.send({
      type: 6,
      achievement: shape.shape
    })

    if(index == 6 && trait == "void"){
      proc.send({
        type: 6,
        achievement: "voidagon"
      })
    }
  }

  outbreakCheck()
}

function calculateDropLine(){
  if(dropLine.length == 0 || !nextDrop){
    dropLine = structuredClone(spawnableTraits).map(value => ({ value, sort: Math.random() }))
                                               .sort((a, b) => a.sort - b.sort)
                                               .map(({ value }) => value)
                                               .filter((e)=>{
                                                return modTraitFromTraitName(e).canBeNaturallySpawned !== false
                                               })
  }
  nextDrop = dropLine[0];
}

function posToCanvas(x,y){
  return {x: x, y: (((y+camera.y) * camera.zoom) / 2) + (document.body.clientHeight / 2)}
}

let lastDraw = Date.now(), framePassed = 0;

function updateSettings(){
  for (const sound in sounds) {
    if(!sound.includes(`music`)) sounds[sound].volume = Number(LCL.getItem(`settingSFXVolume`))
  }
  sounds.musicIntro.volume = Number(LCL.getItem(`settingMusicVolume`))
  sounds.musicLoop.volume = Number(LCL.getItem(`settingMusicVolume`))
  sounds.siren.volume = 0.1 * Number(LCL.getItem(`settingSFXVolume`))
  sounds.metalPipe.volume = 0.1 * Number(LCL.getItem(`settingSFXVolume`))
}

setInterval(updateSettings, 2000)
updateSettings()

function easeOutBack(x) {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  
  return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
}

function outbreakCheck(){
  if(!isMod && cheatsWereEnabled == false){
    if(shapeG.filter((s)=>s.sick > 0).length == 20){
      proc.send({
        type: 6,
        achievement: "outbreak"
      })
    }
  }
}

function draw() {
  // Game rendering
  let f = (Date.now() - lastDraw) / 1000
  if(f < 0.016 || f > 0.1) f = 0.016

  document.getElementById(`topScore`).innerText = score || "0"

  if(LCL.getItem(`settingCheats`) == "1"){
    cheatsWereEnabled = true

    if(kb.pressing('1')){
      f = 0
    }
    if(kb.presses('2')){
      dropLine.shift()
      calculateDropLine()
    }
    if(kb.presses('3')){
      createShape(mouse.x, -500, shapes[7], 8, "smile")
    }
    if(kb.presses('4')){
      shapeG.forEach((s)=>{
        if(s.dead || s.trait == "dead"){
          s.face.remove()
          s.remove()
        }
      })
    }
    if(kb.pressing('5')){
      shapeG.attractTo(floor, 999999999)
    }
    if(kb.pressing('6')){
      f *= 3
    }
    if(kb.pressing('7')){
      spawnBar.color.setAlpha(100)
    }
  }

  if(f) world.step(f);

  framePassed += f
  if(framePassed >= 0.016){
    frames++;
    framePassed -= 0.016
  }

  lastDraw = Date.now()

	if(document.getElementById(`theme`).value != "norefresh") clear();
  
  world.gravity.y = 10;
  if(camera.y > -1100 + document.body.clientWidth + 32) camera.y--;

  allSprites.cull(1000,1000,1000,1000)

  strokeWeight(3)
  if(best != 10 && mod.noNextIs !== true){
    document.querySelector(`#textTwo`).innerText =  strings.body.nextIs + " " + spawnableTraitsLang[spawnableTraits.indexOf(nextDrop)];
  }
  else if(best != 10){
    if(mod.nextIsGenerator){
      document.querySelector(`#textTwo`).innerText =  strings.body.nextIs + " " + mod.nextIsGenerator()
    }else{
      document.querySelector(`#textTwo`).innerText = ``;
    }
  }

  if(flipperL && flipperR){
    if(mouse.x > flipperR.x + mod.sideLeniance) mouse.x = flipperR.x + mod.sideLeniance;
    if(mouse.x < flipperL.x - mod.sideLeniance) mouse.x = flipperL.x - mod.sideLeniance;

    if(kb.pressing("left") && allowRT){
      if(flipperL.rotation > -90) flipperL.rotation-=2
    }else if(flipperL.rotation < -30){
      flipperL.rotation+=2;
    }

    if(kb.pressing("right") && allowRT){
      if(flipperR.rotation < 90) flipperR.rotation+=2
    }else if(flipperR.rotation > 30){
      flipperR.rotation-=2;
    }
  }

  if(((kb.pressing(' ')) && spawnBar.color._getAlpha() >= 100) || chaos && spawnBar.color._getAlpha() >= 25){
    document.getElementById(`textTwo`).classList.remove(`bounce`)
    document.getElementById(`textTwo`).offsetWidth;
    document.getElementById(`textTwo`).classList.add(`bounce`)

    placed++;

    sounds.drop.play()

    if(modTraitFromTraitName(nextDrop).isTrash){
      createTrash(mouse.x, -500)
    }else{
      createShape(mouse.x, -500, shapes[0], 1, nextDrop)
    }

    dropLine.shift()
    calculateDropLine()
    spawnBar.color.setAlpha(0)
  }

  spawnBar.x = mouse.x
  if(spawnBar.color._getAlpha() < 100){
    spawnBar.color.setAlpha(spawnBar.color._getAlpha() + 1)
  }

  let highest = 0

  bubbles.forEach((b)=>{
    let tx = width / 2,
        ty = camera.y - (height / 2) + 56;

    if(b.aliveFor >= 100) {
      let s = sounds[`bubble${Math.ceil(Math.random() * 3)}`]
      s.volume = LCL.getItem(`settingSFXVolume`) * (0.05 + b.score * 0.02)
      s.currentTime = 0; s.play()
      score += Number(b.score)
      score = Math.round(score)
      b.remove()

      document.getElementById(`topScore`).classList.remove(`boing`)
      document.getElementById(`topScore`).offsetWidth;
      document.getElementById(`topScore`).classList.add(`boing`)
    }
    else{
      b.aliveFor++;
      b.x = b.ox + ((tx - b.ox) * easeOutBack(b.aliveFor * 0.01))
      b.y = b.oy + ((ty - b.oy) * easeOutBack(b.aliveFor * 0.01))
      b.scale = (easeOutBack(b.aliveFor * 0.01) > 0.5 ? 0.5 - (easeOutBack(b.aliveFor * 0.01) - 0.5) : easeOutBack(b.aliveFor * 0.01)) * 2
    }
  })

  mTexts.forEach((t)=>{
    if(t.slow) t.far += 0.2;
    else t.far++;
    t.y -= t.slow ? 1 / 5 : 1;
    t.textSize *= t.slow ? 0.99 : 0.95;
    if(t.far >= 60){
      mTexts = mTexts.filter((e)=>e!=t)
      t.remove()
    }
  })

  shapeG.forEach((s)=>{
    if(!s._lastTrait){
      s._lastTrait = String(s.trait)
    }
    if(s._lastTrait != s.trait && modTraitFromTraitName(s.trait).onSpawn){
      modTraitFromTraitName(s.trait).onSpawn(s)
      s._lastTrait = String(s.trait)
      console.log(`converting traits`)
      s.face.img = modTraitFromTraitName(s.trait).face.replace(`/`, `./`)

      outbreakCheck()
    }

    if(s.index > highest) highest = s.index;

    s.face.x = s.x; s.face.y = s.y; s.face.rotation = s.rotation;

    if(s.dead) return;

    s.aliveFor++;

    if(s.collides(allSprites) && Date.now() - s.lastTouchOfTHEGROUNDS > 200){
      sounds.poke.volume = 0.2 * Number(LCL.getItem(`settingSFXVolume`))
      sounds.poke.currentTime = 0
      sounds.poke.play()
      s.lastTouchOfTHEGROUNDS = Date.now()
    }

    if(frames % 60 == 0){
      s.scaleLock = false
    }

    if(modTraitFromTraitName(s.trait).onUpdate){
      modTraitFromTraitName(s.trait).onUpdate(s)
    }

    if(!isMod){
      if(!s.lastPos) s.lastPos = {x:s.x, y: s.y}
      else{
        let a = s.lastPos.x - s.x
        let b = s.lastPos.y - s.y
        let d = Math.sqrt(a*a + b*b)

        if(d > 100 && (Date.now() - lastRestart > 10_000) && s.trait != "unstable") {
          proc.send({
            type: 6,
            achievement: "100mph"
          })
        };

        s.lastPos = {x:s.x, y: s.y}
      }
    }

    shapeG.forEach((ss)=>{
      if(s.colliding(ss)){
        if(modTraitFromTraitName(s.trait).onTouch){
          modTraitFromTraitName(s.trait).onTouch(s, ss)
        }
      }

      if(s.index !== ss.index) return;

      if((s.colliding(ss) || s.collided(ss)) && s.aliveFor > 5 && ss.aliveFor > 5){
        // RACISM
        if(s.mad || ss.mad) return;

        let rr = false
        shapeG.forEach((r)=>{
          if(r.mad){
            if(s.colliding(r) || ss.colliding(r)){
              rr = true
            }
          }
        })
        if(rr) return;

        if(modTraitFromTraitName(s.trait).preMerge){
          if(!modTraitFromTraitName(s.trait).preMerge(s, ss)){
            return;
          }
        }
        if(modTraitFromTraitName(ss.trait).preMerge){
          if(!modTraitFromTraitName(ss.trait).preMerge(ss, s)){
            return;
          }
        }
        if(modTraitFromTraitName(s.trait).useDefaultMerge === false){
          modTraitFromTraitName(s.trait).defaultMergeOverride(s, ss)
          return;
        }

        const centerX = (s.x + ss.x) / 2;
        const centerY = (s.y + ss.y) / 2;

        const newTrait = Math.random() > 0.5 ? s.trait : ss.trait

        createShape(centerX, centerY, shapes[s.index], s.index + 1, newTrait)

        if(LCL.getItem(`settingPerformance`) == "0"){
          let n = new Sprite()
          mTexts.push(n)
          n.x = centerX
          n.y = centerY - (30 + (s.index * 30))
          n.collider = "n"
          n.text = spawnableTraitsLang[spawnableTraits.indexOf(newTrait)] + " " + (shapes[s.index].name ? shapes[s.index].name : shapes[s.index].shape)
          n.strokeWeight = 0
          n.color = "rgba(0,0,0,0)"
          n.far = 0;
          n.textSize = 30 + (combo * 20);
          n.textColor = shapes[s.index].color
          n.textColor.levels[0] *= 1.5
          n.textColor.levels[1] *= 1.5
          n.textColor.levels[2] *= 1.5
        }

        if(modTraitFromTraitName(s.trait).contributesToCombo !== false){
          combo++
          if(combo > highestCombo){
            highestCombo = combo
          }
          if(combo >= 2 && LCL.getItem(`settingPerformance`) == "0" && !isMod) n.text += ` x${combo}`
          clearTimeout(comboS)
          comboS = setTimeout(()=>{
            combo = 0;
          }, 500)
        }

        scoreBubble(centerX, centerY, (s.index ** 2) * (1+(combo * 0.5)), false)

        //score += (s.index ** 2) * (1+(combo * 0.5))
        score = Math.round(score)

        s.nuhuh = true
        ss.nuhuh = true
        s.face.remove()
        ss.face.remove()
        s.remove()
        ss.remove()

        sounds.merge.currentTime = 0
        sounds.merge.playbackRate = 1 + (combo * 0.4)
        sounds.merge.volume = (s.index * 0.08) * Number(LCL.getItem(`settingSFXVolume`))

        sounds.merge.play()
        return;
      }
    })
  })

  if(best == Object.keys(mod.shapes).length) return;

  if(highest == 0){
    document.querySelector(`#textOne`).innerText = strings.body.space
    startTime = Date.now()
    frames = 0
    best = 0
    placed = 0;
    score = 0;
    cheatsWereEnabled = false

    document.getElementById(`topScore`).innerText = `0`
    document.getElementById(`topTime`).innerText = `N/A`
  }else{
    document.querySelector(`#textOne`).innerText = strings.body.bestIs + " " + (shapes[highest - 1].name ? shapes[highest - 1].name : shapes[highest - 1].shape)
    document.getElementById(`topTime`).innerText = calculateTimeDifference(startTime, startTime + Math.round((frames * (1000 / 60)))) + ` | ${strings.body.HighestCombo} ${highestCombo} | ${Math.round(1 / f)} FPS${cheatsWereEnabled ? " | " + strings.body.cheats : ""}`
  }


  if(highest > best){
    best = highest
    sounds.newBest.play()

    document.getElementById(`textOne`).classList.remove(`bounce`)
    document.getElementById(`textOne`).offsetWidth;
    document.getElementById(`textOne`).classList.add(`bounce`)

    if(highest >= Object.keys(mod.shapes).length){

      if(!isMod && shapeG.filter((s)=>s.index >= Object.keys(mod.shapes).length)[0].trait == "void"){
        proc.send({
          type: 6,
          achievement: "voidadone"
        })
      }
      if(!isMod && shapeG.filter((s)=>s.index >= Object.keys(mod.shapes).length)[0].trait == "growing"){
        proc.send({
          type: 6,
          achievement: "againstAllOdds"
        })
      }
      if(!isMod && shapeG.filter((s)=>s.index >= Object.keys(mod.shapes).length)[0].trait == "survivalOfTheFittest"){
        proc.send({
          type: 6,
          achievement: "againstAllOdds"
        })
      }

      document.getElementById(`bgText`).classList.add(`dodecadone`)
      document.querySelector(`#textTwo`).innerText = calculateTimeDifference(startTime, startTime + Math.round((frames * (1000 / 60))))
      document.querySelector(`#textOne`).innerText = "DO"
      sounds.kick.play()
      setTimeout(()=>{
        document.querySelector(`#textOne`).innerText = "DODECA"
        sounds.kick.play()
      }, 800)
      setTimeout(()=>{
        document.querySelector(`#textOne`).innerText = "DODECADONE!"
        document.querySelector(`#restart`).click()
        document.querySelector(`#restart`).click()

        setTimeout(()=>{
          document.querySelector(`#textTwo`).innerText = score
        }, 3000)

        setTimeout(()=>{
          highest = 0;
          best = 0;
          document.getElementById(`bgText`).classList.remove(`dodecadone`)
        }, 6000)
      }, 1600)
    }
  }
}

window.setup = setup;
window.createShape = createShape;
window.draw = draw;

particlesJS.load('particles-js', 'http://127.0.0.1:4622/src/particles.json', function() {
  console.log('callback - particles.js config loaded');
});