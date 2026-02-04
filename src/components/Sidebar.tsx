import { InputWithLabel } from "./InputWithLabel";
import { Input } from "./Input";
import { useProfileStore, type Link, type SocialLinks } from "../store/useProfileStore";

const SOCIAL_KEYS = [
  { key: "instagram" as const, label: "IG" },
  { key: "youtube" as const, label: "YT" },
  { key: "linkedin" as const, label: "IN" },
  { key: "x" as const, label: "X" },
] as const;

const Sidebar = () => {
  const {
    name,
    role,
    bio,
    setName,
    setRole,
    setBio,
    links,
    setLinks,
    githubUser,
    setGithubUser,
    showFollowers,
    setShowFollowers,
    showRepos,
    setShowRepos,
    socialLinks,
    setSocialLinks,
  } = useProfileStore();

  // Função para atualizar os links
  const handleLinkChange = (linkId: string, field: string, value: string) => {
    const updatedLinks = links.map((link) => {
      if (linkId === link.id) {
        return { ...link, [field]: value };
      }
      return link;
    });
    setLinks(updatedLinks);
  };

  // Função para adicionar um novo link
  const handleAddLink = () => {
    const newLink: Link = {
      id: "link-" + (links.length + 1),
      url: "",
      title: "",
    };
    setLinks([...links, newLink]);
  };

  const handleRemoveLink = (linkId: string) => {
    setLinks(links.filter((l) => l.id !== linkId));
  };

  const handleSocialChange = (key: keyof SocialLinks, value: string) => {
    setSocialLinks((prev) => ({ ...prev, [key as keyof SocialLinks]: value }));
  };

  const clearSocial = (key: keyof SocialLinks) => {
    setSocialLinks((prev) => ({ ...prev, [key as keyof SocialLinks]: "" }));
  };

  return (
    <aside className="w-6/12 shrink-0 overflow-y-auto p-6 space-y-6">
      <h1 className="font-black text-2xl mb-6">Personalize seu cartão</h1>

      <section className="bg-white rounded-xl p-5 border border-gray-500">
        <h2 className="text-lg font-semibold mb-4">Configuração do Perfil</h2>
        <div className="flex gap-2 mb-4">
          <div className="flex-1">
            <InputWithLabel
              id="github-user"
              type="text"
              placeholder="@seu-usuario"
              name={githubUser}
              onChange={(e) => setGithubUser(e.target.value)}
              label="Usuário do GitHub"
              labelClassname="cursor-pointer font-bold"
              inputClassname="border border-neutral-400 py-2 px-3 rounded-full outline-none font-semibold"
            />
          </div>
          <button
            type="button"
            className="mt-6 px-4 py-2 rounded-4xl bg-white text-black border border-gray-500 font-semibold hover:bg-gray-100"
          >
            Buscar
          </button>
        </div>
        <div className="flex gap-2 space-y-3">
          <div
            className="flex h-[80px] w-6/12 justify-start items-center gap-3 cursor-pointer border border-gray-500 rounded-xl p-3"
            onClick={() => setShowFollowers(!showFollowers)}
          >
            <Input
              type="checkbox"
              checked={showFollowers}
              onChange={(e) => setShowFollowers(e.target.checked)}
              name="showFollowers"
              id="showFollowers"
              placeholder="Mostrar seguidores"
              label="Mostrar seguidores"
            />
            <div>
              <span className="font-medium">Mostrar seguidores</span>
              <p className="text-sm text-gray-500">Exibe contagem no perfil.</p>
            </div>
          </div>
          <div
            className="flex h-[80px] w-6/12 justify-start items-center gap-3 cursor-pointer border border-gray-500  rounded-xl p-3"
            onClick={() => setShowRepos(!showRepos)}
          >
            <Input
              type="checkbox"
              checked={showRepos}
              onChange={(e) => setShowRepos(e.target.checked)}
              name="showRepos"
              id="showRepos"
              placeholder="Mostrar repositórios"
              label="Mostrar repositórios"
            />
            <div>
              <span className="font-medium">Mostrar repositórios</span>
              <p className="text-sm text-gray-500">Exibe número de repos.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-xl p-5 shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold mb-4">Redes Sociais</h2>
        <div className="grid grid-cols-2 gap-3">
          {SOCIAL_KEYS.map(({ key, label }) => (
            <div key={key} className="flex gap-2 items-center">
              <span className="shrink-0 w-8 h-8 flex items-center justify-center rounded bg-gray-200 text-xs font-semibold">
                {label}
              </span>
              <input
                type="url"
                value={socialLinks[key as keyof SocialLinks]}
                onChange={(e) =>
                  handleSocialChange(key as keyof SocialLinks, e.target.value)
                }
                placeholder={
                  key === "instagram"
                    ? "https://instagram.com/seuuser"
                    : key === "youtube"
                    ? "https://youtube.com/@seucanal"
                    : key === "linkedin"
                    ? "https://linkedin.com/in/seuuser"
                    : "https://x.com/seuuser"
                }
                className="flex-1 min-w-0 border border-neutral-400 py-2 px-3 rounded text-sm"
              />
              <button
                type="button"
                onClick={() => clearSocial(key as keyof SocialLinks)}
                className="shrink-0 text-red-500 hover:text-red-700 p-1"
                aria-label="Remover"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-xl p-5 shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold mb-4">Links Personalizados</h2>
        <div className="space-y-4">
          {links.map((link, index) => (
            <div
              key={link.id}
              className="border border-gray-200 rounded-lg p-4 relative"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="font-medium">Link {index + 1}</span>
                <button
                  type="button"
                  onClick={() => handleRemoveLink(link.id)}
                  className="text-sm text-red-500 hover:text-red-700"
                >
                  Remover
                </button>
              </div>
              <div className="space-y-2">
                <InputWithLabel
                  id={`${link.id}-label`}
                  type="text"
                  placeholder="Ex: Meu blog"
                  name={link.title}
                  onChange={(e) => handleLinkChange(link.id, "title", e.target.value)}
                  label="Label"
                />
                <InputWithLabel
                  id={`${link.id}-url`}
                  type="url"
                  placeholder="https://meusite.dev"
                  name={link.url}
                  onChange={(e) => handleLinkChange(link.id, "url", e.target.value)}
                  label="URL"
                />
              </div>
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={handleAddLink}
          className="mt-3 w-full py-2 border border-dashed border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50"
        >
          + Adicionar link
        </button>
      </section>
    </aside>
  );
};
export default Sidebar;
export type { Link }
