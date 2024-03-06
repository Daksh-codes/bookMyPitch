import logo from "../assets/bookMyPitch.png"

function Nav() {
  return (
    <nav className="px-20 py-2">
        <div className="flex gap-2 items-center ">
            <img src={logo} alt="book my pitch logo" />
            <h2 className="text-xl font-bold text-[#083030]">BOOK MY PITCH</h2>
        </div>
    </nav>
  )
}

export default Nav