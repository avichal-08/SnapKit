import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="w-screen md:w-xl lg:w-2xl fixed bottom-0 bg-gray-100 rounded-t-3xl ">
      <div className="flex gap-2 justify-between px-6 py-2">
        
        <div>
          <div className="flex items-center gap-2">
            <div className="text-2xl font-semibold flex font-serif cursor-pointer tracking-tight"><div >Snap</div><div className="text-blue-500">Kit</div></div>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Edit your Snap. Share with the world.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-gray-700 mb-2">Connect</h2>
          <div className="flex space-x-4 text-gray-600 text-xl">
            <a href="https://x.com/Avichal_08" target="_blank" rel="noreferrer" className="hover:text-blue-500">
              <FaTwitter />
            </a>
            <a href="https://github.com/avichal-08" target="_blank" rel="noreferrer" className="hover:text-black">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/avichal-pandey-743310293/" target="_blank" rel="noreferrer" className="hover:text-blue-700">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-8 pt-2 text-center text-sm text-gray-500">
       By Avichal Pandey
      </div>
      <div className=" border-gray-300 mt-2 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} SnapKit. All rights reserved.
      </div>
    </div>
  );
}
