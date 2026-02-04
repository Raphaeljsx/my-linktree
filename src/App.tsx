import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import { useState } from "react";
import type { Link } from "./components/Sidebar";
import type { SocialLinks } from "./types/SocialLinks";

const initialSocial: SocialLinks = {
  twitter: "",
  facebook: "",
  instagram: "",
  linkedin: "",
  youtube: "",
  tiktok: "",
  twitch: "",
};
function App() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [bio, setBio] = useState("");
  const [githubUser, setGithubUser] = useState("");
  const [showFollowers, setShowFollowers] = useState(true);
  const [showRepos, setShowRepos] = useState(true);
  const [socialLinks, setSocialLinks] = useState<SocialLinks>(initialSocial);
  const [links, setLinks] = useState<Link[]>([]);

  return (
    <div className="flex gap-4 min-h-screen bg-gray-100 p-6">
      <Sidebar
        name={name}
        role={role}
        bio={bio}
        setName={setName}
        setRole={setRole}
        setBio={setBio}
        links={links}
        setLinks={setLinks}
        githubUser={githubUser}
        setGithubUser={setGithubUser}
        showFollowers={showFollowers}
        setShowFollowers={setShowFollowers}
        showRepos={showRepos}
        setShowRepos={setShowRepos}
        socialLinks={socialLinks}
        setSocialLinks={setSocialLinks}
      />
      <Content name={name} role={role} bio={bio} githubUser={githubUser} showFollowers={showFollowers} showRepos={showRepos} links={links} socialLinks={socialLinks} />
    </div>
  );
}

export default App;
