---
eleventyComputed:
    myItem:
        foo: newFooValue
        bar: newBarValue
title: Post 3
---
## Front Matter for {{ title }}

    ---
    eleventyComputed:
        myItem:
            foo: newFooValue
            bar: newBarValue
    title: Post 3
    ---

{% include "data.njk" %}

## Results

The data *is* successfully overridden.
I'm guessing it works because the front matter in this post uses `eleventyComputed`.
