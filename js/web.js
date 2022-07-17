---
---

function waiting_travellers(){
	fetch(worker+"/?job=get_waiting_travellers", {
		method: 'get',
		headers: {
		  'Accept': 'application/json',
		}
	}).then(function(response){
		response.json().then(function(response){
			response.forEach(function (item, key) {
				var original = document.getElementsByClassName("add_traveller_form")[0];
				var clone = original.cloneNode(true);
				clone.style = "padding:8px;border:2px solid lightgrey;margin-top:100px;";
				clone.querySelector('input[name="traveller_alias"]').value = item.traveller_alias;
				clone.querySelector('input[name="traveller_email"]').value = item.traveller_email;
				clone.querySelector('input[type="checkbox"]').click();
				clone.querySelector('input[name="traveller_facebook"]').value = item.traveller_facebook;
				clone.querySelector('input[name="traveller_instagram"]').value = item.traveller_instagram;
				clone.querySelector('input[name="traveller_website"]').value = item.traveller_website;
				clone.querySelector('input[name="traveller_youtube"]').value = item.traveller_youtube;
				clone.querySelector('textarea[name="traveller_description"]').innerText = item.traveller_description;
				clone.querySelector('img.traveller_image').src = item.img=='data:,'?'':item.img;
				clone.querySelector('input[name="submit"]').remove();
				
				var yt_param = document.createElement("input");
				yt_param.setAttribute("type", "text");
				yt_param.setAttribute("name", "traveller_youtube_parameter");
				yt_param.setAttribute("placeholder", "channel or c");
				clone.querySelector('p.ytc').appendChild(yt_param);
				
				var approve = document.createElement("input");
				approve.value = "Approve";
				approve.setAttribute("class", "btnApprove button-block button-primary");
				approve.setAttribute("type", "button");
				approve.dataset.key = item.key;
				clone.appendChild(approve);
				
				var reject = document.createElement("input");
				reject.value = "Reject";
				reject.setAttribute("class", "btnReject button-block button-error");
				reject.setAttribute("type", "button");
				reject.dataset.key = item.key;
				clone.appendChild(reject);
				document.getElementById("waiting_travellers").appendChild(clone);
			});
		})
	});
}


document.addEventListener('click',function(e){
	if(e.target && e.target.classList.contains('btnReject')){
		var btn = e.target;
		btn.setAttribute("disabled", "disabled");
		
		fetch(worker+"/?job=kvdb&action=del&key=" + e.target.dataset.key)
		.then(function(response){
			response.json()
			.then(function(response){
				if(response.success){
					btn.closest(".add_traveller_form").remove();
				}else{
					btn.removeAttribute("disabled");
					alert("An error occurred. "+ response.error);
				}
			})
		});
	}
});

	
	
