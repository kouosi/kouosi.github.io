+++
date = '2024-12-21T18:15:12+05:45'
draft = true
title = 'This is very very long title and it will be'
author = "Inogen Limbu"
description = 'Test code for all elements'
tags = ["test", "code", "void"]
keywords = ["posts", "test", "code"]
commentsec = true
+++


## Heading 2
### Heading 3
#### Heading 4
##### Heading 5



## Text Decoration
- *This is Italic*
- **This is Bold**
- ___This is Bold and italic___
- ~~This is deleated~~




## Quote & footnote
>This is block quote
>Neasted
    >Neasted block quote

- This is Footnote text 1. [^1]
- This is Footnote text 2. [^2]

[^1]: This is the footnote 1.
[^2]: This is the footnote 2.



## Lists
### Unordered
- This is unordered list 1
- This is unordered list 2
- This is unordered list 3
### Ordered
1. This is ordered list 1
1. This is ordered list 2
1. This is ordered list 3
### Checkbox
- [ ] This is to be done
- [x] This is completed
### DD list
term
: definition




## Media
### Link
- [test link](https://example.org)
### Image
![alt text](http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg)
### Video
{{<raw-html>}}
<video controls>
    <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4">
    Your browser does not support HTML video.
</video>
{{</raw-html>}}

### Video embeed
{{<raw-html>}}
<iframe height="569" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Rick Astley - Never Gonna Give You Up (Official Music Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
{{</raw-html>}}



## Table
| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |


## Code Formatting Test

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
