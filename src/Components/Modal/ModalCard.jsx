import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
const ModalCard = ({ open, setOpen }) => {
    const [formData, setFormData] = useState({
        title: '',
        text: '',
        url: '',
        image: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setFormData((prevData) => ({ ...prevData, image: file }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission logic here
        console.log('Form Data:', formData);
        // Close the modal after form submission
        setOpen(false);
    };

    return (
        <>

            {/* Modal Overlay */}
            {open && (
                <div className="fixed  inset-0 px-2 z-10 overflow-hidden flex items-center justify-center"  onClick={() => setOpen(false)}>
                    <div className="absolute inset-0 backdrop-blur-md transition-opacity"></div>

                    {/* Modal Content */}
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white rounded-md shadow-xl overflow-hidden max-w-md w-full sm:w-96 md:w-1/2 lg:w-2/3 xl:w-1/3 z-50"
                        style={{
                            transform: open ? 'scale(1)' : 'scale(0.75)',
                            transition: 'transform 0.3s ease-out',
                        }}
                    >
                        {/* Modal Header */}
                        <div className="bg-blue-500 text-white px-4 py-2 flex justify-between">
                            <h2 className="text-lg font-semibold">Modal Card</h2>
                            <button onClick={() => setOpen(false)} className="px-3 py-1  text-white rounded-md w-full sm:w-auto hover:bg-red-600">
                                <IoMdClose size={25} />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="p-4">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
                                        Title:
                                    </label>
                                    <input
                                        type="text"
                                        id="title"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        className="border rounded-md px-3 py-2 w-full"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="text" className="block text-gray-700 font-bold mb-2">
                                        Text:
                                    </label>
                                    <textarea
                                        id="text"
                                        name="text"
                                        value={formData.text}
                                        onChange={handleChange}
                                        className="border rounded-md px-3 py-2 w-full"
                                    ></textarea>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="url" className="block text-gray-700 font-bold mb-2">
                                        URL:
                                    </label>
                                    <input
                                        type="text"
                                        id="url"
                                        name="url"
                                        value={formData.url}
                                        onChange={handleChange}
                                        className="border rounded-md px-3 py-2 w-full"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
                                        Upload Image:
                                    </label>
                                    <input
                                        type="file"
                                        id="image"
                                        name="image"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="border rounded-md px-3 py-2 w-full"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white rounded-md px-3 py-1 w-full sm:w-auto"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>

                        {/* Modal Footer */}
                        {/* <div className="border-t px-4 py-2 flex justify-end">
                            <button onClick={() => setOpen(false)} className="px-3 py-1 bg-indigo-500 text-white rounded-md w-full sm:w-auto">
                                Accept
                            </button>
                        </div> */}
                    </div>
                </div>
            )}
        </>
    );
};

export default ModalCard;
