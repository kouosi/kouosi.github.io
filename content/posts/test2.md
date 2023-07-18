---
title: "Syntax Highlighting Test"
date: 2023-06-28T17:02:56+05:45
author: "Kouosi Tsuamine"
tags: ["test", "code", "void"]
nextprev: true
---

### index.html
```html
<!DOCTYPE html>
<!--comment -->
<html>
    <head>
        <title>Hello World</title>
    </head>
<body>
    <p>Hello, World!</p>
</body>
</html>
```

### app.css
```css
/* Comment */
body {
  background-color: rgb(0, 64, 255);
}
p {
  color: white;
  text-align: center;
}
```

### app.js 
```js
// Comment
document.getElementById("main").innerHtml = "Hello, World!";
```

### main.c
```c
// Comment
#include <stdio.h>

int main() {
  printf("Hello, World!");
  return 0;
}
```

### main.cpp
```cpp
// Comment
#include <iostream>

int main() {
  std::cout << "Hello, World!";
  return 0;
}
```

### test.json
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "age": 13,
  "hobby": ["programmer", "gamer"]
}
```

### CMakelists.txt
```cmake
# Comment
cmake_minimum_required (VERSION 2.8.11)
project (HELLO)
add_subdirectory (Hello)
add_subdirectory (Demo)

```

### Makefile
```make
# Comment
hello:
	@echo "Hello, World"

```

### README.md
```md
<!-- Comment -->
# Thanks
```

### App.xml
```xml
<!-- Comment -->
<?xml version="1.0" encoding="UTF-8"?>
<note>
  <to>John Doe</to>
  <from>Gunic</from>
  <heading>Programming</heading>
  <body>Program</body>
</note>
```

### yand.sql
```sql
-- Comment
SELECT * FROM Students;
```

### script.sh
```bash
# Comment
sudo pacman -S hugo
```

### script.lua
```lua
-- Comment
print('Hello, world!')
```

### main.rs
```rust
fn main() {
    // Comment
    println!("Hello World!");
}
```