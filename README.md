# 🤖 Humanly – AI Text Humanization Platform

Humanly transforms AI-generated writing into natural, authentic human-like communication. Select a tone, adjust rewrite strength, and let Humanly enhance your content while preserving meaning and intent.

## ✨ Features

- **Multiple Tones**: Choose from 19+ tone styles (Natural, Professional, Friendly, Creative, etc.)
- **Rewrite Strength**: Adjust the intensity of humanization (1-100%)
- **Output Goals**: Direct transformations to specific use cases (clarity, engagement, persuasion)
- **Preservation Options**: Keep specific elements intact (meaning, names, numbers, technical terms, formatting)
- **Live Statistics**: Character count, word count, sentence count, and reading time
- **Copy & Download**: Easily copy results or download as text files
- **Blue-Centric UI**: Modern, polished interface with gradient backgrounds and accessible components
- **Architecture Pipeline**: Visual representation of the transformation workflow

## 🏗️ Architecture

The platform follows a clean transformation pipeline:

1. **Ingress** – Web/API input collection
2. **Preprocess** – Sanitize & preserve entities
3. **Model (Ollama)** – Local LLM inference (future backend)
4. **Postprocess** – Tone + formatting adjustments
5. **Output** – Deliver rewritten text

Designed for seamless integration with **Ollama** for local, privacy-first AI inference.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
git clone https://github.com/VikramAdhikari26/Humanly-.git
cd Humanly-/client
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Production Build

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
Humanly-/
├── client/              # Next.js frontend
│   ├── app/
│   │   ├── components/  # Reusable UI components
│   │   ├── workspace/   # Workspace page & sub-components
│   │   ├── dashboard/   # Dashboard page
│   │   ├── architecture/# Architecture page with pipeline diagram
│   │   ├── docs/        # Documentation page
│   │   ├── research/    # Research page
│   │   ├── fonts.ts     # Font configuration (Cormorant)
│   │   ├── globals.css  # Global styles & Tailwind imports
│   │   └── layout.tsx   # Root layout
│   ├── lib/
│   │   └── tones.ts     # Centralized tone list
│   ├── tailwind.config.js # Tailwind theme with brand colors
│   ├── package.json
│   └── next.config.js
├── server/              # Backend (Node.js)
├── shared/              # Shared constants & prompts
└── README.md
```

## 🎨 Design & Theming

- **Color Palette**: Blue-centric with cyan accents (`bg-brand-900`, `brand-800`, etc.)
- **Font**: Cormorant Garamond for serif elegance
- **Typography**: Responsive, accessibility-first design
- **Components**: Modular, reusable React components with clear props

## 🔌 Key Components

### WorkspacePage (`app/workspace/page.tsx`)
Main interface for text humanization. Manages state for input, output, tone, strength, and preservation options.

### ToneSelector (`app/components/ToneSelector.tsx`)
Reusable component for selecting tones with keyboard navigation (arrow keys, Enter). Features primary chips + "More" dropdown.

### ArchitectureDiagram (`app/components/ArchitectureDiagram.tsx`)
Visual pipeline showing transformation steps with descriptions.

### OutputPanel & InputPanel
Workspace sub-components for input/output management with copy, download, and clear actions.

## 🔮 Future Enhancements

- [ ] Backend API integration (Node.js + Express)
- [ ] Ollama local LLM support
- [ ] Advanced tone customization
- [ ] Batch processing API
- [ ] User authentication & saved histories
- [ ] Mobile app version

## 📚 Technology Stack

- **Frontend**: Next.js 16+, React 19, TypeScript
- **Styling**: Tailwind CSS 4, PostCSS
- **Animation**: Framer Motion, Lucide Icons
- **Build**: Turbopack, ESLint
- **Backend (Planned)**: Node.js, Express, Ollama SDK

## 📝 Environment Variables

Create a `.env.local` file in the `client/` folder:

```
NEXT_PUBLIC_API_URL=http://localhost:3001
```

## 🧪 Testing

Mock humanization is currently isolated in `humanizeText()` function for easy replacement with actual API calls later.

## 📄 License

This project is open source. See LICENSE file for details.

## 👥 Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

## 🔗 Links

- **GitHub**: [VikramAdhikari26/Humanly-](https://github.com/VikramAdhikari26/Humanly-)
- **Live Demo**: (Coming soon)

---

**Made with ❤️ for natural, authentic AI-generated text.**

---

### Additional Resources

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
