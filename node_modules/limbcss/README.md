# LimbCss

Free and opensource components based on TailwindCSS

# Install now!

---

`npm i limbcss`

Then add limbcss to your `tailwind.config.js:`:

```
module.exports = {
  plugins: [require("limbcss")],
};
```

# Navbar

---

if you want dropdown on hover in large device and click on mobile device, add `dropdown-container-mobile lg:dropdown-container-dekstop` on dropdown container

if you want dropdown on hover in both large and mobile device, add `dropdown-container-dekstop` on dropdown container

then add `dropdown` on dropdown items container

```
<nav className="bg-slate-200 navbar">
  <div className="container mx-auto lg:navbar-container relative">
    <a href="#">LOGO</a>
      <label
        for="toggle-btn"
        className="toggle-btn-responsive lg:toggle-btn"
      >
        &#8801;
      </label>
      <input id="toggle-btn" type="checkbox" hidden />
      <div className="navbar-responsive lg:navbar-desktop">
        <ul>
          <li
            tabIndex={0}
            className="dropdown-container-mobile lg:dropdown-container-dekstop"
          >
            <a>Home</a>
              <div className="dropdown bg-slate-200   ">
                <ol>
                  <li>
                    <a>Home One</a>
                  </li>
                  <li>
                    <a>Home Two</a>
                  </li>
                  <li>
                    <a>Home Three</a>
                  </li>
                </ol>
              </div>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Service</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
        <div>
          <button className="b-btn b-btn-primary mx-1">Click</button>
          <button className="b-btn b-btn-success  mx-1">Click</button>
        </div>
      </div>
  </div>
</nav>
```

# Dropdown

---

if you want dropdown on hover in large device and click on mobile device, add `dropdown-container-mobile lg:dropdown-container-dekstop` on dropdown container

if you want dropdown on hover in both large and mobile device, add `dropdown-container-dekstop` on dropdown container

then add `dropdown` on dropdown items container

```
<button
  tabIndex={0}
  className="b-btn b-btn-primary dropdown-container-mobile"
>
  Dropdown
    <div className="dropdown bg-slate-200 text-black">
      <ol>
        <li>
          <a>Drop One</a>
        </li>
        <li>
          <a>Drop Two</a>
        </li>
        <li>
          <a>Drop Three</a>
        </li>
      </ol>
    </div>
</button>
```

# Mansory Layout

---

If you want to change layout just change `columns` on parent div

```
<div className="columns-2 md:columns-3 lg:columns-3">
        <div className="mb-4">
          <img
            class="w-full rounded-md mb-4"
            src="https://source.unsplash.com/random/18"
          />
        </div>
        <img
          class="w-full rounded-md mb-4"
          src="https://source.unsplash.com/random/2"
        />
        <img
          class="w-full rounded-md mb-4"
          src="https://source.unsplash.com/random/4"
        />
        <div className="mb-4">
          <img
            class="w-full rounded-md mb-4"
            src="https://source.unsplash.com/random/34"
          />
        </div>
        <img
          class="w-full rounded-md mb-4"
          src="https://source.unsplash.com/random/15"
        />
        <div className="h-96 bg-purple-500 mb-4">
          <h1 className="text-center p-5 text-2xl font-bold">
            You can write anything here
          </h1>
        </div>
        <div className="h-96 bg-green-500 mb-4">
          <h1 className="text-center pt-5 text-2xl font-bold">
            You can design whatever you want
          </h1>
        </div>
        <img
          class="w-full rounded-md mb-4"
          src="https://source.unsplash.com/random/45"
        />
        <img
          class="w-full rounded-md mb-4"
          src="https://source.unsplash.com/random/43"
        />
        <img
          class="w-full rounded-md mb-4"
          src="https://source.unsplash.com/random/20"
        />
        <div className="h-96 bg-blue-500 mb-4">
          <h1 className="text-center p-5 text-2xl font-bold">
            You can make any animation here
          </h1>
        </div>
        <img
          class="w-full rounded-md mb-4"
          src="https://source.unsplash.com/random/22"
        />
        <div className="h-96 bg-purple-500 mb-4">
          <img
            class="w-full rounded-md mb-4"
            src="https://source.unsplash.com/random/53"
          />
        </div>
      </div>

```
