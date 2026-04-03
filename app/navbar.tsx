// on prepare fonction navbar et je permets a ce quelle soit use ailleurs//
export default function Navbar() {
    // voici ce qu'elle doit afficher //
    return (
        // nav = 
        <nav className="flex justify-between items-center p-6 bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50">
            <h1 className="text-xl font-bold text-blue-600">MON PORTFOLIO</h1>
            <div className="flex gap-5 text-slate-600 font-medium">
                <a href="#projets" className="hover:text-blue-600 transition">Projets</a>
                <a href="#contact" className="hover:text-blue-600 transition">Contacts</a>
            </div>
        </nav>
    )

}