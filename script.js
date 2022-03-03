function TypeWriterHelper() {
    const time = 250
    let words = ["student.","WEB developer (in progress)."]
    const text = document.querySelector(".typewriter")
    const text2 = document.querySelector(".typewriter2")
    let i = 0, j = 0
    TypeWriterWords(j,words,text,text2,time)
}
function TypeWriterWords(j,words,text,text2,time){
    // console.log(j)
    if(j <= words.length - 1) {
        TypeWriter(0,j,words, words[j], text, text2, 250 - words[j].length * 5)
        j++
    }
    else
        TypeWriterWords(0,words,text,text2,time)


}
function TypeWriter(i,j,words,word,text,text2,time) {
    if (i <= word.length) {
        text.innerHTML += word.charAt(i)
        text2.innerHTML += word.charAt(i)
        // console.log(i)
        setTimeout(function(){TypeWriter(i + 1,j,words,word,text,text2,time)}, time)
    }
    else
        RemoveTypeWriter(i,j,words,word,text,text2,time - 150)
}
function RemoveTypeWriter(i,j,words,word,text,text2,time){
    if (i >= 0) {
        text.innerHTML = text.innerHTML.slice(0,text.innerHTML.length - 1)
        text2.innerHTML = text2.innerHTML.slice(0,text2.innerHTML.length - 1)
        // console.log(i)
        setTimeout(function(){RemoveTypeWriter(i - 1,j,words,word,text,text2,time)}, time)
    }
    else
        TypeWriterWords(j + 1,words,text,text2,time + 150)
}