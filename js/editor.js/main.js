---
---
var worker = "{{site.worker}}";

$.ajaxSetup({ cache: false });

var md_path = window.location.hash.slice(1);
var js_path = "_data/" + md_path.replace(".md",".json");
var category_article = md_path.split('.').slice(0, -1).join('.');
if( category_article.charAt(0) == '_' ){
    category_article = category_article.slice( 1 )
}

alert(category_article);
var lower_markdown = "";

function fetch_article(){
	var gitget = "{{site.gitget}}";
	
	fetch(gitget + md_path)
		.then(
			function(raw){
				return raw.text()
			}
		).then(
			function(text){
				/* console.log(text); */
				if(text){
					$("#md").val(text);
				}else{
					$("#md").val('---\n' +
					'layout: post\n' +
					'category: \n' +
					'title: \n' +
					'description: \n' +
					'h1_title: \n' +
					'short_text: \n' +
					'img: ""\n' +
					'#img_caption: \n' +
					'isTopLevel: false\n' +
					'isSingleLevel: false\n' +
					'isArticle: true\n' +
					'datePublished: 2019-12-30 11:00:00 +0300\n' +
					'dateModified: 2022-05-12 11:00:00 +0300\n' +
					'#permalink: \n' +
					'---');
				}
					
			}
		);
	
	
	fetch(gitget + js_path)
		.then(
			function(raw){
				return raw.text();	
			}
		).then(
			function(text){
				if(text){
					return JSON.parse(text);
				}else{
					return {
							"time": 0000000000000,
							"blocks": [
								{
									"id": "nRFbbTLm-1",
									"type": "header",
									"data": {
										"text": "A New Post Header",
										"level": 1
									},
									"tunes": {
										"AlignmentBlockTune": {
											"alignment": "left"
										}
									}
								},
								{
									"id": "N5Q2qvyDuj",
									"type": "paragraph",
									"data": {
										"text": "<i>An introduction text</i>"
									},
									"tunes": {
										"AlignmentBlockTune": {
											"alignment": "center"
										}
									}
								}
							],
							"version": "2.23.2"
						};
				}
			}
		).then(function(json){
			/* console.log(json); */
			editor.render(json);
		});
	
}

const loadImage = (url) => new Promise((resolve, reject) => {
  const img = new Image();
  img.addEventListener('load', () => resolve(img));
  img.addEventListener('error', (err) => reject(err));
  img.crossOrigin = "Anonymous";
  img.src = url;
});

const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});



const saveButton = document.getElementById('saveButton');


saveButton.addEventListener('click', function () {
	
	if(!token){alert("token"); return;}
	
	editor.save().then((editorJson) => {
		new_markdown = $("#md").val();
		/* 
		console.log(editorJson);
		console.log(new_markdown);
		 */
		b64e(new_markdown).then(function(b64file){
			git_put_file(md_path, b64file).then(function(gitResp){
				if(typeof gitResp.content !== 'undefined'){
					b64e(JSON.stringify(editorJson, null, 2)).then(function(b64file){
						git_put_file(js_path, b64file).then(function(gitResp){
							if(typeof gitResp.content !== 'undefined'){
								/*  both success */
								alert("saved");
							}else{
								/*  json error */
								alert("json error");
							}
						});
					});
				}else{
					/*  md error */
					alert("md error");
				}
			});
		});
		
	})
	.catch((error) => {
		console.error('Saving error', error);
		alert('Saving error');
	});
});



