 
import Header from "./components/layout/header"
import Carousel from "./components/homepage/parts/carousel"
import MiddleCarousel from "./components/homepage/parts/middleCarousel"
import Categories from "./components/homepage/parts/categories"
function App() {
  return (
    <>
      <Header></Header>
      <Carousel></Carousel>
      <Categories></Categories>
      <MiddleCarousel></MiddleCarousel>
    </>
  );
}

export default App;
