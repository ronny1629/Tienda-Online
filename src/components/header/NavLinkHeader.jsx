export default ({ text }) => {
    
    return(
        <a href="" className="group relative py-8">
            <span href="#" className="group-hover:text-orange-primary">{ text }</span>

            <span className="absolute bottom-0 hidden md:block w-full h-[3px] scale-x-0 group-hover:bg-orange-primary group-hover:scale-x-100 transition-all duration-500 "></span>
        </a>
    )
         

}