export const Login = () => {
    return (
        <>Login</>
    )
    function check(value){
        return (value.length >= 6 &&  value.length <= 11) && (value.match(/[e,k,n,m]/) === null) || /^[A-Z][a-z]+$/.test(value)
      }
      
      console.log(check("asdfg"))
      console.log(check("Asdfg"))
      console.log(check("aDdfg"))
      console.log(check("Asdfgee")) 
    
    } 