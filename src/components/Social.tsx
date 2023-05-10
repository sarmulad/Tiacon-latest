import React from 'react';
import Link from "next/link";

import Fb from "../Icons/fb.svg";
import Twt from "../Icons/twt.svg";
import Disc from "../Icons/disc.svg";
import Tel from "../Icons/tel.svg";
import Yout from "../Icons/yout.svg";
import Ig from "../Icons/ig.svg";
import Linke from "../Icons/link.svg";
import { Url } from 'url';

const SocialData = [
    {
        id: 1,
        link: "https://m.facebook.com/108226041732272/",
        Icon: Fb
    },
    {
        id: 2,
        link: "https://t.me/realtiacoin",
        Icon: Twt
    },
    {
        id: 3,
        link: "https://discord.gg/jDp5eztF",
        Icon: Disc
    },
    {
        id: 4,
        link: "https://t.me/realtiacoin",
        Icon: Tel
    },
    {
        id: 5,
        link: "https://www.youtube.com/channel/UCtWS5o3vGdnT1aNgV6ZOVug",
        Icon: Yout
    },
    {
        id: 6,
        link: "https://instagram.com/tiaecosystem?igshid=YmMyMTA2M2Y=",
        Icon: Ig
    },
    {
        id: 7,
        link: "https://www.linkedin.com/mwlite/company/tiacoin",
        Icon: Linke
    },

]

interface SocialProps {
    padding?:number

}

 const Social = ({ padding }: SocialProps) => {
    return (
        <div
         className={`flex md:gap-3 justify-between items-center h-[82px] md:p-${padding} cursor-pointer`}
         >
            {SocialData.map(({ id, link, Icon }) => (
                <span key={id}>
                    <Link href={link} target="_blank" className="text-[#706F74] font-medium">
                        <Icon width={40} height={40} alt="social-Icon" />
                    </Link>
                </span>
            ))}


        </div>
    )
}

export default Social;