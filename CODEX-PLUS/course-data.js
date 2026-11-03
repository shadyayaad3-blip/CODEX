window.CODEX_COURSES = {
  "html": [
    [
      "يعني إيه HTML؟",
      "HTML هي لغة بناء هيكل صفحة الويب. بنستخدم الوسوم (Tags) عشان نقول للمتصفح ده عنوان وده نص وده زر.",
      "<h1>أهلاً CODEX</h1>\n<p>أول صفحة ليا</p>",
      "أكمل وسم العنوان الرئيسي:\n<_____>مرحبا</h1>",
      [
        "h1",
        "p",
        "img"
      ],
      0,
      "أكمل بداية وسم العنوان:\n<_____>CODEX</h1>",
      "h1",
      "h1"
    ],
    [
      "العناوين والفقرات",
      "العناوين من h1 إلى h6. استخدم h1 للعنوان الرئيسي، وp للفقرات العادية.",
      "<h1>عنوان رئيسي</h1>\n<h2>عنوان فرعي</h2>\n<p>فقرة نصية.</p>",
      "أكمل وسم الفقرة:\n<_____>أتعلم HTML</p>",
      [
        "p",
        "h2",
        "a"
      ],
      0,
      "أكمل وسم الفقرة:\n<_____>أول صفحة</p>",
      "p",
      "p"
    ],
    [
      "الروابط",
      "الوسم a ينشئ رابطًا. الخاصية href تحدد الصفحة أو الموقع الذي سينتقل إليه المستخدم.",
      "<a href=\"https://example.com\">افتح الموقع</a>",
      "أكمل خاصية وجهة الرابط:\n<a _____=\"https://example.com\">افتح</a>",
      [
        "src",
        "href",
        "alt"
      ],
      1,
      "أكمل الخاصية الناقصة:\n<a _____=\"https://example.com\">CODEX</a>",
      "href",
      "href"
    ],
    [
      "الصور",
      "الوسم img يعرض صورة. الخاصية src لمسار الصورة وalt لوصفها عند عدم ظهورها ولمساعدة قارئات الشاشة.",
      "<img src=\"cat.jpg\" alt=\"قطة صغيرة\">",
      "أكمل خاصية مسار الصورة:\n<img _____=\"photo.jpg\" alt=\"صورة\">",
      [
        "href",
        "src",
        "class"
      ],
      1,
      "أكمل خاصية الصورة:\n<img _____=\"logo.png\" alt=\"شعار\">",
      "src",
      "src"
    ],
    [
      "النماذج والمدخلات",
      "النموذج form يجمع بيانات. input ينشئ خانة إدخال، وlabel يوضح للمستخدم المطلوب.",
      "<label for=\"name\">اسمك</label>\n<input id=\"name\" type=\"text\">",
      "أكمل نوع خانة البريد:\n<input type=\"_____\">",
      [
        "text",
        "email",
        "button"
      ],
      1,
      "أكمل نوع خانة البريد:\n<input type=\"_____\">",
      "email",
      "email"
    ]
  ],
  "css": [
    [
      "ما هي CSS؟",
      "CSS مسؤولة عن مظهر الصفحة: الألوان والخطوط والمسافات وترتيب العناصر. يمكن وضعها في ملف منفصل وربطه بـ HTML.",
      "p {\n  color: purple;\n}",
      "أكمل خاصية لون النص:\np {\n  _____: purple;\n}",
      [
        "color",
        "margin",
        "width"
      ],
      0,
      "أكمل الخاصية:\nh1 {\n  _____: red;\n}",
      "color",
      "color"
    ],
    [
      "اختيار العناصر",
      "نستخدم اسم الوسم لاختيار كل العناصر من نوعه، والنقطة لاختيار class، والهاش لاختيار id.",
      ".card {\n  background: #222;\n}",
      "أكمل طريقة اختيار class اسمها card:\n_____.card {\n  background: #222;\n}",
      [
        "#",
        ".",
        "@"
      ],
      1,
      "أكمل المحدد:\n_____box {\n  padding: 10px;\n}",
      ".",
      "."
    ],
    [
      "الألوان والخلفيات",
      "color يغير لون النص، وbackground-color يغير خلفية العنصر. يمكن كتابة الألوان بالاسم أو HEX.",
      "body {\n  color: white;\n  background-color: #111;\n}",
      "أكمل خاصية لون الخلفية:\nbody {\n  _____: black;\n}",
      [
        "font-size",
        "background-color",
        "border"
      ],
      1,
      "أكمل الخاصية:\nbody {\n  _____: #111;\n}",
      "background-color",
      "background-color"
    ],
    [
      "المسافات والحدود",
      "padding مساحة داخل العنصر، وmargin مساحة خارجه، وborder يرسم حدًا حوله.",
      ".box {\n  padding: 12px;\n  margin: 20px;\n  border: 1px solid white;\n}",
      "أكمل خاصية المساحة الخارجية:\n.box {\n  _____: 20px;\n}",
      [
        "padding",
        "margin",
        "color"
      ],
      1,
      "أكمل الخاصية:\n.card {\n  _____: 12px;\n}",
      "margin",
      "margin"
    ],
    [
      "Flexbox",
      "Flexbox يساعد في ترتيب العناصر داخل صف أو عمود. نبدأ غالبًا بـ display:flex ثم نستخدم gap وjustify-content.",
      ".row {\n  display: flex;\n  gap: 12px;\n  justify-content: center;\n}",
      "أكمل تفعيل Flexbox:\n.menu {\n  _____: flex;\n}",
      [
        "display",
        "position",
        "align"
      ],
      0,
      "أكمل الخاصية:\n.row {\n  _____: flex;\n}",
      "display",
      "display"
    ]
  ],
  "javascript": [
    [
      "ما هي JavaScript؟",
      "JavaScript تضيف السلوك والتفاعل للموقع، مثل الاستجابة للضغط على زر وتغيير محتوى الصفحة.",
      "const message = \"Hello CODEX\";\nconsole.log(message);",
      "أكمل تعريف متغير ثابت:\n_____ greeting = \"Hello\";",
      [
        "const",
        "style",
        "return"
      ],
      0,
      "أكمل تعريف المتغير:\n_____ site = \"CODEX\";",
      "const",
      "const"
    ],
    [
      "المتغيرات",
      "المتغير مكان لتخزين قيمة. let يسمح بتغيير القيمة، أما const فيستخدم لقيمة لن نعيد إسنادها.",
      "let score = 0;\nscore = 10;\nconst name = \"Ali\";",
      "أكمل تعريف متغير قابل للتغيير:\n_____ score = 10;",
      [
        "const",
        "let",
        "if"
      ],
      1,
      "أكمل تعريف المتغير:\n_____ points = 20;",
      "let",
      "let"
    ],
    [
      "الشروط",
      "if تنفذ كودًا عندما يكون الشرط صحيحًا. ويمكن إضافة else للحالة الأخرى.",
      "const age = 18;\nif (age >= 18) {\n  console.log(\"Adult\");\n}",
      "أكمل بداية الشرط:\n_____ (score >= 50) {\n  console.log(\"Passed\");\n}",
      [
        "for",
        "if",
        "const"
      ],
      1,
      "أكمل بداية الشرط:\n_____ (age >= 13) {\n  console.log(\"Ready\");\n}",
      "if",
      "if"
    ],
    [
      "الدوال",
      "الدالة مجموعة تعليمات نكتبها مرة ونستدعيها عند الحاجة. يمكنها استقبال مدخلات وإرجاع نتيجة.",
      "function greet(name) {\n  return \"Hello \" + name;\n}",
      "أكمل تعريف الدالة:\n_____ add(a, b) {\n  return a + b;\n}",
      [
        "function",
        "let",
        "print"
      ],
      0,
      "أكمل تعريف الدالة:\n_____ greet() {\n  return \"Hi\";\n}",
      "function",
      "function"
    ],
    [
      "الأحداث",
      "الأحداث تجعل الصفحة تستجيب لتصرفات المستخدم. click مثلًا يحدث عند الضغط على عنصر.",
      "button.addEventListener(\"click\", () => {\n  alert(\"Clicked!\");\n});",
      "أكمل اسم الحدث عند الضغط:\nbutton.addEventListener(\"_____\", () => {\n  console.log(\"Clicked\");\n});",
      [
        "hover",
        "click",
        "scroll"
      ],
      1,
      "أكمل الحدث:\nbutton.addEventListener(\"_____\", () => {});",
      "click",
      "click"
    ]
  ],
  "python": [
    [
      "ما هي Python؟",
      "Python لغة برمجة متعددة الاستخدامات، وتشتهر بوضوح كتابتها. نستخدمها في تطبيقات ومشاريع كثيرة.",
      "print(\"Hello CODEX\")",
      "أكمل أمر الطباعة:\n_____(\"Hello CODEX\")",
      [
        "print",
        "echo",
        "show"
      ],
      0,
      "أكمل أمر الطباعة:\n_____(\"Welcome\")",
      "print",
      "print"
    ],
    [
      "المتغيرات",
      "المتغير يخزن قيمة. في Python لا تحتاج لكتابة نوع المتغير بشكل صريح في المثال البسيط.",
      "name = \"Mona\"\nscore = 10",
      "أكمل إسناد القيمة للمتغير:\nscore _____ 10",
      [
        "==",
        "=",
        "=>"
      ],
      1,
      "أكمل السطر:\nlevel _____ 1",
      "=",
      "="
    ],
    [
      "أنواع البيانات",
      "من الأنواع الأساسية: النص str، العدد الصحيح int، والعدد العشري float، والقيمة المنطقية bool.",
      "name = \"Ali\"\nage = 17\nprice = 2.5\nactive = True",
      "أكمل قيمة Boolean الصحيحة:\nactive = _____",
      [
        "\"True\"",
        "17",
        "True"
      ],
      2,
      "أكمل القيمة المنطقية:\nis_ready = _____",
      "True",
      "True"
    ],
    [
      "الشروط",
      "نستخدم if لاختبار شرط، ونضع نقطتين بعدها ثم نكتب الكود الداخلي بمسافة بادئة.",
      "if score >= 50:\n    print(\"Passed\")",
      "أكمل بداية الشرط:\n_____ temperature > 30:\n    print(\"Hot\")",
      [
        "if",
        "for",
        "def"
      ],
      0,
      "أكمل الشرط:\n_____ score >= 50:\n    print(\"Passed\")",
      "if",
      "if"
    ],
    [
      "الحلقات",
      "حلقة for تكرر تنفيذ مجموعة تعليمات على عناصر أو نطاق من القيم.",
      "for number in range(3):\n    print(number)",
      "أكمل حلقة التكرار:\n_____ number in range(3):\n    print(number)",
      [
        "if",
        "for",
        "while"
      ],
      1,
      "أكمل الحلقة:\n_____ item in range(3):\n    print(item)",
      "for",
      "for"
    ]
  ]
};
