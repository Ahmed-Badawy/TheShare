

  function get_share_link(evt,share_type,shared_data){

		shared_data.prepared_url          = encodeURIComponent(shared_data.url);
		shared_data.prepared_img          = encodeURIComponent(shared_data.img);
		shared_data.prepared_title        = encodeURIComponent(shared_data.title);
		shared_data.prepared_text         = encodeURIComponent(shared_data.text);
		shared_data.prepared_facebook_redirect_uri = encodeURIComponent(shared_data.facebook_redirect_uri);

    var $link;

    if(share_type=='facebook-old') $link= `https://www.facebook.com/sharer/sharer.php?u=${shared_data.prepared_url}&src=${shared_data.prepared_title}`;

    else if(share_type=='facebook') $link= `http://www.facebook.com/sharer.php?s=100&p[url]=${shared_data.prepared_url}&p[images][0]=${shared_data.prepared_img}&p[title]=${shared_data.prepared_title}&p[summary]=${shared_data.prepared_text}`;

		else if(share_type=='facebook-dialog') $link= `https://www.facebook.com/dialog/share?app_id=${shared_data.facebook_app_id}&display=page&href=${shared_data.prepared_url}&redirect_uri=${shared_data.prepared_facebook_redirect_uri}`;

    else if(share_type=='twitter') $link=  `https://twitter.com/intent/tweet?url=${shared_data.prepared_url}&text=${shared_data.prepared_title}&via=${shared_data.twitter_via}&hashtags=${shared_data.tags}&related=${shared_data.twitter_related}`;
		// if(share_type=="twitter") $link = "http://twitter.com/home?status="+shared_data.text;

		else if(share_type=='google+') $link= `https://plus.google.com/share?url=${shared_data.prepared_url}&gpsrc=frameless`;

    else if(share_type=="linkedin") $link = `https://www.linkedin.com/shareArticle?mini=true&url=${shared_data.url}&title=${shared_data.title}&summary=${shared_data.prepared_text}`;

    else if(share_type=="pinterest") $link = `https://www.pinterest.com/pin/create/button/?url=${shared_data.prepared_url}&media=${shared_data.img}&description=${shared_data.prepared_text}`;

		else if(share_type=="stumbleupon") $link = `http://www.stumbleupon.com/submit?url=${shared_data.prepared_url}&title=${shared_data.title}`;

		else if(share_type=="vk") $link = `https://vk.com/share.php?url=${shared_data.prepared_url}&title=${shared_data.title}&description=${shared_data.prepared_text}&image=${shared_data.img}&noparse=true`;

		else if(share_type=="xing") $link = `https://www.xing-share.com/app/user?op=share;sc_p=xing-share;url=${shared_data.prepared_url}`;

		else if(share_type=="tumblr") $link = `http://www.tumblr.com/share/link?url=${shared_data.prepared_url}&title=${shared_data.prepared_title}&description=${shared_data.prepared_text}&tags=${shared_data.tags}`;
    //http://tumblr.com/widgets/share/tool?canonicalUrl=${url}&url=${url}&posttype=link&title=${title}&caption=${cap}&content=${cont}`;


		else if(share_type=="reddit-text") $link = `http://www.reddit.com/submit?title=${shared_data.title}&kind=text&text=${shared_data.text}`;

		else if(share_type=="reddit-link") $link = `http://www.reddit.com/submit?title=${shared_data.title}+"kind=link&url=${shared_data.prepared_url}`;

		else if(share_type=='buffer') $link = `http://bufferapp.com/add?text=${shared_data.text}&url=${shared_data.prepared_url}`;

		else if(share_type=='digg') $link = `http://digg.com/submit?url=${shared_data.prepared_url}&title=${shared_data.prepared_url}`;

		else if(share_type=='delicious') $link = `https://delicious.com/save?v=5&provider=${shared_data.delicious_provider}&noui&jump=close&url=${shared_data.prepared_url}&title=${shared_data.title}`;

		// else if(share_type=="friendfeed") $link = "http://www.friendfeed.com/share?url="+ shared_data.prepared_url + "&title=" + shared_data.prepared_title;

		// else if(share_type=="fark") $link = "http://cgi.fark.com/cgi/fark/farkit.pl?u="+ shared_data.prepared_url + "&h=" + shared_data.prepared_title;

		// else if(share_type=="blinklist") $link = "http://www.blinklist.com/index.php?Action=Blink/Addblink.php&Url="+ shared_data.prepared_url + "&Title=" + shared_data.prepared_title;
		//
		else if(share_type=="plurk") $link = `http://plurk.com/?qualifier=shares&status=${shared_data.prepared_title}%20%2D%20${shared_data.prepared_url}`;

    else if(share_type=="hackernews") $link = `https://news.ycombinator.com/submitlink?u=${shared_data.prepared_url}&t=${shared_data.prepaprepared_title}`

    else if(share_type=="instapaper") $link = `https://www.instapaper.com/edit?url=${shared_data.prepared_url}&title=${shared_data.prepared_title}&description=${shared_data.prepared_text}`

    else if(share_type=="pocket") $link = `https://getpocket.com/edit?url=${shared_data.prepared_url}`

    else if(share_type=="flipboard") $link = `https://share.flipboard.com/bookmarklet/popout?v=2&title=${shared_data.prepared_title}&url=${shared_data.prepared_url}&t=1462828167337`

    else if(share_type=="weibo") $link = `http://service.weibo.com/share/share.php?url=${shared_data.prepared_url}&title=${shared_data.prepared_title}&&&&language=zh_cn`;


    else if(share_type=="renren") $link = `http://www.renren.com/SysHome.do?origURL=http%3A%2F%2Fshare.renren.com%2Fshare%2Fbuttonshare%3Flink%3D${shared_data.prepared_url}`

    else if(share_type=="myspace") $link = `https://myspace.com/post?u=${shared_data.prepared_url}&t=${shared_data.prepared_title}&c=${shared_data.prepared_text}`

    else if(share_type=="blogger") $link = `https://www.blogger.com/blog-this.g?u=${shared_data.prepared_url}&n=${shared_data.prepared_title}&t=${shared_data.prepared_text}`

    else if(share_type=="baidu") $link = `http://cang.baidu.com/do/add?it=${shared_data.prepared_title}&iu=${shared_data.prepared_url}`


//---------------------General----------------------
    else if(share_type=="email") $link = `mailto:${shared_data.send_to_email}?subject=${shared_data.title}&body=${shared_data.text}`;

    else if(share_type=="print") { window.print(); return false; }

    else if(share_type=="bookmark") { get_add_to_bookmarks_link(evt,shared_data); return false; }
    else if(share_type=="bookmark-current") { get_add_to_bookmarks_link(evt,false); return false; }


//---------------------Mobile----------------------
		else if(share_type=="whatsapp") $link = `whatsapp://send?text=${shared_data.text}`;

    else if(share_type=="call_phone") $link = `tel:${shared_data.phone_num}`;

    else if(share_type=="internet_call") $link = `callTo:${shared_data.phone_num}`;

    else if(share_type=="viber") $link = `viber://add?number=${shared_data.phone_num}`;

    else if(share_type=="google_maps") $link = `geo:${shared_data.google_maps_acc}`;

    else if(share_type=="line-phone") $link = `line://msg/text/${shared_data.prepared_text}`;
    // else if(share_type=="line-web") $link = `http://line.me/R/msg/text/?${shared_data.prepared_text}`;


    else if(share_type=="telegram") $link = `tg://msg?text=${shared_data.text}`;
//--------------------------------------------------

//---------------------Codes----------------------
    else if(share_type=="qr") $link = `qr.html?url=${shared_data.url}`;
    else if(share_type=="barcode") $link = `barcode.html?url=${shared_data.url}`;
//--------------------------------------------------


      return $link;
  }


    function centeredPopup(url,winName){
			var w = 800, h = 600;
      LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
      TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
      settings = `menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600,top=${TopPosition},left=${LeftPosition}`;
      popupWindow = window.open(url,winName,settings);
    }



    function get_add_to_bookmarks_link(evt,shared_data){
      if(shared_data){
        var bookmarkURL = shared_data.url;
        var bookmarkTitle = shared_data.title;
      }else{
        var bookmarkURL = window.location.href;
        var bookmarkTitle = document.title;
      }

      if ('addToHomescreen' in window && window.addToHomescreen.isCompatible) {
        // Mobile browsers
        addToHomescreen({ autostart: false, startDelay: 0 }).show(true);
      } else if (window.sidebar && window.sidebar.addPanel) {
        // Firefox version < 23
        window.sidebar.addPanel(bookmarkTitle, bookmarkURL, '');
      } else if ((window.sidebar && /Firefox/i.test(navigator.userAgent)) || (window.opera && window.print)) {
        // Firefox version >= 23 and Opera Hotlist
        evt.target.setAttribute('href',bookmarkURL)
        evt.target.setAttribute('title',bookmarkTitle);
        evt.target.setAttribute('rel',"sidebar");
        return true;
      } else if (window.external && ('AddFavorite' in window.external)) {
        // IE Favorite
        window.external.AddFavorite(bookmarkURL, bookmarkTitle);
      } else {
        // Other browsers (mainly WebKit - Chrome/Safari)
        alert('Press ' + (/Mac/i.test(navigator.userAgent) ? 'Cmd' : 'Ctrl') + '+D to bookmark this page.');
      }
      return false;
    }
