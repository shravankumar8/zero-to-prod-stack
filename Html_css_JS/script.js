const foundations = [
  {
    title: "Markup Languages",
    detail: "Markup languages describe structure and meaning of content. HTML is the standard markup language for the web."
  },
  {
    title: "Frontend Development",
    detail: "Frontend is everything users see and interact with in the browser: HTML for structure, CSS for styling, JavaScript for behavior."
  },
  {
    title: "HTTP",
    detail: "HTTP is the protocol used by browsers and servers to request and transfer web content."
  },
  {
    title: "DNS + Domain Names",
    detail: "DNS translates readable domain names into server IP addresses so browsers know where to send requests."
  },
  {
    title: "Browsers",
    detail: "Browsers parse HTML, apply CSS, execute JavaScript, and render UI by creating DOM and CSSOM trees."
  },
  {
    title: "Hosting",
    detail: "Hosting providers run your web app on servers and expose it through the internet."
  },
  {
    title: "SEO Basics",
    detail: "Search Engine Optimization helps your pages rank by using semantic tags, metadata, performance, and accessibility."
  },
  {
    title: "How the Web Works",
    detail: "User enters URL -> DNS lookup -> TCP/TLS + HTTP request -> server response -> browser render pipeline."
  },
  {
    title: "CSP",
    detail: "Content Security Policy controls what resources can load to reduce XSS and injection risks."
  }
];

