import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import './App.scss';
import { useState } from 'react';

function App() {
  const imgURL = [
    "https://source.unsplash.com/Z8dtTatMVMw",
    "https://source.unsplash.com/9dmycbFE7mQ",
    "https://source.unsplash.com/m7K4KzL5aQ8",
  ];

  const [currentImg, setCurrentImg] = useState(imgURL[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleEvent = (e, direction, index) => {
    e.preventDefault();

    if (direction === 'left') {
      const newIndex = (activeIndex - 1 + imgURL.length) % imgURL.length;
      setActiveIndex(newIndex);
      setCurrentImg(imgURL[newIndex]);
    } else if (direction === 'right') {
      const newIndex = (activeIndex + 1) % imgURL.length;
      setActiveIndex(newIndex);
      setCurrentImg(imgURL[newIndex]);
    } else if (direction === 'dot') {
      setActiveIndex(index);
      setCurrentImg(imgURL[index]);
    }
  };

  const renderPaginationDots = () => {
    return imgURL.map((_, index) => (
      <button
        key={index}
        onClick={(e) => handleEvent(e, 'dot', index)}
        className={`w-2 h-2 rounded-full mx-2 ${
          index === activeIndex ? 'bg-white' : 'bg-gray-500'
        }`}
      ></button>
    ));
  };

  return (
    <>
      <div className="h-screen bg-black relative">
        <div className="absolute w-full h-full opacity-50">
          <img src={currentImg} className="absolute h-full w-full" alt="Current" />
        </div>

        <div className="absolute bottom-4 inset-x-0 w-28 h-12 mx-auto flex justify-around items-center">
          <button onClick={(e) => handleEvent(e, 'left')}>
            <BsFillArrowLeftCircleFill className="w-8 h-8 text-slate-200" />
          </button>
          <button onClick={(e) => handleEvent(e, 'right')}>
            <BsFillArrowRightCircleFill className="w-8 h-8 text-slate-200" />
          </button>
        </div>
        
        <div className="absolute bottom-16 inset-x-0 flex justify-center">
          {renderPaginationDots()}
        </div>
      </div>
    </>
  );
}

export default App;
