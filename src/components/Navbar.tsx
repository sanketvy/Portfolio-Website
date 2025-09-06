import {AtSign, FileInput} from 'lucide-react';

const Navbar = () => {
    return(
        <div className="bg-black text-white px-5 lg:px-20 py-4 flex justify-between font-mono fixed z-999 right-0 left-0">
            <div>
                <p className="lg:text-2xl">Sanket Vyawahare</p>
            </div>

            <div className="hidden md:flex text-sm font-light">
                <a href="https://drive.google.com/file/d/1gG7kEdB1_0Jdv3LSwKbzLANJQOL7Nbdk/view?usp=drive_link" target="_blank" className="bg-white mr-5 rounded-xl text-black px-4 py-1 cursor-pointer">
                    <FileInput className="inline mr-1" size={15} />
                    Resume
                </a>
                <button className="border border-white rounded-xl px-4 py-1 cursor-pointer">
                    <AtSign className="inline mr-1" size={15} />
                    Contact
                </button>
            </div>
        </div>
    )
}

export default Navbar;