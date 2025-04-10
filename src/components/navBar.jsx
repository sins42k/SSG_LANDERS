import logoImg from '../assets/logo/logo.png'

function NavBar() {

    return (
        <>
            <nav className="flex justify-around items-center w-full h-30 bg-red-700">
                <div className="w-370 h-20 flex justify-between items-center">
                    <div className="w-50 h-20 flex items-end">
                        <img src={logoImg} alt="logo" />
                    </div>
                    <div className="bg-blue-500 w-350 h-20"></div>
                </div>
            </nav>
        </>
    )
}

export default NavBar
