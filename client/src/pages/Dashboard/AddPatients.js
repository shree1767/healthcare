import React, { useState } from 'react';

const AddPatients = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [sex, setSex] = useState('Please Select');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new patient object with the entered details

    // Perform any additional logic (e.g., API call to add the patient to the database)

    // Reset the form fields
    setFirstName('');
    setLastName('');
    setDay('');
    setMonth('');
    setYear('');
    setSex('Please Select');
    setContactNumber('');
    setEmail('');
    setAddress('');

    // Redirect to the '/patients' route or update the patient list state
  };

  // Options for the date dropdown (1-31)
  const dateOptions = Array.from({ length: 31 }, (_, index) => index + 1);

  // Options for the month dropdown (January-December)
  const monthOptions = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  // Options for the year dropdown (1900-2023)
  const currentYear = new Date().getFullYear();
  const yearOptions = Array.from(
    { length: currentYear - 1900 + 1 },
    (_, index) => currentYear - index
  );

  return (
    <div className="md:pt-10 w-[40vw] md:w-[70vw] w-full py-20 px-8 md:h-[80vh] h-[90vh] overflow-y-auto">
      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-4 gap-4 mb-4">
          <div className="font-medium md:py-3 text-lg">Name</div>
          <div className="flex flex-col">
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="border border-gray-300 p-2 rounded mb-2 md:mb-0"
            />
            <label htmlFor="firstName" className="text-gray-500 font-medium">
              First Name
            </label>
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="border border-gray-300 p-2 rounded"
            />
            <label htmlFor="lastName" className="text-gray-500 font-medium">
              Last Name
            </label>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-4 mb-4">
          <div className="font-medium md:py-3 text-lg">Date of Birth</div>
          <div className="flex flex-col">
            <select
              id="day"
              value={day}
              onChange={(e) => setDay(e.target.value)}
              className="border border-gray-300 p-2 rounded"
            >
              {dateOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <label htmlFor="day" className="text-gray-500 font-medium">
              Day
            </label>
          </div>
          <div className="flex flex-col">
            <select
              id="month"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className="border border-gray-300 p-2 rounded"
            >
              {monthOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <label htmlFor="month" className="text-gray-500 font-medium">
              Month
            </label>
          </div>
          <div className="flex flex-col">
            <select
              id="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="border border-gray-300 p-2 rounded"
            >
              {yearOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <label htmlFor="year" className="text-gray-500 font-medium">
              Year
            </label>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-4 mb-4">
          <label htmlFor="sex" className="font-medium md:py-3 text-lg">
            Sex
          </label>
          <select
            id="sex"
            value={sex}
            onChange={(e) => setSex(e.target.value)}
            className="border border-gray-300 p-3 rounded"
          >
            <option>Please Select</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

        <div className="grid md:grid-cols-4 gap-4 mb-4">
          <label htmlFor="contactNumber" className="font-medium md:py-3 text-lg">
            Contact Number
          </label>
          <input
            type="text"
            id="contactNumber"
            value={contactNumber}
            minLength={10}
            maxLength={10}
            onChange={(e) => setContactNumber(e.target.value)}
            className="border border-gray-300 p-2 rounded"
          />
        </div>

        <div className="grid md:grid-cols-4 gap-4 mb-4">
          <label htmlFor="email" className="font-medium md:py-3 text-lg">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 p-2 rounded"
          />
        </div>

        <div className="grid md:grid-cols-4 gap-4 mb-4">
          <label htmlFor="address" className="font-medium md:py-3 text-lg">
            Address
          </label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="border border-gray-300 p-2 rounded"
          />
        </div>

        <div className="text-center md:mt-8">
          <button
            type="submit"
            className="md:py-3 md:px-10 py-2 px-8 bg-[#455B5D] text-white md:text-[25px] text-[15px] rounded-[6px] shadow"
          >
            Add Patient
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPatients;

