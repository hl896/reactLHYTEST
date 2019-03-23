import emailIcon from '../font/fontawesome-free-5.7.2-web/svgs/brands/rocketchat.svg';
import gitIcon from '../font/fontawesome-free-5.7.2-web/svgs/brands/git-square.svg';
import linkedInIcon from '../font/fontawesome-free-5.7.2-web/svgs/brands/linkedin.svg';
import wechatIcon from '../font/fontawesome-free-5.7.2-web/svgs/brands/weixin.svg';
import wechatQR from '../asset/WechatIMG176.jpeg';


const SOCIAL_PROFILES=[
    {
        id:1,
        link:'mailto:hl896@uowmail.edu.au',
        images:emailIcon,
    },
    {
        id:2,
        link:'https://github.com/hl896/hl896.github.io',
        images:gitIcon,
    },
    {
        id:3,
        link:'https://www.linkedin.com/in/haoyang-li-486862bb/',
        images:linkedInIcon,
    },
    {
        id:4,
        images:wechatIcon,
        QRcode:wechatQR
    },


]

export default SOCIAL_PROFILES;