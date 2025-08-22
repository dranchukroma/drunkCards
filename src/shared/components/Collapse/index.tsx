import { useEffect, useState, type ReactNode } from 'react'
import { SlideContainer } from './Collapse.styled';


type SliderProps = {
  children: ReactNode;
  isOpen: boolean;
  duration?: number;
  contentHeight?: number;
  marginOpen?: number;
  marginClosed?: number;
}

function Collapse({ children, isOpen = true, duration = 300, marginOpen = 0, marginClosed = 0, contentHeight = 100 }: SliderProps) {
  useEffect(() => {
    console.log(`${isOpen ? marginOpen : marginClosed}`);
  }, [isOpen])
  
  return <SlideContainer
    $duration={duration}
    $isOpen={isOpen}
    $contentHeight={contentHeight}
    $marginOpen={marginOpen}
    $marginClosed={marginClosed}
  >
    {children}
  </SlideContainer>
}

export default Collapse;