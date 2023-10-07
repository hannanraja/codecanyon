import logo from '../../media/codecanyonlogo.png'
import Image from 'next/image'
export default function SideBar() {
    return(
        <div className="col-sm-5 offset-sm-2 col-md-6 offset-md-0 align-middle">
          
        <h1 className="mt-5"> To Continue sign in to CodeCan </h1>
        <Image src={logo} alt="logo image" width='100' height='100' />
      </div>
    )
}