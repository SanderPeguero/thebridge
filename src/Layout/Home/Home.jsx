import React, { useState } from "react";
import Cards from "../../Components/Cards/Cards";
import RDT from "../../Image/WebSite/react.png"
import task from '../../Image/WebSite/task.jpg'
import airplane from "../../Image/WebSite/airplanerent.jpeg"
import ModalCard from "../../Components/Modal/ModalCard";
import { IoMdAdd } from "react-icons/io";
const Datos = [
  {
    id: 1,
    title: "React Dev Team Web Site",
    text: "Lorem, ipsum dolor sit amet",
    image: RDT,
    urlPage: 'https://rdt-website.vercel.app/'
  },
  {
    id: 2,
    title: "Task Manager",
    text: "Lorem, ipsum dolor sit amet",
    image: task,
    urlPage: "https://task-manager-taupe-nine.vercel.app/"
  },
  {
    id: 3,
    title: "Airplane Rent",
    text: "Lorem, ipsum dolor sit amet",
    image: airplane,
    urlPage: "https://airplane-rent.vercel.app/"
  },
  {
    id: 4,
    title: "Name web site",
    text: "Lorem, ipsum dolor sit amet",
    image: "https://picsum.photos/400/400",
    urlPage: ""

  },
  {
    id: 5,
    title: "Name web site",
    text: "Lorem, ipsum dolor sit amet",
    image: "https://picsum.photos/400/400",
    urlPage: ""
  },
  {
    id: 6,
    title: "Name web site",
    text: "Lorem, ipsum dolor sit amet",
    image: "https://picsum.photos/400/400",
    urlPage: ""
  },
  {
    id: 7,
    title: "Name web site",
    text: "Lorem, ipsum dolor sit amet",
    image: "https://picsum.photos/400/400",
    urlPage: ""
  },
  {
    id: 8,
    title: "Name web site",
    text: "Lorem, ipsum dolor sit amet",
    image: "https://picsum.photos/400/400",
    urlPage: ""
  }

];

const Home = () => {
  const [isOpenMC, setIsOpenMC] = useState(false)

  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray- py-6 sm:py-12 dark:bg-gray-800">
      <ModalCard open={isOpenMC} setOpen={setIsOpenMC} />
      <div className="mx-auto max-w-screen-xl px-4 w-full">
        <button className="mb-4 ml-[70rem] px-4 py-2 bg-blue-500 text-white rounded-md flex flex-row items-center " onClick={() => setIsOpenMC(true)}> <IoMdAdd size={20} color="white"/> <span className="ml-1">Card</span> </button>
        <div className="grid w-full sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {Datos.map((data, index) => (
            <div key={index}>
              <Cards title={data.title} text={data.text} image={data.image} url={data.urlPage} isModalOpen={isOpenMC}/>
            </div>

          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