document.addEventListener('click',function(e){
	if(e.target && e.target.classList.contains('btnApprove')){
		if(!token){alert("token"); return;}
		
		var btn = e.target;
		btn.setAttribute("disabled", "disabled");
		
		var uid = e.target.dataset.key.split(":")[1];

		var traveller_alias = btn.parentElement.querySelector('input[name="traveller_alias"]').value;
		var traveller_email = btn.parentElement.querySelector('input[name="traveller_email"]').value;
		var traveller_facebook = btn.parentElement.querySelector('input[name="traveller_facebook"]').value;
		var traveller_instagram = btn.parentElement.querySelector('input[name="traveller_instagram"]').value;
		var traveller_website = btn.parentElement.querySelector('input[name="traveller_website"]').value;
		var traveller_youtube = btn.parentElement.querySelector('input[name="traveller_youtube"]').value;
		var traveller_youtube_parameter = btn.parentElement.querySelector('input[name="traveller_youtube_parameter"]').value;
		var traveller_description = btn.parentElement.querySelector('textarea[name="traveller_description"]').value;
		
		var image = getDataUrl(btn.parentElement.querySelector(".traveller_image"), 768, 1).split("base64,")[1];
		
		git_put_file("images/travellers/"+uid+"/" + uid + ".jpg", image).then(function(gitResp){
			if(typeof gitResp.content !== 'undefined'){
				var image_url = gitResp.content.download_url.replace("{{site.gitget}}","{{site.url}}/");
				var iso_date = new Date(Date.now()).toISOString();

				var markdown = '---\n' +
				'layout: profile\n' +
				'category: travellers\n' +
				'title: "'+traveller_alias+'"\n' +
				'description: "'+traveller_description+'"\n' +
				'h1_title: "'+traveller_alias+'"\n' +
				'short_text: "'+traveller_description+'"\n' +
				'img: "'+image_url+'"\n' +
				'#img_caption: caption\n' +
				'isTopLevel: false\n' +
				'isSingleLevel: false\n' +
				'isArticle: false\n' +
				'datePublished: '+iso_date+'\n' +
				'dateModified: '+iso_date+'\n' +
				'#permalink: /category/slug.html\n' +
				'instagram: "'+traveller_instagram+'"\n' +
				'facebook: "'+traveller_facebook+'"\n' +
				'youtube: "'+traveller_youtube+'"\n' +
				'youtube_parameter: "'+traveller_youtube_parameter+'" # c or channel\n' +
				'website: "'+traveller_website+'"\n' +
				'email: "'+traveller_email+'"\n' +
				'featured: false\n' +
				'---\n';
				
				b64e(markdown).then(function(b64file){
					git_put_file("_travellers/" + uid + ".md", b64file).then(function(gitResp){
						if(typeof gitResp.content !== 'undefined'){
							fetch(worker+"/?job=kvdb&action=del&key=" + e.target.dataset.key)
							.then(function(response){
								response.json()
								.then(function(response){
									if(response.success){
										btn.closest(".add_traveller_form").remove();
									}else{
										btn.removeAttribute("disabled");
										alert("An error occurred. "+ response.error);
									}
								})
							});
						}else{
							respJson = {
								"success" : 0,
								"error": "markdown_upload_failed",
								"git_resp": gitResp
							};
							console.error(respJson);
						}
					});
				});
				
			}else{
				respJson = {
					"success" : 0,
					"error": "image_upload_failed",
					"git_resp": gitResp
				};
				console.error(respJson);
			}
		});
		
		
	}
});


async function b64e(data) {
	var blob = new Blob([data],{type : 'text/html'});
    let result_base64 = await new Promise((resolve) => {
        let fileReader = new FileReader();
        fileReader.onload = (e) => resolve(fileReader.result.split("base64,")[1]);
        fileReader.readAsDataURL(blob);
    });
    return result_base64;
}


async function git_put_file(full_path, file_b64){
	var gitput = "{{site.gitput}}";
	
	let body = {
		"content": file_b64
	}
	
	const request_info = {
		body: JSON.stringify(body),
		method: 'PUT',
		headers: {
			'content-type': 'application/json;charset=UTF-8'
		},
	}
	
	var github_resp = await fetch(gitput + full_path, request_info)
	return await github_resp.json()
}

var token = "";
async function git_put_file___________o(full_path, file_b64){
	var gitput = "{{site.gitput}}";
	var gitput = "https://api.github.com/repos/bicycletravellers/bicycletravellers.github.io/contents/";
	
	let body = {
		"message":"commit",
		"content": file_b64,
		"committer": {
			"name":"bicycletravellers",
			"email":"81257909+bicycletravellers@users.noreply.github.com"
		}
	}
	
	
	var github_resp = await fetch(gitput + full_path, { headers: { 'content-type': 'application/json;charset=UTF-8', 'user-agent': 'cf-worker' } } )
    var github_resp = await github_resp.json()

	if(typeof github_resp.sha !== 'undefined'){
		body.sha = github_resp.sha
	}
	
	const request_info = {
		body: JSON.stringify(body),
		method: 'PUT',
		headers: {
			'Authorization': 'Bearer ' + token,
			'content-type': 'application/json;charset=UTF-8',
			'user-agent': 'cf-worker'
		},
	}
	

	var github_resp = await fetch(gitput + full_path, request_info)
	return await github_resp.json()
}
