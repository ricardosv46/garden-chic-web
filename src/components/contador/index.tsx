import { useEffect, useState } from "react";


interface Props {
 num: string
 duration: number,
 className?:string
}

const easeOutQuad = (t: number) => t * (2 - t);
const frameDuration = 1000 / 60;


const Contador = ({ num, duration, className}: Props) => {
 const countTo = parseInt(num, 10);
 const [count, setCount] = useState(0);

 useEffect(() => {
  let frame = 0;
  const totalFrames = Math.round(duration / frameDuration);
  const counter = setInterval(() => {
   frame++;
   const progress = easeOutQuad(frame / totalFrames);
   setCount(countTo * progress);

   if (frame === totalFrames) {
    clearInterval(counter);
   }
  }, frameDuration);
 }, [countTo, duration]);

 //console.log(count);

 const renderedCount = Math.floor(count);
 return <span className={className || ''}>{renderedCount}</span>;
};


export default Contador;