const editor = new EditorJS({
	
	holder: 'editorjs',
	logLevel: 'ERROR',
	minHeight:100,
  tools: {
	AlignmentBlockTune: AlignmentBlockTune,
	
    header: {
      class: Header,
      inlineToolbar: true,
      config: {
        placeholder: 'Enter a header',
        levels: [1, 2, 3, 4, 5, 6],
        defaultLevel: 1
      }
    },
	
    paragraph: {
      class: Paragraph,
      inlineToolbar: true,
	  tunes: ['AlignmentBlockTune'],
      config: {
        placeholder: 'Enter a paragraph'
      }
    },
	
    fbcomment: {
      class: FBComment,
      inlineToolbar: true,
	  tunes: ['AlignmentBlockTune'],
      config: {
        placeholder: 'Enter a paragraph'
      }
    },
	
    internal: {
      class: InternalLinks,
      inlineToolbar: false,
      config: {
        placeholder: 'Comma separated list of internal post slugs.'
      }
    },
	
    quote: {
      class: Quote,
      inlineToolbar: true,
      config: {
        quotePlaceholder: 'Enter a quote',
        captionPlaceholder: 'Quote\'s author',
      },
    },
	
	
	delimiter: Delimiter,
	
	
    alert: {
      class: Alert,
      inlineToolbar: true,
	  tunes: ['AlignmentBlockTune'],
      config: {
        defaultType: 'primary',
        messagePlaceholder: 'Enter something',
      },
    },
	
	
	
    list: {
      class: NestedList,
      inlineToolbar: true,
    },
	
    checklist: {
      class: Checklist,
      inlineToolbar: true,
    },
	
    embed: {
      class: Embed,
      inlineToolbar: true,
      config: {
        services: {
          youtube: true,
          facebook: true,
          instagram: true,
          twitter: true,
          vimeo: true,
          imgur: true,
          pinterest: true,
        }
      }
    },
	
	
	
	table: {
	  class: Table,
	  inlineToolbar: true,
	  tunes: ['AlignmentBlockTune'],
	  config: {
		rows: 2,
		cols: 3,
	  },
	},
	
	AnyButton: {
		class: AnyButton,
		inlineToolbar: false,
		config:{
			css:{
				"btn": "button",
				"btnColor": "button-primary",
			}
		}
	},
	
	
    Marker:  Marker,
	
	
    underline: Underline,
	
	image: {
/*
{
    "success" : 1,
    "file": {
        "url" : "https://www.tesla.com/tesla_theme/assets/img/_vehicle_redesign/roadster_and_semi/roadster/hero.jpg",
		"test": "testg"
    }
}
*/
		class: ImageTool,
		config: {
			uploader: {
				uploadByFile(file){
					return loadImage(URL.createObjectURL(file)).then((img) => {
						var canvas = document.createElement("canvas");
						var ctx = canvas.getContext("2d");
						var ratio = img.naturalWidth / img.naturalHeight;
						
						var width = 768;
						var height = width / ratio;

						canvas.width = width;
						canvas.height = height;
						
						ctx.fillStyle = "white";
						ctx.fillRect(0, 0, canvas.width, canvas.height);
						
						ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
						dataURI = canvas.toDataURL('image/jpeg', 1);

						ctx.clearRect(0, 0, canvas.width, canvas.height);
						
						delete canvas;
						
						
						var fileb64 = dataURI.split("base64,")[1];
						
						var name = file.name.split('.').slice(0, -1).join('.');
						name = name.slugify("_") + ".jpg";
						
						if(name == "image.jpg"){
							name = Math.floor(Date.now() / 1000) + "_" + name;
						}
						
						return git_put_file("images/"+category_article+"/" + name, fileb64).then(function(gitResp){
							
							if(typeof gitResp.content !== 'undefined'){
								respJson = {
									"success" : 1,
									"file": {
										"url": gitResp.content.download_url.replace("{{site.gitget}}","{{site.url}}/"),
										"name": name,
										"size": gitResp.content.size,
										"extension": gitResp.content.name.split('.').pop()
									}
								}
							}else{
								respJson = {
									"success" : 0,
									"git_resp": gitResp
								}
							}
							
							return respJson;
						});
						
					}).catch(err => console.log(err));
				},

				uploadByUrl(url){
					return $.ajax({
						url: worker+'/?job=image_url',
						type: 'get',
						data: {
							"url": encodeURI(url)
						},
						headers: {
							'Content-Type': 'application/x-www-form-urlencoded',
							'Accept': 'application/json'
						},
						dataType: 'json'
					}).then((response) => {
					
						return loadImage(response.file).then((img) => {
							var canvas = document.createElement("canvas");
							var ctx = canvas.getContext("2d");
							var ratio = img.naturalWidth / img.naturalHeight;
							
							var width = 768;
							var height = width / ratio;

							canvas.width = width;
							canvas.height = height;
								
							ctx.fillStyle = "white";
							ctx.fillRect(0, 0, canvas.width, canvas.height);
							
							ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
							dataURI = canvas.toDataURL('image/jpeg', 1);

							ctx.clearRect(0, 0, canvas.width, canvas.height);
							
							delete canvas;
							
							var fileb64 = dataURI.split("base64,")[1];
							
							var name = url.split('/').pop();
							name = name.split('.').slice(0, -1).join('.');
							name = name.slugify("_") + ".jpg";
							
							return git_put_file("images/"+category_article+"/" + name, fileb64).then(function(gitResp){
								
								if(typeof gitResp.content !== 'undefined'){
									respJson = {
										"success" : 1,
										"file": {
											"url": gitResp.content.download_url.replace("{{site.gitget}}","{{site.url}}/"),
											"name": name,
											"size": gitResp.content.size,
											"extension": gitResp.content.name.split('.').pop()
										}
									}
								}else{
									respJson = {
										"success" : 0,
										"git_resp": gitResp
									}
								}
								
								return respJson;
							});
							
						}).catch(err => console.log(err));
											
					})
				}
			}
		}
	},
	

	linkTool: {
/*
{
    "success" : 1,
    "link": "https://codex.so",
    "meta": {
		"title" : "CodeX Team",
		"description" : "Club of web-development, design and marketing. We build team learning how to build full-valued projects on the world market.",
		"image" : {
			"url" : "https://codex.so/public/app/img/meta_img.png"
		}
    }
}
*/
		class: LinkTool,
		config: {
			endpoint: worker+'/?job=link',
		}
	},

	

	attaches: {
/*
{
    "success" : 1,
    "file": {
       "url": "url",
       "name": "name",
       "size": 100,
       "extension": "extension",
       "title": "test"
    }
}
*/
		class: AttachesTool,
		config: {
			types: '*',

			uploader: {
				uploadByFile(file){
					return toBase64(file).then(function(b64f){
						var title = file.name;
						var name = file.name.slugify("_");
						
						file = b64f.split("base64,")[1];
						return git_put_file("files/"+category_article+"/" + name, file).then(function(gitResp){
							
							if(typeof gitResp.content !== 'undefined'){
								respJson = {
									"success" : 1,
									"file": {
										"url": gitResp.content.download_url.replace("{{site.gitget}}","{{site.url}}/"),
										"name": gitResp.content.name,
										"size": gitResp.content.size,
										"extension": gitResp.content.name.split('.').pop(),
										"title": title
									}
								}
							}else{
								respJson = {
									"success" : 0,
									"git_resp": gitResp
								}
							}
							console.log(respJson);
							return respJson;
						});
						
					})
					
				}
			}

		}
	}

	
	
  },
  
	

	onReady: function(){
		if(!token){alert("token")}
	
		new DragDrop(editor);
		fetch_article();
	},

	onChange: function(api, event) {
		var changedIndex = api.blocks.getCurrentBlockIndex();
		if(changedIndex < 3){	/*0,1,2*/
			api.blocks.getBlockByIndex(changedIndex).save().then(
				function(new_data){
					console.log(new_data);
					switch(changedIndex){
						case 0:
							if(new_data.tool == "header"){
								console.log("New H1: " , new_data.data);
								
							}else{console.error("The first element should be a heading!")}
						break;
						case 1:
							if(new_data.tool == "paragraph"){
								console.log("New short text: " , new_data.data);
								
							}else{console.error("The second element should be a paragraph!")}
						break;
						case 2:
							if(new_data.tool == "image"){
								console.log("New image: " , new_data.data);
								
							}else{console.error("The third element should be an image!")}
						break;
					}
					
				}
			)
		}
	}
  
});




String.prototype.slugify = function (separator = "-") {
    return this
        .toString()
        .normalize('NFD')                    /* split an accented letter in the base letter and the acent */
        .replace(/[\u0300-\u036f]/g, '')   /*  remove all previously split accents */
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9._ ]/g, '')    /* remove all chars not letters, numbers and spaces (to be replaced) */
        .replace(/\s+/g, separator)
}
