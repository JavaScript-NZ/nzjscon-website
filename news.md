---
layout: page
title: News
permalink: /news/
---

<ul class="post-list">
  {% for post in site.posts %}
  <li>
    <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>

    <h4>
      <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title | escape }}</a>
    </h4>
  </li>
  {% endfor %}
</ul>
