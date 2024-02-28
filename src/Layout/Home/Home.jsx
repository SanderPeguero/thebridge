import { data } from "browserslist";
import Cards from "../../Components/Cards/Cards";

const Datos = [
  {
    id: 1,
    title: "Des cadeaux incroyables prêts à être utilisés dans votre prochain projet",
    text: "Lorem, ipsum dolor sit amet",
    image: "https://picsum.photos/400/400",
  },
  {
    id: 2,
    title: "Des cadeaux incroyables prêts à être utilisés dans votre prochain projet",
    text: "Lorem, ipsum dolor sit amet",
    image: "https://picsum.photos/400/400",
  },
  {
    id: 3,
    title: "Des cadeaux incroyables prêts à être utilisés dans votre prochain projet",
    text: "Lorem, ipsum dolor sit amet",
    image: "https://picsum.photos/400/400",
  },
  {
    id: 4,
    title: "Des cadeaux incroyables prêts à être utilisés dans votre prochain projet",
    text: "Lorem, ipsum dolor sit amet",
    image: "https://picsum.photos/400/400",
  },
  {
   id: 5,
    title: "Des cadeaux incroyables prêts à être utilisés dans votre prochain projet",
    text: "Lorem, ipsum dolor sit amet",
    image: "https://picsum.photos/400/400",
  },
  {
  id: 6,
  title: "Des cadeaux incroyables prêts à être utilisés dans votre prochain projet",
  text: "Lorem, ipsum dolor sit amet",
  image: "https://picsum.photos/400/400",
},
{
id: 7,
title: "Des cadeaux incroyables prêts à être utilisés dans votre prochain projet",
text: "Lorem, ipsum dolor sit amet",
image: "https://picsum.photos/400/400",
},
{
id: 8,
title: "Des cadeaux incroyables prêts à être utilisés dans votre prochain projet",
text: "Lorem, ipsum dolor sit amet",
image: "https://picsum.photos/400/400",
}

];

const Home = () => {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray- py-6 sm:py-12">
      <div className="mx-auto max-w-screen-xl px-4 w-full">
        <div className="grid w-full sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {/* Mapeo      map <Cards />*/}
          {Datos.map((data,index) => (
            <div key={index}>
                <Cards title={data.title} text={data.text} image={data.image}/>
            </div>
            
          ) )}
        </div>
      </div>
    </div>
  );
};

export default Home;
