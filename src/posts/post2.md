---
myItem:
    foo: newFooValue
    bar: newBarValue
title: Post 2
---
## Front Matter for {{ title }}

    ---
    myItem:
        foo: newFooValue
        bar: newBarValue
    title: Post 2
    ---

{% include "data.njk" %}

## Results

The data is *not* overridden. I assume this is due to greater precedence for `eleventyComputed` data in the cascade.
