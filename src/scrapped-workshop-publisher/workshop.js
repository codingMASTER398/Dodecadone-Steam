const SECTION_ONE = document.querySelector(`#sectionOne`)
const SECTION_TWO = document.querySelector(`#sectionTwo`)
const SECTION_THREE = document.querySelector(`#sectionThree`)

let modInfo, canContinueTwo = false, previewImage;

function parseNameAuthor(mod){
    let split = mod.split("\n")
    let f = {
        name: split[0]?.replace(`// `, ``)?.slice(0, 30),
        author: split[1]?.replace(`// `, ``)?.slice(0, 30),
        content: mod
    }

    return {
        ...f,
        valid: f.name.length > 3 && f.author.length > 3 && split[0].startsWith("// ") && split[1].startsWith("// ") && f.content.length < 10000000
    }
}

function convertFileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });
  }

SECTION_ONE.querySelector(`textarea`).addEventListener(`input`, ()=>{
    let res = parseNameAuthor(SECTION_ONE.querySelector(`textarea`).value)

    SECTION_ONE.querySelector(`.statusText`).innerText = `Mod name: ${res.name}\nAuthor: ${res.author}\n Length: ${res.content.length}/10,000,000`

    if(res.valid){     
        SECTION_ONE.querySelector(`button`).disabled = false
    } else SECTION_ONE.querySelector(`button`).disabled = true
})

SECTION_ONE.querySelector(`button`).addEventListener(`click`,()=>{
    modInfo = parseNameAuthor(SECTION_ONE.querySelector(`textarea`).value)
    SECTION_ONE.hidden = true
    SECTION_TWO.hidden = false

    SECTION_TWO.querySelector(`.modName`).innerText = `Uploading ${modInfo.name}`
    SECTION_TWO.querySelector(`.details`).innerText = `Author: ${modInfo.author}\nSize: ${modInfo.content.length}/10,000,000`
})

SECTION_TWO.querySelector(`#imageUpload`).addEventListener(`change`, async(e)=>{
    previewImage = await convertFileToBase64(SECTION_TWO.querySelector(`#imageUpload`).files[0])
    SECTION_TWO.querySelector(`#image`).src = previewImage

    canContinueTwo = true

    SECTION_TWO.querySelector(`button`).disabled = false
})

SECTION_TWO.querySelector(`button`).addEventListener(`click`, ()=>{
    SECTION_TWO.hidden = true
    SECTION_THREE.hidden = false

    proc.send({
        type: 7,
        name: modInfo.name,
        author: modInfo.author,
        content: modInfo.content,
        preview: previewImage,
        visibility: Number(document.getElementById(`visibility`).value),
        description: document.getElementById(`description`).value
    })
})