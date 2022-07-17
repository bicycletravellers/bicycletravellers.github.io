---
layout: post
category: travellers
title: List of Bicycle Travellers
description: This is a list of long-distance bicycle touring or bikepacking people.
h1_title: List of Bicycle Travellers
short_text: There are thousands of people travelling by bicycle, whether in the country, or around the world. Whether they call it bike touring, or bikepacking. This is an incomplete list of bicycle travellers. If you know someone who is travelling or travelled by bicycle, add them here.
#img: http://full.link/image.png
#img_caption: caption
isTopLevel: true
isSingleLevel: false
isArticle: false
datePublished: 2018-11-11 11:00:00 +0300
dateModified: 2018-11-11 11:00:00 +0300
permalink: /travellers/
sitemap: false
---

<div class="clearfix">
	<details>
		<summary class="green_bg text-center">Submit a new traveller</summary>

		<form class="add_traveller_form" data-app = "false">
			<small>None of the fields are required.</small>
			<p>
				<label>Traveller Name (or Alias)</label>
				<input name="traveller_alias" type="text">
			</p>
			<p>
				<label>
					<img style="width: 26px; margin-top:4px; margin-right:8px" class = "fl" src = "/images/facebook.png">
					Facebook Page
					<input name="traveller_facebook" type="text" onblur="check_traveller('facebook',this)">
					<small style="color:darkorange; display:none">This facebook page is already in the database.</small>
				</label>
			</p>
			<p>
				<label>
					<img style="width: 26px; margin-top:4px; margin-right:8px" class = "fl" src = "/images/instagram.png">
					Instagram Profile
					<input name="traveller_instagram" type="text" onblur="check_traveller('instagram',this)">
					<small style="color:darkorange; display:none">This instagram account is already in the database.</small>
				</label>
			</p>
			<p>
				<label>
					<img style="width: 26px; margin-top:4px; margin-right:8px" class = "fl" src = "/images/youtube.png">
					YouTube Channel
					<input name="traveller_youtube" type="text" onblur="check_traveller('youtube',this)">
					<small style="color:darkorange; display:none">This youtube channel is already in the database.</small>
				</label>
			</p>
			<p class="ytc">
			</p>
			<p>
				<label>
					<img style="width: 26px; margin-top:4px; margin-right:8px" class = "fl" src = "/images/web.png">
					Website Address
					<input name="traveller_website" type="text" onblur="check_traveller('website',this)">
					<small style="color:darkorange; display:none">This website address is already in the database.</small>
				</label>
			</p>
			<p>
				<label>
					Introduction
					<textarea name="traveller_description" cols="45" rows="4" maxlength="65525"></textarea>
				</label>
			</p>
			<p>
				<label>Cover image for the traveller</label>
				<div class = "drop-area dropable pastable text-center">
					<small class="clearfix dropable pastable">Select from the device, drag & drop, or paste from clipboard.</small>
					<label class="button-block dropable pastable button-primary">
						<input type="file" class = "traveller_image_file" accept="image/*">
						Select from the device
					</label>
					<img class = "traveller_image wnot dropable pastable" style="display:block; margin:10px auto; max-width:100%" />
				</div>
			</p>
			<p>
				<small>
					Only featured travellers are eligible for donations and sponsorships.
				</small>
				<label class="checkbox_container" style = "font-size:18px">
					This is my profile and I want to be featured on Bicycle Travellers
					<input type="checkbox" onclick = "this.parentNode.parentNode.nextElementSibling.classList.toggle('hidden')"><span class="checkmark"></span>
				</label>
			</p>
			<p class = "hidden">
				<label>
					Enter your email address
					<input name="traveller_email" type="email" autocomplete = "email">
				</label>
			</p>
			<p>
				<input name="submit" type="submit" class="button-block button-primary" value="Send for approval">
			</p>
		</form>
	</details>
</div>

<hr/>

