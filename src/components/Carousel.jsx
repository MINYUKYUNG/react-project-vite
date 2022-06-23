import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from 'react-router-dom';

function CarouselCom() {
  const images = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1551715789-d7b5cfccd1c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      des: '뒷모습까지 예쁜 청바지!',
      to: '/fashion'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1620291699655-d958150a3ff8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      des: '나를 더 빛나게 해주는 악세사리!',
      to: '/accessory'
    },
    {
      id: 3,
      url:'https://images.unsplash.com/photo-1505714197102-6ae95091ed70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      des: '굶지말고 맛있게 다이어트하자!',
      to: '/salad'
    }
  ]

  const imageStyle = {
    maxHeight: "700px",
    width: "100%",
    objectFit: "cover"
  }

  const slide = images.map((image) => {
    return (
      <div key={ image.id } className="relative">
        <Link key={ image.id } to={ image.to } className="absolute" style={{ height: "100%", width: "100%" }} />
          <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-bold absolute left-0 top-1/3 pl-10 lg:pl-36 2xl:pl-60">
            <span className="">{ image.des }</span>
            <span className="text-base block text-left text-white font-normal py-1.5 pl-px">더 자세히 알아보기</span>
          </h2>
          <img src={ image.url } alt={ "캐러셀 이미지 " + image.id } style={ imageStyle } />
      </div>
    )
  })


  return (
    <Carousel autoPlay={true} showThumbs={false} interval={4000} infiniteLoop={true} showStatus={false} showArrows={false}>
      { slide }
    </Carousel>
  );
}

export default CarouselCom;