import { create } from "zustand";

export interface Link {
  id: string;
  url: string;
  title: string;
}

export interface SocialLinks {
  x: string;
  facebook: string;
  instagram: string;
  linkedin: string;
  youtube: string;
  tiktok: string;
  twitch: string;
}

const initialSocial: SocialLinks = {
  x: "",
  facebook: "",
  instagram: "",
  linkedin: "",
  youtube: "",
  tiktok: "",
  twitch: "",
};

interface ProfileState {
  // Perfil
  name: string;
  role: string;
  bio: string;
  githubUser: string;
  showFollowers: boolean;
  showRepos: boolean;
  socialLinks: SocialLinks;
  links: Link[];

  // Actions
  setName: (name: string) => void;
  setRole: (role: string) => void;
  setBio: (bio: string) => void;
  setGithubUser: (v: string) => void;
  setShowFollowers: (v: boolean) => void;
  setShowRepos: (v: boolean) => void;
  setSocialLinks: (v: SocialLinks | ((prev: SocialLinks) => SocialLinks)) => void;
  setLinks: (v: Link[] | ((prev: Link[]) => Link[])) => void;

  updateLink: (linkId: string, field: "title" | "url", value: string) => void;
  addLink: () => void;
  removeLink: (linkId: string) => void;
  setSocialLink: (key: keyof SocialLinks, value: string) => void;
  clearSocialLink: (key: keyof SocialLinks) => void;
}

export const useProfileStore = create<ProfileState>((set) => ({
  name: "",
  role: "",
  bio: "",
  githubUser: "",
  showFollowers: true,
  showRepos: true,
  socialLinks: initialSocial,
  links: [],

  setName: (name) => set({ name }),
  setRole: (role) => set({ role }),
  setBio: (bio) => set({ bio }),
  setGithubUser: (v) => set({ githubUser: v }),
  setShowFollowers: (v) => set({ showFollowers: v }),
  setShowRepos: (v) => set({ showRepos: v }),
  setSocialLinks: (v) =>
    set((state) => ({
      socialLinks: typeof v === "function" ? v(state.socialLinks) : v,
    })),
  setLinks: (v) =>
    set((state) => ({
      links: typeof v === "function" ? v(state.links) : v,
    })),

  updateLink: (linkId, field, value) =>
    set((state) => ({
      links: state.links.map((link) =>
        link.id === linkId ? { ...link, [field]: value } : link
      ),
    })),
  addLink: () =>
    set((state) => ({
      links: [
        ...state.links,
        {
          id: "link-" + (state.links.length + 1),
          url: "",
          title: "",
        },
      ],
    })),
  removeLink: (linkId) =>
    set((state) => ({
      links: state.links.filter((l) => l.id !== linkId),
    })),
  setSocialLink: (key, value) =>
    set((state) => ({
      socialLinks: { ...state.socialLinks, [key]: value },
    })),
  clearSocialLink: (key) =>
    set((state) => ({
      socialLinks: { ...state.socialLinks, [key]: "" },
    })),
}));