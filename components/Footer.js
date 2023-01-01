import SocialTags from "./SocialTag";

const Footer = () => {
  return (
    <footer className="flex items-end py-3 bg-slate-900 text-slate-50 h-[100px]">
      <div className="w-full text-center">
        <p className="text-sm">Just a usual footer.</p>
        <SocialTags />
      </div>
    </footer>
  );
};

export default Footer;
