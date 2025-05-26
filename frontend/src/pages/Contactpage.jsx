import React from "react";

function Contactpage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10 bg-[#f7f7f7] rounded-md shadow-md text-gray-800">
      <h1 className="text-3xl font-semibold mb-8"><b>Contact Us</b></h1>

      <div className="space-y-6 text-lg">
        <div>
          <strong>Address:</strong>
          <p>Street 123, 110 00 Prague 1, Czech Republic</p>
        </div>

        <div>
          <strong>Phone:</strong>
          <p>+420 123 456 789</p>
        </div>

        <div>
          <strong>Email:</strong>
          <p>info@shoestore.com</p>
        </div>

        <div>
          <strong>Opening Hours:</strong>
          <p>Mon–Fri: 9:00 AM – 6:00 PM</p>
          <p>Sat: 10:00 AM – 2:00 PM</p>
          <p>Sun: Closed</p>
        </div>
      </div>
    </div>
  );
}

export default Contactpage;