const playbook = {
  html: [
    {
      title: "HTML Basics and Document Structure",
      summary: "Learn what HTML is and how a valid page is organized.",
      topics: [
        "Introduction to HTML",
        "Your first HTML file",
        "Case insensitivity",
        "Whitespaces",
        "HTML comments",
        "!DOCTYPE",
        "html, head, body",
        "meta tags",
        "title tag",
        "Standard attributes",
        "Data attributes",
        "id, class, style attributes"
      ]
    },
    {
      title: "Text and Basic Tags",
      summary: "Core tags for headings, text semantics, and formatting.",
      topics: [
        "h1 to h6",
        "p",
        "b / strong",
        "i / em",
        "mark",
        "sub",
        "sup",
        "br",
        "hr",
        "pre",
        "Textual tags",
        "div and span",
        "Grouping text"
      ]
    },
    {
      title: "Links, Lists, and Tables",
      summary: "Navigation and data representation structures.",
      topics: [
        "Links",
        "Ordered lists",
        "Unordered lists",
        "Definition lists",
        "Nested lists",
        "Table tag",
        "Lists and types"
      ]
    },
    {
      title: "Semantic and Layout Tags",
      summary: "Use semantic tags to improve readability, accessibility, and SEO.",
      topics: [
        "header",
        "nav",
        "main",
        "section",
        "article",
        "aside",
        "footer",
        "Semantic markup",
        "Layout tags",
        "Accessibility",
        "Basics of SEO"
      ]
    },
    {
      title: "Quotes, References, and Change Tracking",
      summary: "Add meaning to references and content updates.",
      topics: [
        "blockquote",
        "q",
        "cite",
        "dfn",
        "abbr",
        "address",
        "del",
        "s",
        "ins",
        "Quotation / citation",
        "Highlighting changes"
      ]
    },
    {
      title: "Media and Embedding",
      summary: "Embed visual and interactive media in web pages.",
      topics: [
        "Images",
        "img vs figure",
        "Audio",
        "Video",
        "iframe",
        "Embedding media",
        "Priority hints",
        "HTML entities"
      ]
    },
    {
      title: "Forms and Validation",
      summary: "Capture user input securely and clearly.",
      topics: [
        "Using forms",
        "Labels and inputs",
        "Form validation",
        "File uploads",
        "Limitations of HTML validation"
      ]
    },
    {
      title: "Styling Integration",
      summary: "Apply CSS and JavaScript with HTML documents.",
      topics: [
        "Inline CSS",
        "Internal CSS",
        "External CSS",
        "Styling basics including JavaScript"
      ]
    }
  ],
  css: [
    {
      title: "CSS Introduction and Syntax",
      summary: "Understand how CSS rules apply to HTML elements.",
      topics: [
        "Introduction",
        "Inline CSS",
        "Internal CSS",
        "External CSS",
        "Cascading order",
        "Selector + declaration",
        "Syntax basics",
        "Properties and values",
        "Comments",
        "CSS specificity"
      ]
    },
    {
      title: "Selectors Deep Dive",
      summary: "Target elements precisely using selector strategies.",
      topics: [
        "element selector",
        "universal selector",
        "class selector",
        "id selector",
        "grouping selector",
        "Simple selectors",
        "descendant combinator",
        "child combinator",
        "next sibling",
        "subsequent sibling",
        "attribute selectors",
        "pseudo classes",
        "pseudo elements",
        "Combinator selectors"
      ]
    },
    {
      title: "Typography and Text Styling",
      summary: "Create readable, consistent visual hierarchy for content.",
      topics: [
        "Font families",
        "Google Fonts",
        "Font size",
        "Font style",
        "Font variant",
        "Font shorthand",
        "Text alignment",
        "Text transform",
        "Text decoration",
        "Text spacing",
        "Line height",
        "Text shadows"
      ]
    },
    {
      title: "Colors and Backgrounds",
      summary: "Use color systems and layered backgrounds effectively.",
      topics: [
        "Named colors",
        "hex colors",
        "rgb",
        "rgba",
        "hsl",
        "hsla",
        "Background color",
        "Background image",
        "Background gradient",
        "Background position",
        "Background attachment",
        "Color direction"
      ]
    },
    {
      title: "Box Model and Visual Effects",
      summary: "Control spacing and shape around every element.",
      topics: [
        "Width and height",
        "Padding",
        "Border",
        "Margin",
        "Outline",
        "Box shadows",
        "Opacity",
        "Box model"
      ]
    },
    {
      title: "Display and Positioning",
      summary: "Place elements in flow and out-of-flow layouts.",
      topics: [
        "display: inline",
        "display: block",
        "display: inline-block",
        "display: none",
        "visibility",
        "Position",
        "static",
        "relative",
        "absolute",
        "fixed",
        "sticky",
        "Float",
        "Tables",
        "Z-index / stacking context"
      ]
    },
    {
      title: "Layout Systems",
      summary: "Build modern responsive layouts with robust techniques.",
      topics: [
        "Flow layout",
        "Multicolumn layout",
        "Flexbox",
        "Grid",
        "CSS functions",
        "CSS variables",
        "Absolute vs relative units",
        "CSS units",
        "Units with functions"
      ]
    },
    {
      title: "Responsive and Modern CSS",
      summary: "Design for devices, containers, and maintainable codebases.",
      topics: [
        "Media queries",
        "Container queries",
        "Responsive typography",
        "Transforms",
        "Transitions",
        "Animations",
        "Keyframe animations",
        "Images and filters",
        "Lists",
        "Methodologies",
        "BEM",
        "Sass",
        "PostCSS",
        "CSS modules",
        "CSS-in-JS",
        "Accessibility",
        "Performance",
        "Best practices"
      ]
    }
  ],
  js: [
    {
      title: "Getting Started",
      summary: "Learn what JavaScript is and how it evolved.",
      topics: [
        "What is JavaScript",
        "History of JavaScript",
        "JavaScript versions",
        "How to run JavaScript",
        "Strict mode",
        "Using Browser DevTools"
      ]
    },
    {
      title: "Variables, Scope, and Data Types",
      summary: "Understand memory references, naming, and primitive vs non-primitive values.",
      topics: [
        "Variable declarations",
        "var, let, const",
        "Hoisting",
        "Variable naming rules",
        "Scopes: block, function, global",
        "All about variables",
        "Primitive types",
        "string",
        "number",
        "bigint",
        "boolean",
        "undefined",
        "null",
        "symbol",
        "Object",
        "typeof operator",
        "Built-in objects"
      ]
    },
    {
      title: "Type System and Equality",
      summary: "Handle conversions and comparisons safely.",
      topics: [
        "Type casting",
        "Type conversion vs coercion",
        "Explicit type casting",
        "Implicit type casting",
        "Equality comparisons",
        "==",
        "===",
        "Object.is",
        "Value comparison operators",
        "isLooselyEqual",
        "isStrictlyEqual",
        "SameValue",
        "SameValueZero",
        "Equality algorithms"
      ]
    },
    {
      title: "Data Structures",
      summary: "Choose the right built-in data structure for the task.",
      topics: [
        "Arrays",
        "Typed arrays",
        "JSON",
        "Map",
        "WeakMap",
        "Set",
        "WeakSet",
        "Keyed collections",
        "Indexed collections",
        "Structured data"
      ]
    },
    {
      title: "Control Flow and Error Handling",
      summary: "Drive program logic and fail safely.",
      topics: [
        "if...else",
        "switch",
        "for",
        "while",
        "do...while",
        "for...in",
        "for...of",
        "break",
        "continue",
        "Control flow",
        "throw statement",
        "try/catch/finally",
        "Error objects",
        "Exceptional handling"
      ]
    },
    {
      title: "Operators and Expressions",
      summary: "Use operators correctly for concise and predictable logic.",
      topics: [
        "Assignment operators",
        "Comparison operators",
        "Arithmetic operators",
        "Bitwise operators",
        "Logical operators",
        "BigInt operators",
        "String operators",
        "Conditional operator",
        "Comma operator",
        "Unary operators"
      ]
    },
    {
      title: "Functions and Scope Patterns",
      summary: "Master function forms, closures, and this-binding.",
      topics: [
        "Function declarations",
        "Function parameters",
        "Default params",
        "Rest parameters",
        "arguments object",
        "Arrow functions",
        "IIFEs",
        "Recursion",
        "Lexical scoping",
        "Closures",
        "Scope and function stack",
        "Built-in functions",
        "Using this in method",
        "Using this in function",
        "Using this alone",
        "Using this in event handlers",
        "Using this in arrow functions",
        "Function borrowing",
        "call apply bind",
        "Explicit binding"
      ]
    },
    {
      title: "Asynchronous JavaScript",
      summary: "Understand concurrency, scheduling, and async workflows.",
      topics: [
        "Event loop",
        "Callbacks",
        "Callback hell",
        "Promises",
        "async/await",
        "setTimeout",
        "setInterval"
      ]
    },
    {
      title: "Web APIs, Modules, and OOP",
      summary: "Use browser APIs and modern code organization patterns.",
      topics: [
        "DOM APIs",
        "Fetch API",
        "XMLHttpRequest",
        "Working with APIs",
        "Modules in JavaScript",
        "CommonJS",
        "ESM",
        "Iterators and generators",
        "Classes",
        "Object prototype",
        "Prototypal inheritance"
      ]
    },
    {
      title: "Performance, Memory, and Ecosystem",
      summary: "Build reliable apps and debug issues like a professional.",
      topics: [
        "Memory lifecycle",
        "Garbage collection",
        "Memory management",
        "Debugging issues",
        "Debugging memory leaks",
        "Debugging performance",
        "React roadmap context",
        "Node.js roadmap context",
        "Beginner topics",
        "Intermediate topics",
        "Advanced topics"
      ]
    }
  ]
};

