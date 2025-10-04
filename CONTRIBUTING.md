# Contributing to RenderMD Frontend

Thank you for your interest in contributing to RenderMD Frontend! 🎉 We welcome contributions from developers of all skill levels and backgrounds.

## 📋 Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [Getting Started](#getting-started)
3. [How to Contribute](#how-to-contribute)
4. [Development Setup](#development-setup)
5. [Coding Standards](#coding-standards)
6. [Commit Guidelines](#commit-guidelines)
7. [Pull Request Process](#pull-request-process)
8. [Issue Guidelines](#issue-guidelines)
9. [Recognition](#recognition)

## 📜 Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0
- Git
- A GitHub account
- Basic knowledge of React and JavaScript

### First Time Setup

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/RenderMD-frontend.git
   cd RenderMD-frontend
   ```
3. **Add the upstream remote**:
   ```bash
   git remote add upstream https://github.com/Fluxxiondev/RenderMD-frontend.git
   ```
4. **Install dependencies**:
   ```bash
   npm install
   ```
5. **Start the development server**:
   ```bash
   npm run dev
   ```
6. **Open your browser** to `http://localhost:3001`

## 🤝 How to Contribute

### 🐛 Reporting Bugs

1. **Check existing issues** first to avoid duplicates
2. **Use the bug report template** when creating new issues
3. **Provide detailed information**:
   - Steps to reproduce
   - Expected vs actual behavior
   - Browser and device information
   - Screenshots or screen recordings
   - Console errors (if any)

### 💡 Suggesting Features

1. **Check existing feature requests** first
2. **Use the feature request template**
3. **Explain the use case** and expected benefit
4. **Consider the scope** - start with small, focused features
5. **Include mockups or wireframes** if applicable

### 🔧 Code Contributions

We have several types of contributions you can make:

#### 🌟 Good First Issues
Perfect for newcomers! Look for issues labeled `good first issue`.

#### 🎯 Areas We Need Help With

- **UI Components**: New interactive components, animations
- **User Experience**: Accessibility, mobile responsiveness
- **Performance**: Optimization, lazy loading, caching
- **Testing**: Unit tests, integration tests, E2E tests
- **Documentation**: Component docs, tutorials, examples
- **Internationalization**: Multi-language support
- **Themes**: Dark mode, custom themes, styling

## 💻 Development Setup

### Environment Configuration

Create a `.env.local` file with:

```env
# API Configuration
VITE_API_URL=http://localhost:3000
VITE_API_VERSION=v1

# Application Settings
VITE_APP_TITLE=RenderMD
VITE_APP_DESCRIPTION=Convert Markdown to Interactive Diagrams

# Feature Flags
VITE_ENABLE_DARK_MODE=true
VITE_ENABLE_EXPORT=true
VITE_ENABLE_COLLABORATION=false

# Development
VITE_DEBUG_MODE=true
```

### Available Scripts

```bash
# Development
npm run dev          # Start development server with HMR
npm run build        # Build for production
npm run preview      # Preview production build locally

```

### 📁 Project Structure

```
RenderMD-frontend/
├── public/             # Static assets
├── src/
│   ├── App.jsx        # Main App component
│   └── main.jsx       # Entry point
├── .github/           # GitHub workflows and templates
├── package.json
├── vite.config.js     # Vite configuration
└── README.md
```

## 📏 Coding Standards

### React/JavaScript Style Guide

We use ESLint and Prettier for consistent code style:

```javascript
// ✅ Good
import React, { useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useDiagram } from '../hooks/useDiagram';
import './DiagramEditor.css';

const DiagramEditor = ({ 
  initialContent = '', 
  onContentChange, 
  className = '' 
}) => {
  const [content, setContent] = useState(initialContent);
  const { renderDiagram, isLoading, error } = useDiagram();

  const handleContentChange = useCallback((newContent) => {
    setContent(newContent);
    onContentChange?.(newContent);
  }, [onContentChange]);

  const renderedDiagram = useMemo(() => {
    return renderDiagram(content);
  }, [content, renderDiagram]);

  if (error) {
    return <ErrorMessage error={error} />;
  }

  return (
    <div className={`diagram-editor ${className}`}>
      <textarea
        value={content}
        onChange={(e) => handleContentChange(e.target.value)}
        placeholder="Enter your markdown here..."
        className="editor-textarea"
      />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="diagram-preview">
          {renderedDiagram}
        </div>
      )}
    </div>
  );
};

DiagramEditor.propTypes = {
  initialContent: PropTypes.string,
  onContentChange: PropTypes.func,
  className: PropTypes.string,
};

export default DiagramEditor;
```

### Key Conventions

- **Naming**: Use PascalCase for components, camelCase for variables/functions
- **File Structure**: One component per file, named exports preferred
- **Props**: Use PropTypes or TypeScript for prop validation
- **Hooks**: Custom hooks should start with `use`
- **Event Handlers**: Prefix with `handle` (e.g., `handleClick`)
- **State**: Use descriptive names, group related state
- **Comments**: Write JSDoc comments for complex functions

### CSS/Styling Guidelines

```css
/* ✅ Good */
.diagram-editor {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  height: 100%;
  padding: 1rem;
}

.editor-textarea {
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 1rem;
  font-family: var(--font-mono);
  font-size: 0.875rem;
  line-height: 1.5;
  resize: none;
}

.editor-textarea:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 2px var(--primary-color-alpha);
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .diagram-editor {
    background-color: var(--dark-bg);
    color: var(--dark-text);
  }
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .diagram-editor {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
}
```

### Accessibility Guidelines

- Always include `alt` text for images
- Use semantic HTML elements
- Ensure keyboard navigation works
- Maintain color contrast ratios
- Include ARIA labels where needed
- Test with screen readers

## 📝 Commit Guidelines

We follow [Conventional Commits](https://conventionalcommits.org/) specification:

### Commit Format

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Commit Types

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that don't affect code meaning
- `refactor`: Code change that neither fixes a bug nor adds a feature
- `perf`: Performance improvements
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to build process or auxiliary tools
- `ui`: UI/UX improvements
- `a11y`: Accessibility improvements

### Examples

```bash
# Good commit messages
feat(editor): add syntax highlighting for markdown
fix(preview): resolve diagram rendering issue on mobile
docs(readme): update installation instructions
style(components): improve button hover animations
test(hooks): add tests for useDiagram hook
perf(render): optimize diagram generation performance
ui(theme): implement dark mode toggle
a11y(navigation): improve keyboard navigation

# Bad commit messages
Update stuff
Fix bug
Add feature
Changes
```

## 🔄 Pull Request Process

### Before Submitting

1. **Update your fork**:
   ```bash
   git checkout main
   git pull upstream main
   git push origin main
   ```

2. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes** following our coding standards

4. **Test your changes**:
   ```bash
   npm test
   npm run lint
   npm run build
   ```

5. **Commit your changes** using conventional commits

### PR Requirements

- [ ] **Title**: Use conventional commit format
- [ ] **Description**: Fill out the PR template completely
- [ ] **Screenshots**: Include before/after screenshots for UI changes
- [ ] **Tests**: Add/update tests for your changes
- [ ] **Documentation**: Update docs if needed
- [ ] **Accessibility**: Ensure changes meet a11y standards
- [ ] **Performance**: Consider performance impact
- [ ] **Mobile**: Test on mobile devices
- [ ] **Browser Compatibility**: Test across different browsers

### PR Template

```markdown
## Description
Brief description of changes and motivation

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] UI/UX improvement
- [ ] Performance optimization
- [ ] Documentation update
- [ ] Breaking change

## Screenshots
Include screenshots for UI changes

## Testing
- [ ] Unit tests pass
- [ ] Integration tests pass
- [ ] Manual testing completed
- [ ] Accessibility testing completed
- [ ] Mobile testing completed

## Performance Impact
- [ ] No performance impact
- [ ] Improves performance
- [ ] May impact performance (explain below)

## Browser Testing
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No console errors
- [ ] Accessibility standards met
```

## 🐛 Issue Guidelines

### Issue Types

We use issue templates for:

- **🐛 Bug Reports**: Something isn't working
- **💡 Feature Requests**: Suggest new features
- **🎨 UI/UX Improvements**: Design enhancements
- **📚 Documentation**: Improve or add documentation
- **🤔 Questions**: Get help or ask questions
- **♿ Accessibility**: Accessibility improvements

### Issue Labels

- **Priority**: `critical`, `high`, `medium`, `low`
- **Type**: `bug`, `enhancement`, `ui`, `documentation`, `question`
- **Status**: `needs-triage`, `in-progress`, `blocked`, `ready-for-review`
- **Difficulty**: `good first issue`, `help wanted`, `expert needed`
- **Area**: `components`, `hooks`, `services`, `styling`, `testing`

## 🧪 Testing Guidelines

### Testing Strategy

- **Unit Tests**: Test individual components and functions
- **Integration Tests**: Test component interactions
- **E2E Tests**: Test complete user workflows
- **Visual Regression**: Test UI consistency
- **Accessibility Tests**: Test a11y compliance

### Writing Tests

```javascript
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import DiagramEditor from './DiagramEditor';

describe('DiagramEditor', () => {
  it('renders with initial content', () => {
    render(<DiagramEditor initialContent="# Hello" />);
    expect(screen.getByDisplayValue('# Hello')).toBeInTheDocument();
  });

  it('calls onContentChange when content changes', () => {
    const handleContentChange = vi.fn();
    render(<DiagramEditor onContentChange={handleContentChange} />);
    
    const textarea = screen.getByRole('textbox');
    fireEvent.change(textarea, { target: { value: 'new content' } });
    
    expect(handleContentChange).toHaveBeenCalledWith('new content');
  });

  it('displays error message when diagram fails to render', () => {
    // Test error handling
  });
});
```

## 🏆 Recognition

### Contributors

We recognize contributors in several ways:

- **README**: Listed in contributors section
- **Release Notes**: Mentioned in changelog
- **Social Media**: Highlighted on our social channels
- **Swag**: UI/UX contributors get special RenderMD swag

### Contribution Levels

- **🌟 First-time Contributor**: Your first merged PR
- **🎨 UI Contributor**: 3+ UI/UX improvements
- **🚀 Regular Contributor**: 5+ merged PRs
- **💎 Core Contributor**: 15+ merged PRs or significant contributions
- **👑 Maintainer**: Trusted with repository access

## 🆘 Getting Help

### Stuck? Need Help?

- **💬 Discord**: [Join our community](https://discord.gg/rendermd)
- **📧 Email**: frontend@rendermd.com
- **🐛 Issues**: Create a question issue
- **📚 Docs**: Check our documentation
- **🎥 Videos**: Check our tutorial videos

### Design Resources

- **Figma**: [Design System](https://figma.com/rendermd-design)
- **Style Guide**: [Component Library](docs/style-guide.md)
- **Icons**: [Icon Library](docs/icons.md)
- **Colors**: [Color Palette](docs/colors.md)

## 📚 Additional Resources

- [React Documentation](https://react.dev/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Testing Library](https://testing-library.com/)
- [Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Modern CSS](https://moderncss.dev/)

---

**Thank you for contributing to RenderMD Frontend! Your efforts help create a better user experience for everyone.** 🙏

Questions? Feel free to reach out to the maintainers or create an issue.

**Happy Coding! 🚀**