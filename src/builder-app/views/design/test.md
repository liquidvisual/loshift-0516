---
---

### Tool Button

<!-- { % capture my-include % } { % include test.md % }{ % endcapture % } -->
<!-- { { my-include | markdownify } } -->

This defines the standalone stylesheet for [Foundation](http://foundation.zurb.com). Foundation comes with clean defaults for typography, spacing, forms and other base components.

```html
<div class="lv-super">
    <div class="lv-page">
        <ul>
            <li><a class="lv-button">hello</a></li>
            <li><a class="lv-button">hello</a></li>
            <li><a class="lv-button">hello</a></li>
        </ul>
        {% raw %}{{ content }}{% endraw %}
    </div> <!-- .lv-page -->
</div> <!-- .lv-super -->
```

<br>

<a class="lv-button">hello</a><a class="lv-button">hello</a><a class="lv-button">hello</a>

---

### Shell

```css
.lv-button {
    outline: none;
    transition: background-color .10s linear;
    display: inline-block;
    padding: rem-calc(4 12);
    margin: rem-calc(5);
    background: $lvb-button-color;
    // background: none;
    // border: 0 !important;
    font-size: rem-calc(14);
    color: desaturate(darken($lvb-button-color, 35%), 20%);
    border-radius: 3px; //$global-radius;
    border: 1px solid darken($lvb-button-color, 2%);
    border-bottom: 2px solid darken($lvb-button-color, 5%);
    box-shadow: 0 1px 0px rgba(0,0,0,0.04);
    // box-shadow: inset 0 1px 0px lighten($lvb-button-color, 2%), 0 1px 0px rgba(0,0,0,0.04);

    i {
        position: relative;
        top: 2px;
        height: 100%;
        font-size: rem-calc(20);
        line-height: 0;
    }

    &:hover {
        background: lighten($lvb-button-color, 2%);
        border-color: darken($lvb-button-color, 1%);
        border-bottom: 2px solid darken($lvb-button-color, 5%);
        // box-shadow: inset 0 1px 0px lighten($lvb-button-color, 0%), 0 1px 0px rgba(0,0,0,0.04);
    }

    &:active {
        position: relative;
        top: 1px;
        box-shadow: none;//0 1px 0px rgba(0,0,0,0.04);
        border-bottom-width: 1px;
        transform: scale(0.99);
    }
}
```


### Tool Button

This defines the standalone stylesheet for [Foundation](http://foundation.zurb.com). Foundation comes with clean defaults for typography, spacing, forms and other base components.

```html
<div class="lv-super">
    <div class="lv-page">
        <ul>
            <li><a class="lv-button">hello</a></li>
            <li><a class="lv-button">hello</a></li>
            <li><a class="lv-button">hello</a></li>
        </ul>
        {% raw %}{{ content }}{% endraw %}
    </div> <!-- .lv-page -->
</div> <!-- .lv-super -->
```

<br>

<a class="lv-button">hello</a><a class="lv-button">hello</a><a class="lv-button">hello</a>

---

### Shell

```css
.lv-button {
    outline: none;
    transition: background-color .10s linear;
    display: inline-block;
    padding: rem-calc(4 12);
    margin: rem-calc(5);
    background: $lvb-button-color;
    // background: none;
    // border: 0 !important;
    font-size: rem-calc(14);
    color: desaturate(darken($lvb-button-color, 35%), 20%);
    border-radius: 3px; //$global-radius;
    border: 1px solid darken($lvb-button-color, 2%);
    border-bottom: 2px solid darken($lvb-button-color, 5%);
    box-shadow: 0 1px 0px rgba(0,0,0,0.04);
    // box-shadow: inset 0 1px 0px lighten($lvb-button-color, 2%), 0 1px 0px rgba(0,0,0,0.04);

    i {
        position: relative;
        top: 2px;
        height: 100%;
        font-size: rem-calc(20);
        line-height: 0;
    }

    &:hover {
        background: lighten($lvb-button-color, 2%);
        border-color: darken($lvb-button-color, 1%);
        border-bottom: 2px solid darken($lvb-button-color, 5%);
        // box-shadow: inset 0 1px 0px lighten($lvb-button-color, 0%), 0 1px 0px rgba(0,0,0,0.04);
    }

    &:active {
        position: relative;
        top: 1px;
        box-shadow: none;//0 1px 0px rgba(0,0,0,0.04);
        border-bottom-width: 1px;
        transform: scale(0.99);
    }
}
```