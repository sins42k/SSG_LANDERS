import logoImg from '../assets/logo/logo.png'
import mainBanner from '../assets/banner/main_banner.jpg'
import '../assets/font/normal-font.css'

function NavBar() {

    return (
        <>
            <nav className="flex justify-around items-start bg-cover bg-center h-180 w-full" style={{
                backgroundImage: `url(${mainBanner})`
            }}>

                <div className="w-full h-30 flex justify-around items-center border-b border-white">
                    <div className="w-380 flex justify-between items-center">

                        <div className="m-2 h-25 flex items-center">
                            <img src={logoImg} alt="logo" />
                        </div>

                        <div className="m-2">
                            <div className="m-2 button text-white rotate-90 text-2xl">|||</div>
                        </div>

                        <div className="m-2 flex">
                            <div className="xl:w-32 flex justify-center items-center text-white font-['GmarketSansMedium']">LANDERS</div>
                            <div className="xl:w-32 flex justify-center items-center text-white font-['GmarketSansMedium']">PLAYERS</div>
                            <div className="xl:w-32 flex justify-center items-center text-white font-['GmarketSansMedium']">GAME</div>
                            <div className="xl:w-32 flex justify-center items-center text-white font-['GmarketSansMedium']">MEDIA</div>
                            <div className="xl:w-32 flex justify-center items-center text-white font-['GmarketSansMedium']">FAN</div>
                            <div className="xl:w-32 flex justify-center items-center text-white font-['GmarketSansMedium']">STADIUM</div>
                        </div>

                        <div className="m-2 text-white">
                            <span className="text-white text-sm font-['GmarketSansMedium'] hover:cursor-pointer">SHOP by Emart</span> |
                            <span className="text-white text-sm font-['GmarketSansMedium'] hover:cursor-pointer"> SHOP by hyungji</span> |
                            <span className="text-white text-sm font-['GmarketSansMedium'] hover:cursor-pointer"> CONTACT US</span>
                        </div>

                    </div>
                </div>

            </nav>
        </>
    )
}

export default NavBar
