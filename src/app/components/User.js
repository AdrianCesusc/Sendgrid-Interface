import Image from 'next/image'

export default function User() {
    return(
         <div>
             <div  className="flex itens-center gap-3">
                <Image src="/SendgridLogo.png"  width={20} height={20} alt="Logo Sendgrid" />
                <span className="text-xs text-zinc-800 mt-1">Adrian Teste</span>
                <span className= "mt-1 ml-7 text-zinc-400">^</span> 
             </div>
         </div>
    )
}