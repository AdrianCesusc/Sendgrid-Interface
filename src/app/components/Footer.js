
import { MessageSquare} from 'lucide-react';

export default function Footer() {
    return(
         <div>
           <div>
              <div className= "h-0.5 mt-9  w-40 bg-zinc-200 ml">
              </div>
            <div  className="flex itens-center gap-3 mt-6">
             <MessageSquare/>
             <span className="text-sm text-zinc-500 hover:text-zinc-800">Twilio SMS</span>
            </div>
           </div>
      <div>
        <div className="mt-8"></div>
          <span className="text-xs text-zinc-400 mt-2 font-mono text-decoration-line: underline">REPUTATION</span>
             <div>
               <div className= "h-2 rounded-full w-47 bg-zinc-300">
                  <div className= "bg-green-500 w-24 h-2 rounded-full">
                  </div> 
               </div> 
             </div>
        </div>
       <div className="mt-3">
       </div>
         <span className="text-xs text-zinc-400 mt-2 font-mono text-decoration-line: underline">EMAILS THIS MOUNTH</span>
           <div>
           </div>
             <span className="text-lg text-zinc-400 mt-2 font-mono">806.06k</span>
     </div>
    )
}