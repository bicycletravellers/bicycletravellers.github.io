---
layout: post
category: learn
title: LEARN
description: New to bike touring? Read these guides and articles to start your journey around the world by bicycle!
h1_title: LEARN
short_text: New to bike touring? Read these guides and articles to start your journey around the world by bicycle!
#img: http://full.link/image.png
#img_caption: caption
isTopLevel: true
isSingleLevel: false
isArticle: false
datePublished: 2018-11-11 11:00:00 +0300
dateModified: 2018-11-11 11:00:00 +0300
permalink: /learn/
---

{% for post in site.learn %}
{% capture posta %}{{post.category}}/{{post.slug}}{% endcapture %}
{% include post-list.html posts=posta %}
{% endfor %}