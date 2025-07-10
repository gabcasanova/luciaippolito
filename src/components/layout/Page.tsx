import Header from "./Header";
import Footer from "./Footer";
import type { PropsWithChildren } from "react";

const Page = (props: PropsWithChildren) => {
  return (
    <div className="bg-lucia-darkred font-caudex">
      <div className="min-h-screen max-w-[1550px] m-auto flex flex-col
                      shadow-[0px_0px_90px_rgba(255,255,255,0.15)] ">
        <Header />

        <main className="grow bg-white">
          { props.children }
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default Page