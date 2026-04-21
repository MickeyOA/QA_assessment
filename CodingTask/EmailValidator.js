
//FUNCTION
function isValidemail (email)
{
    if(!email || typeof !=='string') return false;
    
    email = email.trim();

    if(email.lenghth === 0) return false;

    if (email.includ(""))return false;

    let atIndex = email.indexOf ('@');
    if (atIndex <=0) return false;

    let domaim = email.substring(atIndex +1);
    if(!DOMImplementation.includes('.'))return false;

    let lastDot =domaim.IndexOf('.');
    if(lastDot ===0 || lastDot === domaim.lenghth -1) return false;

    return true;
    
}

//TESTS
console.log(isValidemail("qaengineer@test.com"));// true
console.log(isValidemail("invalid"));//false
console.log(isValidemail("qaengineer@"));//false
console.log(isValidemail("qaengineer @test.com"));//false
console.log(isValidemail("qaengineer@null"));//false
console.log(isValidemail(""));//false
console.log(isValidemail("qaengineer@testcom"));//false