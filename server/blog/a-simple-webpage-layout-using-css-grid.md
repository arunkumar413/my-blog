# A simple web page layout using CSS grid


Here is a simple and minimal code to quickly create a web page layout using CSS grid.

![web page layout using CSS grid ]()


The layout has a header, sidebar, main and a footer. It uses the css grid-template-columns property to divide the webpage into 12 columns of equal width using the `repeat(12,1fr)` value.

```css prettier
grid-template-columns: repeat(12, 1fr);

```

Each section (header, sidebar, main, footer) of the layout is assigned specific columns using grid-column property. For example: `grid-column:1/13` tells the grid to place the item on the column 1 line and end at the start of the column 13 line. So it occupies 12 columns.

Similarly `grid-column/1/3` on the sidebar element tells the grid to allocate the columns from 1 to 2.

The `grid-template-rows:auto 1fr` autoproperty creates 3 rows. The first and third `auto` value is for the `header` and `footer` elements to auto size based on their inner content. Whereas `1fr` automatically allocates the remaining row space for the `main` element.

Below is the complete code and here is the link to the codesandbox 
[https://codesandbox.io/embed/3cwcxq?view=Editor+%2B+Preview&module=%2Fsrc%2FApp.js](https://codesandbox.io/embed/3cwcxq?view=Editor+%2B+Preview&module=%2Fsrc%2FApp.js)



### HMTL 

```html prettier

<!-- HTML grid layout element-->
    <div className="App">
      <header> Header </header>
      <aside> Sidebar </aside>
      <main> Main content </main>
      <footer> Footer </footer>
    </div>

```
---

### CSS

```css prettier

  /* CSS style for the grid*/

.App {
  font-family: sans-serif;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto 1fr auto;
  height: 100vh;
  gap: 1rem;
  background-color: #f3f6fc;
}

header {
  grid-column: 1/13;
}

aside {
  grid-column: 1/3;
}

main {
  grid-column: 3/13;
}

footer {
  grid-column: 1/13;
}

header,
aside,
main,
footer {
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: white;
  border-radius: 0.5rem;
  padding: 1rem;
  font-size: 2rem;
}

```

Hope you enjoyed this simple and easy to digest CSS recipe!