import { Clipboard } from 'lucide-react';
import { Mail } from 'lucide-react';
import { FileLineChart } from 'lucide-react';
import { MonitorDot} from 'lucide-react';
import { FileLock} from 'lucide-react';
import { Sliders} from 'lucide-react';
import MenuOptions from './components/MenuOptions'
import Footer from './components/Footer'
import Cards from './components/Cards'
import TwilioSMS from './components/TwilioSMS'
import User from './components/User'



export default function Home() {
  const arrow ="^"

  return (
    <div className="h-screen flex flex-col bg-zinc-50">
      <div className="flex flex-1 ">
        <aside className= "w-48   bg-white/20 p-2 ml-2 border-r border-zinc-300">  
          <nav className="flex items-center mt-5 " >
            <User/>
          </nav> 
          <nav className = "mt-20">
              <MenuOptions  Icon={<MonitorDot/>}  texto = "Dashboard" arrow={arrow}/>
              <MenuOptions Icon={<Mail/>} texto = "Email API" arrow={arrow}/>
              <MenuOptions Icon={<FileLineChart/>} texto = "Stats" arrow={arrow}/>
              <MenuOptions Icon={<Clipboard/>} texto = "Activity" arrow={arrow}/>
              <MenuOptions Icon={<FileLock/>} texto = "Supressions" arrow={arrow}/>
              <MenuOptions Icon={<Sliders/>} texto = "Settings" arrow={arrow}/>
          </nav> 
            <Footer/>
        </aside>
      <main className= " bg-white flex-1 p-6"> 
          {true?(<TwilioSMS/>):null}  
          <div className="mt-16 ml-44 text-zinc-800 inline-flex">
            <span className="text-2xl font-italic text-zinc-700 ml-12">Hello Adrian! Here's your recent email activity.</span>
                <div className= "ml-64">
                    <div className= "h-9  w-24 bg-white border-t border-b border-r border-l border-blue-400">
                         <div>
                            <div className= "bg-blue-500/80 w-11 h-6 mt-1 ml-2 ">
                               <span className=" text-sm text-white ml-2.5">Wk</span>
                            </div>
                         </div>
                    </div>
                </div>  
          </div>   
          <Cards title="REQUEST" percent1= "19,734%"  />
          <Cards title="DELIVERED" percent1= "80.64%" percent2= "15.91%" />
          <Cards title="OPENDED" percent1= "28.69%" percent2= "92.42%" />
          <Cards title="CLICKED" percent1= "37.98%" percent2= "80.64%" />
          <Cards title="BOUNCES" percent1= "74.12%" percent2= "36.22%" />
          <Cards title="SPAM" percent1= "19,734%" percent2= "41.37%" /> 
          </main>
       </div>
    </div>
    
  
  )
}
