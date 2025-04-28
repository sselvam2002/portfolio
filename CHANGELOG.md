# ChangeLog

## Features
- [ ] for cleaner code managment done a separation into public directory
```js
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
```

- [ ] image render so that the routes work
```html
<div class="about-image animate-fadeInUp">
<img src="/shyamphoto.jpg" alt="Shyam Selvam" />
</div>
```

- [ ] Usage of self closing tags
```html
<div class="about-image animate-fadeInUp">
<img src="/shyamphoto.jpg" alt="Shyam Selvam" />
</div>
```

- [ ] Added font awesome to the css
```html
<link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
/>
```
- [ ] Added color scheme tokyo night.
Insiperd by this [website](https://lospec.com/palette-list/tokyo-night)

- [ ] Learned from node we dont pass the file in the html file
```html
<li><a href="/" class="active">Home</a></li>
<li><a href="/about">About</a></li>
<li><a href="/contact">Contact</a></li>
```

- [ ] Added the submit form
```js
app.post("/submit-form", (req, res) => {
    const username = req.body.username;
    res.send(`Username is $sselvam`);
});

```
- [ ] Corrected the get and post routing 

```js
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

```