<div class="clearfix">
	<h2>Featured Travellers</h2>
  {% assign featured_travellers = site.travellers | where: "featured", true %}
  {% for post in featured_travellers %}
    <a class = "no-decoration" href = "/{{post.category}}/{{post.slug}}.html">
      <div class="column traveller_column">
        <img loading="lazy" src = "{{ post.img }}" alt = "{{ post.title }}"  class="cover_image lazyload" />

        <div class = "list-container">
        <div class = "small-title truncate">{{post.title}}</div>
        <div class = "truncate" style = "margin-right:8px; padding: 2px 0;clear:both;">
			<img style="width: 26px; margin-right:8px" class = "fl" src = "/images/instagram.png">
			<span class = "instagram_collection">{{post.instagram}}</span>
		</div>
        <div class = "truncate" style = "margin-right:8px; padding: 2px 0;clear:both;">
			<img style="width: 26px; margin-right:8px" class = "fl" src = "/images/youtube.png">
			<span class = "youtube_collection">{{post.youtube}}</span>
		</div>
        <div class = "truncate" style = "margin-right:8px; padding: 2px 0;clear:both;">
			<img style="width: 26px; margin-right:8px" class = "fl" src = "/images/facebook.png">
			<span class = "facebook_collection">{{post.facebook}}</span>
		</div>
        <div class = "truncate" style = "margin-right:8px; padding: 2px 0;clear:both;">
			<img style="width: 26px; margin-right:8px" class = "fl" src = "/images/web.png">
			<span class = "website_collection" style="color:blue">{{post.website}}</span>
		</div>
       </div>
      </div>
    </a>
  {% endfor %}
</div>

<hr/>

<div class="clearfix">
	<h2>Other Travellers</h2>
  {% assign featured_travellers = site.travellers | where: "featured", false %}
  {% for post in featured_travellers %}
    <a class = "no-decoration" href = "/{{post.category}}/{{post.slug}}.html">
        <div style="border: 1px solid #dbdbdb; display: flow-root; padding: 4px 8px; margin-bottom:8px;   line-height: 20px;">
        <div class = "small-title text-center">{{post.title}}</div>
				<div class="responsive-quarter truncate">
					<img style="width: 20px; margin-right:8px" class = "fl" src = "/images/instagram.png">
					<span>{{post.instagram}}</span>
				</div>
				<div class="responsive-quarter truncate">
					<img style="width: 20px; margin-right:8px" class = "fl" src = "/images/youtube.png">
					<span>{{post.youtube}}</span>
				</div>
				<div class="responsive-quarter truncate">
					<img style="width: 20px; margin-right:8px" class = "fl" src = "/images/facebook.png">
					<span>{{post.facebook}}</span>
				</div>
				<div class="responsive-quarter truncate">
					<img style="width: 20px; margin-right:8px" class = "fl" src = "/images/web.png">
					<span style="color:blue">{{post.website}}</span>
				</div>
		</div>
    </a>
  {% endfor %}
</div>

<div id = "waiting_travellers">
</div>

