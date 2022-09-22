---
eleventyExcludeFromCollections: true
layout: base.njk
title: Overriding eleventyComputed Data In Front Matter
---
<nav>
{% for post in collections.all %}

- [{{post.data.title}}]({{post.url}})

{% endfor %}
</nav>
