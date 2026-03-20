const fs = require('fs');
const path = require('path');

const structure = {
  public: {
    images: {
      projects: {},
    },
    'favicon.ico': null,
  },

  app: {
    'layout.tsx': null,
    'page.tsx': null,
    about: {
      'page.tsx': null,
    },
    projects: {
      'page.tsx': null,
      '[slug]': {
        'page.tsx': null,
      },
    },
    contact: {
      'page.tsx': null,
    },
    'globals.css': null,
  },

  components: {
    layout: ['Navbar.tsx', 'Footer.tsx', 'Layout.tsx'],
    sections: [
      'Hero.tsx',
      'AboutPreview.tsx',
      'ProjectsGrid.tsx',
      'ContactForm.tsx',
      'ContactPreview.tsx',
    ],
    ui: [
      'Button.tsx',
      'Card.tsx',
      'SectionHeading.tsx',
      'ProjectCard.tsx',
    ],
  },

  lib: ['projects.ts', 'constants.ts', 'utils.ts'],
  hooks: ['useTheme.ts'],
  rootFiles: ['.env.local', 'tailwind.config.js'],
};

function createStructure(basePath, structure) {
  for (const key in structure) {
    const value = structure[key];

    // Root files
    if (key === 'rootFiles') {
      value.forEach((file) => {
        const filePath = path.join(basePath, file);
        if (!fs.existsSync(filePath)) {
          fs.writeFileSync(filePath, '');
        }
      });
      continue;
    }

    const currentPath = path.join(basePath, key);

    if (Array.isArray(value)) {
      fs.mkdirSync(currentPath, { recursive: true });

      value.forEach((file) => {
        const filePath = path.join(currentPath, file);
        if (!fs.existsSync(filePath)) {
          fs.writeFileSync(filePath, getBoilerplate(file));
        }
      });
    } else if (value === null) {
      const filePath = path.join(basePath, key);
      if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, getBoilerplate(key));
      }
    } else {
      fs.mkdirSync(currentPath, { recursive: true });
      createStructure(currentPath, value);
    }
  }
}

function getBoilerplate(fileName) {
  if (fileName === 'layout.tsx') {
    return `export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
`;
  }

  if (fileName.endsWith('page.tsx')) {
    return `export default function Page() {
  return <div>${fileName.replace('.tsx', '')}</div>;
}
`;
  }

  if (fileName.endsWith('.tsx')) {
    return `export default function ${fileName.replace('.tsx', '')}() {
  return <div>${fileName}</div>;
}
`;
  }

  if (fileName.endsWith('.ts')) {
    return `// ${fileName}\n`;
  }

  if (fileName === 'globals.css') {
    return `@tailwind base;
@tailwind components;
@tailwind utilities;
`;
  }

  return '';
}

// Run
createStructure(__dirname, structure);

console.log('✅ Portfolio structure created!');