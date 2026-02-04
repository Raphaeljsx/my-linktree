import { useProfileStore, type Link, type SocialLinks } from "../store/useProfileStore";



const Content = () => {
const { name, role, bio, githubUser, showFollowers, showRepos, socialLinks, links } = useProfileStore();

  const hasSocial =
    socialLinks.instagram ||
    socialLinks.youtube ||
    socialLinks.linkedin ||
    socialLinks.x;
  const displayName = name || "Seu perfil";
  const handle = githubUser ? `@${githubUser}` : "@seu-usuario";

  const normalizeUrl = (url: string): string => {
    if (!url || url === "#") return "#";
    const trimmed = url.trim();
    if (/^https?:\/\//i.test(trimmed)) return trimmed;
    return "https://" + trimmed;
  };

  return (
    <div className="flex-1 p-8 flex justify-center items-start mt-8">
      <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">Prévia</h2>
        {/* Mockup celular */}
        <div className="mx-auto rounded-3xl border-2 border-gray-200 bg-gray-50 p-4 w-[280px]">
          <div className="flex flex-col items-center gap-2 pb-4 border-b border-gray-200">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-100" />
            <p className="font-semibold">{displayName}</p>
            <p className="text-sm text-gray-500">{handle}</p>
          </div>
          {(showFollowers || showRepos) && (
            <div className="flex gap-2 py-3 justify-center">
              {showFollowers && (
                <span className="px-3 py-1.5 rounded-lg bg-gray-200 text-sm">
                  1.2k seguidores
                </span>
              )}
              {showRepos && (
                <span className="px-3 py-1.5 rounded-lg bg-gray-200 text-sm">
                  48 repos
                </span>
              )}
            </div>
          )}
          <div className="py-3">
            {!hasSocial ? (
              <p className="text-sm text-gray-500 text-center">Sem redes cadastradas</p>
            ) : (
              <div className="flex flex-wrap gap-2 justify-center">
                {socialLinks.instagram && <span className="text-sm">IG</span>}
                {socialLinks.youtube && <span className="text-sm">YT</span>}
                {socialLinks.linkedin && <span className="text-sm">IN</span>}
                {socialLinks.x && <span className="text-sm">X</span>}
              </div>
            )}
          </div>
          <div className="space-y-2">
            {links
              .filter((l) => l.title || l.url)
              .map((link) => (
                <a
                  key={link.id}
                  href={normalizeUrl(link.url || "#")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-2.5 rounded-lg bg-gray-200 text-center text-sm font-medium hover:bg-gray-300"
                >
                  {link.title || "Link"}

                </a>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Content;