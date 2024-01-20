---
layout: post
#category: gerek yok
title: "Bicycle Touring and Bikepacking Community"
description: An adventure throughout life. Learn all about bicycle touring and bikepacking, and start your journey around the world.
h1_title: WELCOME TO THE<br> BICYCLE TRAVELLERS COMMUNITY!
short_text: An adventure throughout life. Learn all about bicycle touring and bikepacking, and start your journey around the world.
img: "/images/index/banner820.jpg"
#img_caption: caption
isTopLevel: true
isSingleLevel: true
isArticle: false
datePublished: 2018-11-11 11:00:00 +0300
dateModified: 2018-11-11 11:00:00 +0300
permalink: index.html
---

### Websites
<div class="clearfix">
    <a class = "no-decoration" href = "https://travellers.wiki/">Travellers.wiki</a>
</div>


### GUIDES and HOW-TO’s

{% for post in site.learn %}
{% capture posta %}{{post.category}}/{{post.slug}}{% endcapture %}
{% include post-list.html posts=posta %}
{% endfor %}


### BIKE TOURING EQUIPMENT

{% for post in site.gear %}
{% capture posta %}{{post.category}}/{{post.slug}}{% endcapture %}
{% include post-list.html posts=posta %}
{% endfor %}

