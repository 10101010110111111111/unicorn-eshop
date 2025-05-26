import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const ContactsPage = () => {
  return (
    <div className="bg-zinc-900 min-h-screen flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-5xl bg-gradient-to-br from-zinc-800 via-zinc-900 to-black p-10 rounded-3xl shadow-[0_0_30px_rgba(0,255,255,0.2)] border border-zinc-700">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-center mb-14 drop-shadow-md">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-12 text-white text-base md:text-lg">
          <div className="flex items-start space-x-5">
            <MapPin className="text-cyan-400 mt-1" size={28} />
            <div>
              <p className="font-semibold text-cyan-300 mb-1">Address</p>
              <p className="text-gray-400">
                Street 123, 110 00 Prague 1, Czech Republic
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-5">
            <Phone className="text-cyan-400 mt-1" size={28} />
            <div>
              <p className="font-semibold text-cyan-300 mb-1">Phone</p>
              <p className="text-gray-400">+420 123 456 789</p>
            </div>
          </div>

          <div className="flex items-start space-x-5">
            <Mail className="text-cyan-400 mt-1" size={28} />
            <div>
              <p className="font-semibold text-cyan-300 mb-1">Email</p>
              <p className="text-gray-400">info@shoestore.com</p>
            </div>
          </div>

          <div className="flex items-start space-x-5">
            <Clock className="text-cyan-400 mt-1" size={28} />
            <div>
              <p className="font-semibold text-cyan-300 mb-1">Opening Hours</p>
              <p className="text-gray-400">Mon–Fri: 9:00 AM – 6:00 PM</p>
              <p className="text-gray-400">Sat: 10:00 AM – 2:00 PM</p>
              <p className="text-gray-400">Sun: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
