export default function SocialLink({ href, icon }) {
  return (
    <a
      href={href}
      className="text-neutral-400 hover:text-white p-2 bg-neutral-900 rounded-full transition-colors"
    >
      {icon}
    </a>
  );
}
