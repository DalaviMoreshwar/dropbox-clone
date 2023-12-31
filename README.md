# <img src="./public/box.png" alt="logo" style="width: 6%;"/> <span style="background: linear-gradient(135deg, #352F44, #279EFF); -webkit-background-clip: text;-webkit-text-fill-color: transparent;">Dropbox Clone Project</span>

## Overview

This project is a Dropbox clone built using modern web technologies. It leverages the power of Next.js 14 for a server-side rendered and performant experience. User authentication is handled by Clerk, offering a secure and user-friendly experience. Firebase provides reliable file storage, while Shaden UI ensures a clean and intuitive user interface. The project is hosted on Vercel, delivering global accessibility and seamless deployment.

<p align="center" width="100%">
  <img src="./public/logos/screenshot.png" alt="screenshot"/>
  <img src="./public/logos/screenshot-1.png" alt="screenshot"/>
</p>

## Features

✨ How to upload all File types to Firebase storage just like the real Dropbox!

✨ How to integrate full CRUD Functionality for the files

✨ Create a Beautiful UI & UX for our Dropbox clone using the highly Popular Shadcn!

✨ Learn how to use NextAuth Middleware to protect unauthorised access

✨ How to build a Login and Logout Authentication flow using Clerk Authentication!

✨ How to use Loaders whilst data is being fetched!

✨ Learn to implement a file sorter feature to sort all files based on various properties!

✨ Learn to implement a table view for all files with File Metadata display!

✨ How to leverage Global State Management with Zustand!

✨ How to build a beautiful UI design with Tailwind CSS!

✨ Learn how to download any uploaded file straight to your device!

✨ Learn how to implement the React DnD Library to Upload files via Drag and Drop!

✨ Learn how to implement Dark Mode toggling to update the UI based on user preference!

✨ How to use TypeScript to reduce the overall number of Bugs and Errors

✨ How to deploy the final build on Vercel!

## Technologies

<p align="center" width="100%" style="background-size: cover;">
  <img width="25%" src="./public/logos/nextjs.png" alt="logo"/>
  <img width="25%" src="./public/logos/tailwindcss.png" alt="logo"/>
  <img width="25%" src="./public/logos/shadcn-ui.png" alt="logo"/>
  <img width="25%" src="./public/logos/clerk.jpg" alt="logo"/>
  <img width="25%" src="./public/logos/vercel.png" alt="logo"/>
  <img width="25%" src="./public/logos/cloud-storage-firebase.png" alt="logo"/>
</p>

## Architecture

- **Frontend**: Built with Next.js, Tailwind CSS and Shaden UI framework and library, responsible for user interface and interaction.
- **Backend**: Built with Next.js API routes, handling data retrieval and manipulation.
- **Authentication**: Managed by Clerk, providing secure user login and authorization.
- **Storage**: Firebase Storage stores uploaded files securely and reliably.
- **Deployment**: Vercel delivers the application globally with fast and efficient deployment processes.

## Installation Setup

- Clone the project repository: `git clone https://github.com/DalaviMoreshwar/dropbox-clone.git`
- Install dependencies: `npm install`
- Create a Firebase account and project: [Firebase console](https://console.firebase.google.com/)
- Configure Firebase Storage and obtain credentials
- Create a Clerk account and obtain API keys: [Clerk dashboard](https://clerk.com/)
- Update environment variables Clerk credentials:

  `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`

  `CLERK_SECRET_KEY`

  `NEXT_PUBLIC_FIREBASE_CONFIG`

- Start the development server: `npm run dev`

## Usage

- Visit the application URL: `http://localhost:3000`
- Sign up or login using Clerk.
- Upload files using the drag-and-drop interface.
- Download, Rename or Delete files by clicking on the respective icons.

## Additional Notes

✅ This is a basic implementation of a Dropbox clone.

✅ There are many features that could be added to make the project more robust and complete.

✅ The project is open-source and available for anyone to contribute to.

## Conclusion

This project provides a solid foundation for building a functional and scalable Dropbox clone. By leveraging modern web technologies, it offers a secure, performant, and user-friendly experience. The provided documentation helps you understand the architecture, setup, and usage of the project, allowing you to further customize and extend its functionality based on your specific needs.