<script>
	var worker = "{{site.worker}}";


	document.addEventListener('DOMContentLoaded', function(){
		init_traveller_list();
	}, false);




	let dropArea = document.getElementsByClassName("drop-area");
	let traveller_image_file = document.getElementsByClassName("traveller_image_file");



	;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
		document.body.addEventListener(eventName, preventDefaults, false);
	});

	function preventDefaults (e) {
	  e.preventDefault();
	}

	document.addEventListener('drop',function(e){
		if(e.target && e.target.classList.contains('dropable')){
			handleDrop(e);
		}
	});

	document.addEventListener('paste',function(e){
		if(e.target && e.target.classList.contains('pastable')){
			handlePaste(e);
		}
	});

	document.addEventListener('change',function(e){
		if(e.target && e.target.classList.contains('traveller_image_file')){
			handleClick(e);
		}
	});


	function handleClick(e) {
		previewFile(e.target.files[0], e.target);
	}

	function handleDrop(e) {
	  var dt = e.dataTransfer;
	  var files = dt.files;
		previewFile(files[0],e.target);
	}

	function handlePaste(e) {
		var IMAGE_MIME_REGEX = /^image\/(p?jpeg|gif|png)$/i;
		var items = e.clipboardData.items;

		for (var j = 0; j < items.length; j++) {
			if (IMAGE_MIME_REGEX.test(items[j].type)) {
				var file = items[j].getAsFile();
				previewFile(file,e.target);
				return;
			}
		}
		
	   e.PreventDefault();
	}


	function previewFile(file, target) {
	  let reader = new FileReader();
	  reader.readAsDataURL(file);
	  reader.onloadend = function() {
		target.closest(".drop-area").querySelector("img").src = reader.result;
	  }
	}





	document.addEventListener('submit',function(e){
		if(e.target && e.target.classList.contains('add_traveller_form')){
			traveller_form_submit(e);
		}
	});

	  
	function traveller_form_submit(e){
		e.preventDefault();
		var form = e.target;
		var submit = form.querySelector('input[type="submit"]');
		submit.setAttribute("disabled", "disabled");
		
		const data = new URLSearchParams();
		for (const pair of new FormData(form)) {
			data.append(pair[0], pair[1]);
		}
		
		data.append("img", getDataUrl(form.querySelector(".traveller_image"), 768, 1));

		fetch(worker+"/?job=submit_traveller", {
			method: 'post',
			body: data,
			headers: {
			  'Accept': 'application/json',
			  'Content-Type': 'application/x-www-form-urlencoded'
			},
		}).then(function(response){
			response.json().then(function(response){
				if(response.success){
					submit.value = "Success!";
					submit.classList.add('button-success');
					submit.classList.remove('button-primary');
					form.querySelector(".traveller_image").src = "";
					form.reset();

					setTimeout(function(){
						submit.removeAttribute("disabled");
						submit.value = "Send for approval";
						submit.classList.remove('button-success');
						submit.classList.add('button-primary');
					},5000);
				}else{
					submit.removeAttribute("disabled");
					alert("An error occurred. " + response.error);
				}
			})
		});
	}

	function getDataUrl(img, res, quality) {
		var canvas = document.createElement("canvas");
		var ctx = canvas.getContext("2d");
		var ratio = img.naturalWidth / img.naturalHeight;
		
		var width = res;
		var height = width / ratio;

		canvas.width = width;
		canvas.height = height;
		
		ctx.fillStyle = "white";
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		
		ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
		dataURI = canvas.toDataURL('image/jpeg', quality);

		ctx.clearRect(0, 0, canvas.width, canvas.height);
		
		delete canvas;
		
		return dataURI;
	}
		
	var collections = {"website":[],"facebook":[],"youtube":[],"instagram":[]};

	function init_traveller_list(){
		for (let item of document.getElementsByClassName("instagram_collection")) { collections["instagram"].push(item.innerHTML); }
		for (let item of document.getElementsByClassName("youtube_collection")) { collections["youtube"].push(item.innerHTML); }
		for (let item of document.getElementsByClassName("facebook_collection")) { collections["facebook"].push(item.innerHTML); }
		for (let item of document.getElementsByClassName("website_collection")) { collections["website"].push(new URL(item.innerHTML).hostname); }
	}
		
	function check_traveller(media, el){
		if(collections[media].includes(media=="website"?new URL(normalize_url(el.value)).hostname:el.value)){
			el.nextElementSibling.style.display="block";
		}else{
			el.nextElementSibling.style.display="none";
		}
	}

	function normalize_url(url){
		if (url.substring(url.length-1) == "/"){
			url = url.substring(0, url.length-1);
		}
		
		if (url.indexOf("http://") == 0 || url.indexOf("https://") == 0) {
			return url;
		}else{
			return "http://"+url;
		}
	}

</script>