const checkboxStateKey = "tutorial-playbook-checks-v1";
const savedChecks = JSON.parse(localStorage.getItem(checkboxStateKey) || "{}");

function buildFoundations() {
  const root = document.getElementById("foundations-grid");
  root.innerHTML = foundations
    .map((item) => {
      return `
      <article class="topic-card">
        <h3>${item.title}</h3>
        <p>${item.detail}</p>
      </article>
    `;
    })
    .join("");
}

function blockId(track, blockTitle, topic) {
  return `${track}::${blockTitle}::${topic}`;
}

function createRoadmap(trackName, blocks, mountId) {
  const mount = document.getElementById(mountId);
  mount.innerHTML = blocks
    .map((block, idx) => {
      const topicsHtml = block.topics
        .map((topic) => {
          const id = blockId(trackName, block.title, topic);
          const checked = savedChecks[id] ? "checked" : "";
          return `<li><label><input data-check-id="${id}" type="checkbox" ${checked}>${topic}</label></li>`;
        })
        .join("");
      const open = idx === 0 ? "open" : "";
      return `
      <details class="roadmap-block" ${open}>
        <summary>${block.title}</summary>
        <div class="inner">
          <p>${block.summary}</p>
          <ul>${topicsHtml}</ul>
        </div>
      </details>
    `;
    })
    .join("");
}

