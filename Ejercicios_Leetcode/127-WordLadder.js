/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
 const ladderLength = function(beginWord, endWord, wordList) {  //Declarar funcion con objeto constante
    
    const list = new Set(wordList)           //Declarar lista constante cada valor en Set tiene que ser único
    if (!list.has(endWord)) return 0
    let word1 = new Set([beginWord])
    let word2 = new Set([endWord])
    let step = 1
    while (word1.size && word2.size) {       //mientras word1 y word2 contengan elementos
      let temp = new Set()
      if (word2.size < word1.size) [word1, word2] = [word2, word1] //verificar palabra mas larga y cambiar orden de array
      for (const word of word1) {
        for (let i = 0; i < word.length; i++) {   //ciclo for según la longitud de la cadena
          for (let j = 0; j < 26; j++) {
            const candidate =
              word.slice(0, i) + String.fromCharCode(97 + j) + word.slice(i + 1) //slice devuelve copia de una parte de la array, fromCharCode devuelva la cadena creada
            if (word2.has(candidate)) return step + 1
            if (!list.has(candidate)) continue
            temp.add(candidate)
            list.delete(candidate)
          }
        }
      }
      ;[word1, temp] = [temp, word1]
      step++
    }
    return 0
  }