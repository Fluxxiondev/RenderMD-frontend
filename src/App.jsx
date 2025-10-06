import { useState, useEffect } from "react";
import mermaid from "mermaid";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [diagramType, setDiagramType] = useState("flowchart"); // default
  const [code, setCode] = useState("");
  const [diagramHtml, setDiagramHtml] = useState("");

  // Default templates for each type
  const templates = {
    flowchart: `graph TD
A[Start] --> B{Is it working?}
B -- Yes --> C[Great!]
B -- No --> D[Check code]
D --> B`,
    sequence: `sequenceDiagram
Alice->>John: Hello John, how are you?
John-->>Alice: Great!`,
    gantt: `gantt
title A Gantt Diagram
dateFormat  YYYY-MM-DD
section Project
Task A :a1, 2024-01-01, 30d
Task B :after a1  , 20d`,
    class: `classDiagram
Class01 <|-- AveryLongClass : Cool
Class03 *-- Class04`,
    state: `stateDiagram-v2
[*] --> S1
S1 --> [*]`,
  };

  // Render diagram whenever code changes
  useEffect(() => {
    try {
      mermaid.initialize({ startOnLoad: false, theme: darkMode ? "dark" : "default" });
      mermaid.render("graphDiv", code || templates[diagramType], (svgCode) => {
        setDiagramHtml(svgCode);
      });
    } catch (err) {
      setDiagramHtml("<p style='color:red'>Invalid Mermaid syntax</p>");
    }
  }, [code, darkMode, diagramType]);

  // Switch template when diagram type changes
  const handleDiagramTypeChange = (type) => {
    setDiagramType(type);
    setCode(templates[type]);
  };

  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>
      {/* Toolbar */}
      <header className="toolbar">
        <h1>RenderMD 🚀</h1>
        <div>
          <select value={diagramType} onChange={(e) => handleDiagramTypeChange(e.target.value)}>
            <option value="flowchart">📊 Flowchart</option>
            <option value="sequence">🔄 Sequence Diagram</option>
            <option value="gantt">📈 Gantt Chart</option>
            <option value="class">🏗️ Class Diagram</option>
            <option value="state">🔄 State Diagram</option>
          </select>
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </header>

      {/* Main Layout */}
      <div className="main">
        {/* Editor */}
        <textarea
          className="editor"
          placeholder="Write your Mermaid diagram here..."
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />

        {/* Preview */}
        <div
          className="preview"
          dangerouslySetInnerHTML={{ __html: diagramHtml }}
        />
      </div>
    </div>
  );
}

export default App;