function saveCheckState() {
  const checks = document.querySelectorAll("input[data-check-id]");
  const state = {};
  checks.forEach((input) => {
    state[input.dataset.checkId] = input.checked;
  });
  localStorage.setItem(checkboxStateKey, JSON.stringify(state));
}

function setupCheckboxPersistence() {
  document.body.addEventListener("change", (event) => {
    if (event.target instanceof HTMLInputElement && event.target.dataset.checkId) {
      saveCheckState();
    }
  });
}

function setupHtmlPlayground() {
  const htmlInput = document.getElementById("html-input");
  const renderButton = document.getElementById("render-html");
  const preview = document.getElementById("html-preview");
  const sample = `
<main style="font-family: sans-serif; padding: 12px;">
  <h2>My Practice Card</h2>
  <p>Try tags like <strong>strong</strong>, <em>em</em>, and <mark>mark</mark>.</p>
  <ul><li>Semantic HTML</li><li>Accessible labels</li><li>Clean structure</li></ul>
</main>`;
  htmlInput.value = sample.trim();

  const render = () => {
    preview.srcdoc = htmlInput.value;
  };

  renderButton.addEventListener("click", render);
  render();
}

function setupCssPlayground() {
  const bgColor = document.getElementById("bg-color");
  const radius = document.getElementById("radius");
  const rotate = document.getElementById("rotate");
  const demo = document.getElementById("css-demo-box");

  const applyStyles = () => {
    demo.style.backgroundColor = bgColor.value;
    demo.style.borderRadius = `${radius.value}px`;
    demo.style.transform = `rotate(${rotate.value}deg)`;
    demo.style.boxShadow = `0 18px 32px rgba(0, 0, 0, 0.3)`;
  };

  [bgColor, radius, rotate].forEach((input) => input.addEventListener("input", applyStyles));
  applyStyles();
}

const snippets = {
  variables: () => {
    const name = "Frontend Learner";
    let completed = 3;
    completed += 1;
    const message = `${name} completed ${completed} tracks.`;
    return message;
  },
  arrayMap: () => {
    const nums = [1, 2, 3, 4];
    return nums.map((n) => n * n);
  },
  closure: () => {
    function counter() {
      let value = 0;
      return function () {
        value += 1;
        return value;
      };
    }
    const next = counter();
    return [next(), next(), next()];
  },
  asyncAwait: async () => {
    const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    await wait(300);
    return "Async task resolved after 300ms";
  }
};

function setupJsPlayground() {
  const output = document.getElementById("js-output");
  const buttons = document.querySelectorAll(".js-snippet");
  const print = (value) => {
    output.textContent = typeof value === "string" ? value : JSON.stringify(value, null, 2);
  };

  buttons.forEach((button) => {
    button.addEventListener("click", async () => {
      const key = button.dataset.snippet;
      const fn = snippets[key];
      if (!fn) return;
      print("Running...");
      const result = await fn();
      print(result);
    });
  });
}

function init() {
  buildFoundations();
  createRoadmap("html", playbook.html, "html-content");
  createRoadmap("css", playbook.css, "css-content");
  createRoadmap("javascript", playbook.js, "js-content");
  setupCheckboxPersistence();
  setupHtmlPlayground();
  setupCssPlayground();
  setupJsPlayground();
}

init();
