import type {
  RecruitmentExample,
  GalleryImage,
  RecruitmentPlace,
} from "../types";

// Mock data for recruitment examples
export const recruitmentExamples: RecruitmentExample[] = [
  {
    id: 1,
    title: "Steam Direct Message Example",
    text: `Hey there! I noticed you play Mount & Blade II: Bannerlord. Our clan is looking for new members who enjoy the game. We have regular events, friendly community, and help each other improve.

Would you be interested in joining us? We'd love to have you!

Here's our Discord link: [Your Discord Link]

Feel free to ask any questions. Hope to see you there!`,
    image: "/src/assets/images/steam-dm.jpg",
  },
  {
    id: 2,
    title: "Game Forum Post Example",
    text: `[RECRUITING] The Banner Warriors - Active Bannerlord Clan

We are an active clan focused on both PvE and PvP content in Bannerlord. Our members range from new players to veterans with hundreds of hours.

What we offer:
• Regular clan battles and events
• Friendly community willing to help
• Strategy discussions and gameplay tips
• Organized command structure with advancement opportunities

Requirements:
• Age 17+
• Microphone for communication
• Willingness to participate in clan events
• Basic understanding of the game

Interested? Join our Discord: [Your Discord Link]
Or message me directly on Steam: [Your Steam ID]`,
    image: "/src/assets/images/forum-post.jpg",
  },
  {
    id: 3,
    title: "In-Game Recruitment Message",
    text: `Looking for a clan? The Banner Warriors are recruiting!

We're a community-focused clan with regular events and a friendly atmosphere. Whether you're new to the game or a seasoned veteran, we have a place for you.

Benefits:
- Team-based gameplay
- Strategy sharing
- Regular events
- Active Discord

Message me for details or join our Discord: [Your Discord Link]`,
    image: "/src/assets/images/in-game-message.jpg",
  },
];

// Mock data for gallery images
export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/src/assets/images/banner-1.jpg",
    alt: "Clan Banner 1",
    description: "Our main clan banner - perfect for forum signatures",
  },
  {
    id: 2,
    src: "/src/assets/images/banner-2.jpg",
    alt: "Clan Banner 2",
    description: "Alternative clan banner with darker theme",
  },
  {
    id: 3,
    src: "/src/assets/images/screenshot-1.jpg",
    alt: "Gameplay Screenshot 1",
    description: "Battle formation screenshot to show our organization",
  },
  {
    id: 4,
    src: "/src/assets/images/screenshot-2.jpg",
    alt: "Gameplay Screenshot 2",
    description: "Castle siege screenshot demonstrating our tactical approach",
  },
  {
    id: 5,
    src: "/src/assets/images/event-1.jpg",
    alt: "Clan Event 1",
    description: "Screenshot from our weekly tournament event",
  },
  {
    id: 6,
    src: "/src/assets/images/event-2.jpg",
    alt: "Clan Event 2",
    description: "Group photo from our last major battle",
  },
];

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

// Export a default object with all data
export default {
  recruitmentExamples,
  galleryImages,
  recruitmentPlaces,
};
