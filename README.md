# Secure Access

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react" alt="React 19" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind-4-38BDF8?style=for-the-badge&logo=tailwindcss" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="MIT License" />
</p>

<p align="center">
  <strong>Secure, customizable password generation built for speed, clarity, and everyday security.</strong>
</p>

Secure Access is a modern password generator designed to help users create strong, unique passwords in seconds. With adjustable character sets, real-time password strength analysis, and one-click clipboard support, it delivers a clean and professional experience without relying on a backend.

## ✨ Features

- Generate secure passwords with custom length control
- Toggle uppercase, lowercase, numbers, and symbols
- Real-time password strength feedback
- Quick copy-to-clipboard action
- Fully client-side experience with no server dependency
- Responsive, minimal UI optimized for desktop and mobile

## 🧩 Tech Stack

- React 19
- Vite
- Tailwind CSS
- JavaScript

## 📁 Project Structure

```text
SecureAccess/
├── public/
├── src/
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── assets/
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
├── LICENSE
├── README.md
├── dist/
└── node_modules/
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/NihalSinghrana809/SecureAccess.git
cd SecureAccess
npm install
```

### Run the app

```bash
npm run dev
```

Then open the local URL shown in the terminal, typically:

```text
http://localhost:5173
```

## 🛠️ Available Scripts

```bash
npm run dev      # Start the Vite development server
npm run build    # Generate a production build
npm run preview  # Preview the production build locally
npm run lint     # Run ESLint checks
```

## 📖 How to Use

1. Adjust the password length with the slider.
2. Select the character types you want included.
3. Click the Generate Password button.
4. Copy the password instantly and use it wherever needed.
5. Check the strength indicator for confidence in the result.

## 🔐 Security Notes

This application generates passwords directly in the browser and does not send credentials to any remote service. It is a client-side utility intended to help users create stronger passwords, but it should still be used with good password hygiene and platform security practices.

## 🤝 Contributing

Contributions are welcome. If you want to improve the app, open a pull request with a clear description of the change and the problem it solves.

## 📄 License

This project is released under the [MIT License](LICENSE).

## 👤 Author

Built by Nihal Singhrana.
