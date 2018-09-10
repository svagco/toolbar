
## API

The package is available by importing its default function:

```js
import toolbar from '@svag/toolbar'
```

```### toolbar
[
  ["options", "ToolbarOptions"]
]
```

Generate a part of the `SVG` which represents a macOS toolbar.

%TYPEDEF types/index.xml%

%EXAMPLE: example/example.js, ../src => @svag/toolbar%

%FORK-svg example example/example.js%

<img alt="Toolbar with a title." src="https://raw.github.com/svagco/toolbar/master/images/toolbar.svg?sanitize=true">

To generate a toolbar [without a title](t), the `title` option can be omitted.

%EXAMPLE: example/no-title.js, ../src => @svag/toolbar%

%FORK-svg example example/no-title.js%

<img alt="Toolbar without a title." src="https://raw.github.com/svagco/toolbar/master/images/no-title.svg?sanitize=true">
