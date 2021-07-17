//   Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

//   Input to the function is guaranteed to be a single string.

//   Examples

//   Valid inputs:
//   1.2.3.4
//   123.45.67.89

//   Invalid inputs:
//   1.2.3
//   1.2.3.4.5
//   123.456.78.90
//   23.045.067.089

//   Note that leading zeros (e.g. 01.02.03.04) are considered invalid.


function isValidIP(str) {

    if(str) {
        let re = new RegExp("^[0-9]+$")
        let arr = str.split('.')
        let correctOctets = 0
        if(str === '0.0.0.0') return true
        arr.forEach(e => {
            //console.log("reg: " + re.test(e))
            if(!re.test(e)) return false
            if(e.startsWith("0") && e.length>1 ) return false

            if(parseInt(e, 10)>=0 && parseInt(e, 10)<256) {
                correctOctets += 1
            }
        });
        if(correctOctets===4) return true
    }

    return false;
  }
