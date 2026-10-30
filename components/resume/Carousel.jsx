import  {Carousel} from 'react-bootstrap'
import Image from 'next/image';
import {useState} from 'react'

export default function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="/images/pic1.jpg"
            alt="Desk with several monitors showing code, lit in blue and red"
            height={800}
            width={1280}
          />
          <Carousel.Caption>
            <h3>Full-stack engineering</h3>
            <p>Java and Spring Boot services, React and Next.js front ends, backed by PostgreSQL and SQL Server.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="/images/pic2.jpg"
            alt="Close-up of React component code on a dark screen"
            height={800}
            width={1280}
          />
  
          <Carousel.Caption>
            <h3>Modern front ends</h3>
            <p>A ground-up React and TypeScript rewrite of the Electronic Lien &amp; Title product, rolled out across 14 states.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="/images/pic3.jpg"
            alt="Hands typing on a keyboard in front of monitors"
            height={800}
            width={1280}
          />
  
          <Carousel.Caption>
            <h3>Reliable delivery</h3>
            <p>
              Legacy modernization, security hardening, and Kubernetes deployments.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
