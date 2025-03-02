import { useState } from 'react'
import './index.css'

function CoverPage() {
  return (
   <div id="Home"  style={{ backgroundImage: 'url(/Coverpage.jpg)'}} class='mt-15 w-full h-[250px] lg:min-h-[85vh] min-h-[350px]  bg-sky-100 max-[670px]:min-h-[200px]  bg-[length:100%_100%] bg-no-repeat flex justify-end content-center items-center'>
    <p className='font-hindi text-white font-serif lg:text-[50px] text-[32px] max-[670px]:text-[24px]  text-wrap w-[70%] p-[5%]'>‘मैं उस प्रभु का सेवक हूं, जिसे अज्ञानी लोग मनुष्य कहते हैं’ - स्वामी विवेकानंद</p></div>
  )
}

export default CoverPage
