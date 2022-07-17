---
layout: post
category: gear
title: GEAR LAB
description: Don't know what gear to buy for your bike tour around the world? Couldn't decide whether to buy a mountain bike or a touring bike? Trouble choosing a tent? It's all here.
h1_title: GEAR LAB
short_text: Don't know what gear to buy for your bike tour around the world? Couldn't decide whether to buy a mountain bike or a touring bike? Trouble choosing a tent? It's all here.
#img: http://full.link/image.png
#img_caption: caption
isTopLevel: true
isSingleLevel: false
isArticle: false
datePublished: 2018-11-11 11:00:00 +0300
dateModified: 2018-11-11 11:00:00 +0300
permalink: /gear/
---

{% for post in site.gear %}
{% capture posta %}{{post.category}}/{{post.slug}}{% endcapture %}
{% include post-list.html posts=posta %}
{% endfor %}
