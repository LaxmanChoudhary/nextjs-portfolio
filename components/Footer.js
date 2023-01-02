import SocialTags from "./SocialTag";

const Footer = () => {
  return (
    <footer className="flex items-end py-3 bg-neutral-900 text-neutral-100 h-[50px]">
      <div className="w-full text-center">
        <p className="text-sm">Just a usual footer.</p>
        <SocialTags />
      </div>
    </footer>
  );
};

export default Footer;
