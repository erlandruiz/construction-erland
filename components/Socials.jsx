import Link from 'next/link'

import { RiFacebookFill, RiYoutubeFill, RiTwitterFill, RiInstagramFill} from 'react-icons/ri'

import socialData from '../public/assets/socialData.js'

const Socials =({containerStyles, iconStyles})=>{
    return(
        <div className={`${containerStyles}`}>
            {socialData.map((social, index)=>{
                return <Link href={social.path} key={index} className={`${iconStyles}`}>{social.icon}</Link>
            })}
        </div>
    )
}

export default Socials;