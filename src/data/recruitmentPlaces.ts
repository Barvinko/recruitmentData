import type { RecruitmentPlace } from "../types";

// Mock data for recruitment places
export const recruitmentPlaces: RecruitmentPlace[] = [
  {
    id: 1,
    title: "Steam Discussions",
    description:
      "Steam discussion forums are a great place to find interested players. Look for threads where people are discussing clans or seeking groups to join.",
    images: [
      {
        id: 101,
        src: "/src/assets/images/steam-discussions.jpg",
        alt: "Steam Discussions Page",
      },
      {
        id: 102,
        src: "/src/assets/images/steam-discussions-post.jpg",
        alt: "Example of a Steam Discussion Post",
      },
    ],
    tips: [
      "Create a detailed post with information about your clan and what you offer",
      "Respond quickly to comments and questions",
      "Include screenshots of clan activities",
      "Bump your post regularly (but not too often to avoid spam)",
      "Be friendly and helpful to potential recruits",
    ],
  },
  {
    id: 2,
    title: "Game Reviews",
    description:
      "Look for positive reviews of Bannerlord on Steam where players seem enthusiastic about the game. These players are more likely to be interested in joining a clan.",
    images: [
      {
        id: 201,
        src: "/src/assets/images/steam-reviews.jpg",
        alt: "Steam Reviews Page",
      },
      {
        id: 202,
        src: "/src/assets/images/positive-review.jpg",
        alt: "Example of a Positive Review",
      },
    ],
    tips: [
      "Focus on contacting players with many hours in the game",
      "Personalize your message based on what they wrote in their review",
      "Mention specific aspects of your clan that might interest them",
      "Don't be pushy - offer information and let them decide",
      "Follow up only once if they don't respond",
    ],
  },
  {
    id: 3,
    title: "In-Game Recruitment",
    description:
      "Recruiting directly in-game can be effective, especially during or after multiplayer matches where you've played well together.",
    images: [
      {
        id: 301,
        src: "/src/assets/images/in-game-chat.jpg",
        alt: "In-Game Chat",
      },
      {
        id: 302,
        src: "/src/assets/images/post-match-screen.jpg",
        alt: "Post-Match Screen",
      },
    ],
    tips: [
      "Be respectful and don't spam the chat",
      "Target players who showed good teamwork or skill",
      "Invite players to a Discord voice chat for a trial run",
      "Share your clan's focus (PvP, roleplay, etc.) to attract like-minded players",
      "Organize public events where non-members can participate",
    ],
  },
];
