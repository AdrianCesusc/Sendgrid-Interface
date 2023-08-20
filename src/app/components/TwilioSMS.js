
import { SmartphoneNfc} from 'lucide-react';

export default function TwilioSMS() {
    return(
        <div className= "drop-shadow-xl">
           <div className= " bg-white rounded-md flex itens-center gap-4 border-t border-r border-b border-l border-zinc-300">    
              <div className="mt-6 ">
                 <SmartphoneNfc size= {100} className="  text-zinc-700 ml-64 mt-6" />
              </div>
                 <div className="flex itens-center  flex-col gap-1 mt-7 ml-10">
                   <strong className="text-zinc-600 text-xl font-italic">Reach more customers with Twilio SMS</strong>
                   <span className= "text-sm mt-5 text-zinc-600">96% of text messages are read within 3 minutes.</span>
                       <div className="flex itens-center  flex-col gap-1 ">
                         <span className= "text-sm  text-zinc-600">Sign up today and send up to 2,000 text messages for free.</span>                    
                           
                  
                           <button className= " h-10 text-sm text-zinc-100  p-1 border-t border-r border-b border-l border-red bg-red-500 hover:bg-red-700 ">
                              Try Twilio for free
                           </button>      
                     
                              <a className= "text-sm text-blue-500 mb-4">Learn more about Twilio SMS</a>
                       </div>
                </div>
            </div>
        </div>       
    )
}