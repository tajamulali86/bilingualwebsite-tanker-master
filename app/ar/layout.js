import Footer from "../component/footer"
import Header from "../component/header"

export const metadata = {
    title: "تعال إلى    ",

    description: ' وتعطل الشارترايز جزار النخبة',
}

export default function ArLayout({ children }) {
    return (
        <div lang="ar" dir="rtl">
            <Header ar={true} />
            {children}
            <Footer ar={true} />

        </div>

    )
}
