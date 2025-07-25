import {AtSign, FileInput} from 'lucide-react';

const Navbar = () => {
    return(
        <div className="bg-black text-white px-5 lg:px-20 py-4 flex justify-between font-mono">
            <div>
                <p className="lg:text-2xl">Sanket Vyawahare</p>
            </div>

            <div className="hidden md:flex text-sm font-light">
                <button className="bg-white mr-5 rounded-xl text-black px-4 py-1 cursor-pointer">
                    <FileInput className="inline mr-1" size={15} />
                    Resume
                </button>
                <button className="border border-white rounded-xl px-4 py-1 cursor-pointer">
                    <AtSign className="inline mr-1" size={15} />
                    Contact
                </button>
            </div>
        </div>
    )
}

export default Navbar;