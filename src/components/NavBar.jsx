import logoImg from '../assets/logo/logo.png'
import mainBanner from '../assets/banner/main_banner.jpg'
import '../assets/font/normal-font.css'

function NavBar() {

    return (
        <>
            <nav className="flex justify-around items-start bg-cover bg-center h-140 w-full" style={{
                backgroundImage: `url(${mainBanner})`
            }}>

                <div className="w-[1440px] space-x-8 h-[125px] flex justify-between items-center">
                    <div className="flex items-center w-[150px] h-[60px]">
                        <img src={logoImg} alt="logo" />
                    </div>

                    <div className="w-7xl h-[60px] space-x-8 flex items-center">

                        <div className="w-[50px] h-[60px]">
                            <button className="rotate-90 w-[50px] h-[60px] text-white">|||</button>
                        </div>

                        <div className="w-3xl flex">
                            <div className="w-[18%] text-center text-white">LANDERS</div>
                            <div className="w-[18%] text-center text-white">PLAYERS</div>
                            <div className="w-[18%] text-center text-white">GAME</div>
                            <div className="w-[18%] text-center text-white">MEDIA</div>
                            <div className="w-[18%] text-center text-white">FAN</div>
                            <div className="w-[18%] text-center text-white">STADIUM</div>
                        </div>

                        <div className="w-sm text-center text-white">
                            SHOP by Emart | SHOP by hyungji | CONTACT US
                        </div>

                    </div>
                </div>

            </nav>
        </>
    )
}

export default NavBar
