import DetailProduct from "@/components/Products/DetailProduct";
import SlideProduct from "@/components/Products/SlideProduct";

const MainProduct =()=> {
  return (
    <>
         <main className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SlideProduct/>
            <DetailProduct/>
        </main>
    
    </>
  )
}

export default MainProduct