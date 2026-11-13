import {useCallback,useMemo,useState} from "react"

const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase="abcdefghijklmnopqrstuvwxyz"
const numbers="0123456789"
const symbols="!@#$%^&*()-_+=[]{}~"

function createPassword(length,sets){
  if(!sets.length){
    return "Select at least one option"
  }

  const allChars=sets.join("")
  const result=Array.from({length},()=>allChars[Math.floor(Math.random()*allChars.length)])

  sets.forEach((set)=>{
    const char=set[Math.floor(Math.random()*set.length)]
    const index=Math.floor(Math.random()*result.length)
    result[index]=char
  })

  return result.join("")
}

function App() {
  const [length,setLength]=useState(12)
  const [upperAllowed,setUpperAllowed]=useState(true)
  const [lowerAllowed,setLowerAllowed]=useState(true)
  const [numberAllowed,setNumberAllowed]=useState(true)
  const [symbolAllowed,setSymbolAllowed]=useState(true)
  const [password,setPassword]=useState(()=>createPassword(12,[upperCase,lowerCase,numbers,symbols]))
  const [copied,setCopied]=useState(false)

  const activeOptions=[upperAllowed,lowerAllowed,numberAllowed,symbolAllowed].filter(Boolean).length

  const strength=useMemo(()=>{
    if(length>=18 && activeOptions>=3){
      return {label:"Strong",bar:"w-full",color:"bg-emerald-400"}
    }

    if(length>=12 && activeOptions>=2){
      return {label:"Good",bar:"w-3/4",color:"bg-yellow-400"}
    }

    if(length>=8 && activeOptions>=1){
      return {label:"Weak",bar:"w-1/2",color:"bg-red-400"}
    }

    return {label:"Very weak",bar:"w-1/4",color:"bg-red-500"}
  },[length,activeOptions])

  const generatePassword=useCallback(()=>{
    const sets=[]

    if(upperAllowed) sets.push(upperCase)
    if(lowerAllowed) sets.push(lowerCase)
    if(numberAllowed) sets.push(numbers)
    if(symbolAllowed) sets.push(symbols)

    setPassword(createPassword(length,sets))
  },[length,upperAllowed,lowerAllowed,numberAllowed,symbolAllowed])

  const copyPassword=async()=>{
    if(!password || password === "Select at least one option") return

    try{
      await navigator.clipboard.writeText(password)
      setCopied(true)
      setTimeout(()=>setCopied(false),1500)
    }catch(error){
      console.error("Failed to copy password",error)
    }
  }

  return (
    <div className="min-h-screen bg-[#020817] px-4 py-10 text-slate-100">
      <div className="mx-auto max-w-xl rounded-[28px] border border-slate-800 bg-slate-900/90 p-6 shadow-[0_25px_80px_rgba(15,23,42,0.75)] backdrop-blur-sm sm:p-8">
        <div className="mb-7 text-center">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.35em] text-cyan-400">Secure Access</p>
          <h1 className="text-3xl font-semibold text-white sm:text-4xl">Password Generator</h1>
        </div>

        <div className="mb-6 overflow-hidden rounded-2xl border border-slate-700 bg-slate-950/80">
          <div className="flex items-center justify-between border-b border-slate-800 px-4 py-3">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">Password</span>
            <button type="button" onClick={copyPassword} className="rounded-lg border border-cyan-500/40 bg-cyan-500/10 px-3 py-1.5 text-[11px] font-medium text-cyan-300 transition hover:border-cyan-400 hover:bg-cyan-500/20">
              {copied ? "Copied" : "Copy"}
            </button>
          </div>

          <div className="min-h-23 break-all px-4 py-5 font-mono text-xl font-medium tracking-[0.08em] text-white sm:text-2xl">
            {password}
          </div>
        </div>

        <div className="mb-6 space-y-4">
          <div className="flex items-center justify-between">
            <label htmlFor="length" className="text-sm text-slate-300">Password length</label>
            <span className="rounded-full border border-slate-700 bg-slate-800 px-2.5 py-1 text-sm font-semibold text-cyan-300">{length}</span>
          </div>

          <input id="length" type="range" min="6" max="30" value={length} onChange={(event)=>setLength(Number(event.target.value))} className="range-input w-full accent-cyan-400" />
        </div>

        <div className="mb-6 grid gap-3 sm:grid-cols-2">
          <label className="flex items-center justify-between rounded-xl border border-slate-700 bg-slate-800/90 px-3 py-3 text-sm text-slate-200">
            Uppercase
            <input type="checkbox" checked={upperAllowed} onChange={()=>setUpperAllowed(!upperAllowed)} className="h-4 w-4 accent-cyan-400" />
          </label>

          <label className="flex items-center justify-between rounded-xl border border-slate-700 bg-slate-800/90 px-3 py-3 text-sm text-slate-200">
            Lowercase
            <input type="checkbox" checked={lowerAllowed} onChange={()=>setLowerAllowed(!lowerAllowed)} className="h-4 w-4 accent-cyan-400" />
          </label>

          <label className="flex items-center justify-between rounded-xl border border-slate-700 bg-slate-800/90 px-3 py-3 text-sm text-slate-200">
            Numbers
            <input type="checkbox" checked={numberAllowed} onChange={()=>setNumberAllowed(!numberAllowed)} className="h-4 w-4 accent-cyan-400" />
          </label>

          <label className="flex items-center justify-between rounded-xl border border-slate-700 bg-slate-800/90 px-3 py-3 text-sm text-slate-200">
            Symbols
            <input type="checkbox" checked={symbolAllowed} onChange={()=>setSymbolAllowed(!symbolAllowed)} className="h-4 w-4 accent-cyan-400" />
          </label>
        </div>

        <div className="mb-6 rounded-2xl border border-slate-700 bg-slate-800/80 p-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm text-slate-300">Password strength</span>
            <span className="text-sm font-semibold text-cyan-300">{strength.label}</span>
          </div>

          <div className="h-2.5 overflow-hidden rounded-full bg-slate-700">
            <div className={`h-full rounded-full ${strength.color} ${strength.bar} transition-all duration-300`} />
          </div>
        </div>

        <button type="button" onClick={generatePassword} className="w-full rounded-2xl bg-linear-to-r from-cyan-500 via-blue-500 to-violet-500 px-4 py-3 text-base font-semibold text-white shadow-lg shadow-cyan-500/25 transition hover:brightness-110">
          Generate Password
        </button>
      </div>
    </div>
  )
}

export default App
