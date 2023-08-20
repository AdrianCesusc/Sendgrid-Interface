

export default function Cards(props) {
    return(
       <div className = "inline-flex "  >    
            <div className = "ml-20 mt-28 hover:shadow-xl shadow-blue-500" >
               <div className= "h-20 w-24 border-t border-b border-r border-l border-zinc-300 rounded-md flex flex-col gap-2 ">
                 <span className=" ml-5 text-xs font-mono text-zinc-500 ">{props.title}</span>
                 <a className=" ml-2 text-2xl text-red-500/70   hover:text-red-600 ">{props.percent1}</a>
                 <a className="ml-7 text-xs text-violet-500/70 ">{props.percent2}</a>
               </div>  



            </div> 
       </div>    
    )
}