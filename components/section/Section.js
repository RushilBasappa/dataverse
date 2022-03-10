import { React } from 'react';
import cx from "classnames";

const Section = ({ children, height }) => {
  console.log(height)
  return( 
    <div className={cx(`h-${height}`)}>
      {children}
    </div>
  )
}

export default Section;
