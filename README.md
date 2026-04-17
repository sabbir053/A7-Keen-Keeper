# 👥 KeenKeeper — Keep Your Friendships Alive

📅 Deadline For 60 marks: 17 April 2026 | ⏱️11:59PM
📅 Deadline for 30 marks: Any time after 17 April 2026
🐣 Basic Requirements (Must Do for Everyone)

    Your app must work on all screen sizes — mobile, tablet, and desktop --> DONE
    Make at least 8 Git commits with clear, meaningful messages (e.g., "added friend card component") --> DONE
    Your app must run without any errors after deployment --> DONE
    Add a nice README.md file with your project name, description, technologies used, and features 
    --> DUE

🔧 Main Requirements — 50 Marks

1. 🔝 Navbar

Navbar:  --> ALL DONE <--

    Design the Navbar exactly like the Figma design --> DONE
    Put your logo on the left side --> DONE
    Put your navigation links on the right side — links are: Home, Timeline, Stats --> DONE
    Each link should have an icon next to the text --> DONE
    The active page link should look different (highlighted), just like the Figma design --> DONE

2. 🎯 Banner

Banner Section (Top of the Home page): --> DONE <--

    Show a centered title and subtitle --> DONE
    Add a button with an icon (e.g., "Add a Friend") --> DONE
    Show 4 summary cards below the banner, following the Figma design --> DONE

3. 📋 Friend Data (JSON File)

Create a file (e.g., friends.json) with 6–10 realistic friend profiles.
Each friend object must have these fields:  --> DONE

{
  "id": 1,
  "name": "John Doe",
  "picture": "<https://example.com/photo.jpg>",
  "email": "<john@example.com>",
  "days_since_contact": 12,
  "status": "overdue",
  "tags": ["college", "close friend"],
  "bio": "Met in university. Love hiking together.",
  "goal": 14,
  "next_due_date": "2025-07-20"
}

⚠️ Use meaningful data. No "lorem ipsum" or fake placeholder text.
    The status field can only be one of: "overdue" | "almost due" | "on-track" --> DONE
    💡 You may use an AI tool to help generate the JSON data.

1. 👫 Your Friends Section (Home Page) : --> DONE <--

    Display all friends from your JSON file as cards, following the Figma design
    Each card must show:

Field  Details
📸 Picture  Friend's photo   --> DONE
🧑 Name  Friend's full name  --> DONE
📅 Days Since Contact  How many days ago you contacted them --> DONE
🏷️ Tags  e.g., "college", "work" --> DONE
🔴 Status  Background color changes based on status (match Figma) --> DONE

    Cards must be shown in a 4-column grid layout on large screens  --> DONE
    Clicking a card must navigate the user to that friend's Detail Page --> DONE

5. 👤 Friend Details Page — Layout --> DONE <--

This page should have a two-column layout (follow the Figma design). --> DONE

Left Column — Friend Info Card:

Show the following details:

    Profile picture  --> DONE
    Name --> DONE
    Status (with color) --> DONE
    Tags --> DONE
    Bio --> DONE
    Email --> DONE

Also add these 3 action buttons (no functionality required for these buttons):
Button
⏰ Snooze 2 Weeks  --> DONE
📦 Archive --> DONE
🗑️ Delete --> DONE

Right Column — 3 sections:

① Stats Cards (show 3 cards):

    Days Since Contact --> DONE
    Goal (in days) --> DONE
    Next Due Date --> DONE

② Relationship Goal Card:

    Show the current contact goal --> DONE
    Add an Edit button --> DONE

③ Quick Check-In Card:

    Add 3 buttons with icons: Call, Text, Video  --> DONE
    When clicked, each button adds a new entry to the Timeline (see Section 6) --> DONE

6. ⚡ Friend Details Page — Button Functionality

When a user clicks Call, Text, or Video in the Quick Check-In Card:

✅ A new timeline entry is automatically added with:

    The current date  --> DONE
    A title like:  --> DONE
        "Call with Alex Johnson"
        "Text with Alex Johnson"
        "Video with Alex Johnson"

✅ A toast notification must appear when any of these buttons is clicked.  --> DONE

1. 📜 Timeline Page

This page shows the history of all interactions (calls, texts, video calls) logged from the Friend Details page. --> DONE

This page must have:

    A "Timeline" heading at the top --> DONE
    Timeline entries displayed following the Figma design --> DONE
    Each entry must show:

Field  Details
📅 Date  When the interaction happened  --> DONE
🔣 Icon  Different icon for Call / Text / Video --> DONE
📝 Title  e.g., "Call with Sarah", "Text with Mike" --> DONE

1. 🦶 Footer

    Design and add a footer section that matches the Figma design --> DONE

2. 📱 Responsive Design --> DONE

    The entire website must work correctly on mobile, tablet, and desktop screen sizes

3. 🛠️ Other Requirements(Required for marks)

#  Requirement

10.1  Add a 404 Page for any unknown/invalid route --> DONE
10.2  Show a loading animation while the friends data is being fetched on the Home page --> DONE
10.3  Show a relevant toast notification when the user clicks Call, Text, or Video --> DONE
10.4  Make sure reloading any page after deployment does not cause an error --> DONE

🚀 Challenge Requirements — 10 Marks
C1. 📊 Friendship Analytics Page (Stats Page)

    The page must have a "Friendship Analytics" heading at the top --> DONE
    Add a Pie Chart (using Recharts) showing the count of Call / Text / Video interactions — match the Figma layout --> DONE

C2. 🔍 Timeline Filter

    Add filter options on the Timeline page so users can filter entries by: Call, Text, or Video --> DONE

C3. 📄 GitHub README


Name of your project:
    ANS: a7-Keen-keeper

A short description:

    ANS: KeenKeeper is a simple and user-friendly web app that helps you keep track of your friends and stay connected. It reminds you when you haven’t contacted someone in a while, so you don’t lose touch with important people in your life.

Technologies you used:

    ANS: Next.js, React, Tailwind CSS, DaisyUI, JavaScript

3 key features of your project:

    1. You can view a list of friends along with their contact status (like active, almost due, or overdue).

    2. Each friend has a dedicated profile page where you can see more detailed information.
    
    3. A timeline page with filter options (text, call, video) allows you to easily track and organize your interaction history.

⭐ Optional (No Marks — Highly Recommended)

These are not required but will make your project stand out:

    Sort timeline entries by date (newest / oldest) --> done
    Search timeline entries by friend name or interaction type

🛠️ Technologies to Use
Technology  Purpose
React.js/Next.js  Build the UI
React Router DOM/App router(Next.js)  Handle page navigation
Tailwind CSS+Any component library  Styling and responsiveness
Recharts  Chart

🚀 Deployment

Deploy your project on Vercel, Netlify, Cloudflare Pages, or anywhere else before submitting.
📬 Submission

Fill in both links before submitting:

    Live Link:
    GitHub Repository Link:
