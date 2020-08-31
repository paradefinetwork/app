import React from "react";

const socials = [
  {
    link: "https://medium.com/paradefi",
    icon: "/003-medium.png",
    name: "Medium",
  },
  {
    link: "https://twitter.com/paradefi",
    icon: "/001-twitter.png",
    name: "Twitter",
  },
  {
    link: "https://t.me/paradefiofficial",
    icon: "/004-telegram.png",
    name: "Telegram",
  },
  {
    link: "https://www.facebook.com/paradefi/",
    icon: "/002-facebook.png",
    name: "Facebook",
  },
];

type SocialProps = {
  link: string;
  icon: string;
  name: string;
};
const Social = ({ link, icon, name }: SocialProps) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    style={{ padding: 5 }}
  >
    <img src={icon} alt={name} style={{ width: 20 }} />
  </a>
);

const SocialButtons = () => {
  return (
    <div>
      {socials.map((props) => (
        <Social {...props} key={props.icon} />
      ))}
    </div>
  );
};

export default SocialButtons;
