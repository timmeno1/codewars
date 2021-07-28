//            Roman Numerals Encoder 
//Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

//Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

//Example:
//solution(1000); // should return 'M'
//Help:

//Symbol    Value
//I          1
//V          5
//X          10
//L          50
//C          100
//D          500
//M          1,000
//Remember that there can't be more than 3 identical symbols in a row.

//More about roman numerals - http://en.wikipedia.org/wiki/Roman_numerals

//i ii iii iv v vi vii viii ix x xi xii xiii xiv xv xvi xvii xviii xix xx xxx xl l lx lxx lxxx xc c cx cxx cxxx cxl cl clx clxx clxxx cxc cc 


function solution(number){
    // convert the number to a roman numeral
    if(number>3999 || number<1) return null
    let romanNumber = ""

    if( number >= 1000) {
      let length = Math.floor(number/1000)
      for(i=1; i <= length; i++){
        romanNumber+="M"
        number -= 1000
      }
    }
    if( number >= 900) {
      length = Math.floor(number/900)
      for(i=1; i <= length; i++){
        romanNumber+="CM"
        number -= 900
      }
    }
    if( number >= 500) {
      length = Math.floor(number/500)
      for(i=1; i <= length; i++){
        romanNumber+="D"
        number -= 500
      }
    }
    if( number >= 400) {
      length = Math.floor(number/400)
      for(i=1; i <= length; i++){
        romanNumber+="CD"
        number -= 400
      }
    }
    if( number >= 100) {
      length = Math.floor(number/100)
      for(i=1; i <= length; i++){
        romanNumber+="C"
        number -= 100
      }
    }
    if( number >= 90) {
      length = Math.floor(number/90)
      for(i=1; i <= length; i++){
        romanNumber+="XC"
        number -= 90
      }
    }
    if( number >= 50) {
      length = Math.floor(number/50)
      for(i=1; i <= length; i++){
        romanNumber+="L"
        number -= 50
      }
    }
    if( number >= 40) {
      length = Math.floor(number/40)
      for(i=1; i <= length; i++){
        romanNumber+="XL"
        number -= 40
      }
    }
    if( number >= 10) {
      length = Math.floor(number/10)
      for(i=1; i <= length; i++){
        romanNumber+="X"
        number -= 10
      }
    }
    if( number >= 9) {
      length = Math.floor(number/9)
      for(i=1; i <= length; i++){
        romanNumber+="IX"
        number -= 9
      }
    }
    if( number >= 5) {
      length = Math.floor(number/5)
      for(i=1; i <= length; i++){
        romanNumber+="V"
        number -= 5
      }
    }
    if( number >= 4) {
      length = Math.floor(number/4)
      for(i=1; i <= length; i++){
        romanNumber+="IV"
        number -= 4
      }
    }
    if( number >= 1) {
      length = Math.floor(number/1)
      for(i=1; i <= length; i++){
        romanNumber+="I"
        number -= 1
      }
    }
    

    return romanNumber
  }

  console.log(solution(1)) // MMMDLXVIII