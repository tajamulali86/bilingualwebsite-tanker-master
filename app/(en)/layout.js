import Header from "../component/header"
import Footer from "../component/footer"

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function EnLayout({ children }) {
    return (
       <div ><header><Header  />
       </header>
        {children}
        <Footer/>
       </div>

    )
}
