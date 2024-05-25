import React,{useEffect,useState,useCallback,useRef} from 'react'

function EmailAndPassword() {
  const [length, setLength] = useState(8)
  const [numbers,setNumbers]=useState(false)
  const [characters,setCharacters]=useState(false)
  const [password,setPassword]=useState("")
  const [email,setEmail]=useState("")
  const passwordref=useRef(null)
  const emailref=useRef(null)
  const generateEmail=useCallback(()=>{
    let email=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1)
      email+=str.charAt(char)
    }
    email+="@gmail.com"
    setEmail(email)
  },[length,setEmail],)
  const generatePassword=useCallback(() => {
      let pass=""
      let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if(numbers){
        str+="0123456789"
      }
      if(characters){
        str+="!@#$%^&*-_+=[]{}~`"
      }
      for(let i=1;i<=length;i++){
        let char=Math.floor(Math.random()*str.length+1)
        pass+=str.charAt(char)
      }
      setPassword(pass)
    },
    [length,numbers,characters,setPassword],)

    const copyPasswordToClipboard=useCallback(()=>{
      passwordref.current?.select();
      passwordref.current?.setSelectionRange(0,100);
      
      window.navigator.clipboard.writeText(password)
    },[password])
    const copyEmailToClipboard=useCallback(()=>{
      emailref.current?.select();
      emailref.current?.setSelectionRange(0,100);
      window.navigator.clipboard.writeText(email);
    })

    useEffect(() => {
      generatePassword(),
      generateEmail()
    }, [length,numbers,characters,generatePassword])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
         <h1 className='text-white text-center my-3'>Password And Email generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
         <input 
         type="text" 
         value={password}
         className='outline-none w-full py-1 px-3'
         placeholder='Password'
         readOnly
        ref={passwordref}
         />
         <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
      </div>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" 
               value={email}
               className='outline-none w-full py-1 px-3'
               placeholder='Email'
               readOnly
               ref={emailref}
        />
        <button onClick={copyEmailToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" 
                 min={8}
                 max={100}
                 value={length}
                 className='cursor-pointer'
                 onChange={(e)=>{setLength(e.target.value)}}
          />
          <label>Length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
                 defaultChecked={numbers}
                 id="numbersInput"
                 onChange={()=>{setNumbers((prev)=>!prev)}}
          />
          <label htmlFor="numbersInput">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
                 defaultChecked={characters}
                 id="charactersInput"
                 onChange={()=>{setCharacters((prev)=>!prev)}}
          />
          <label htmlFor="charactersInput">Character</label>
        </div>
      </div>

      </div>
    </>
  )
}

export default EmailAndPassword
