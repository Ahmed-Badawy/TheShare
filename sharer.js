

  function get_share_link(share_type,shared_data){

		shared_data.prepared_url = encodeURIComponent(shared_data.url);
		shared_data.prepared_img = encodeURIComponent(shared_data.img);
		shared_data.prepared_title = encodeURIComponent(shared_data.title);
		shared_data.prepared_text = encodeURIComponent(shared_data.text);

    var $link;

    if(share_type=='facebook-old') $link= `https://www.facebook.com/sharer/sharer.php?u=${shared_data.prepared_url}&src=${shared_data.prepared_title}`;

    else if(share_type=='facebook') $link= `http://www.facebook.com/sharer.php?s=100&p[url]=${shared_data.prepared_url}&p[images][0]=${shared_data.prepared_img}&p[title]=${shared_data.prepared_title}&p[summary]=${shared_data.prepared_text}`;

		else if(share_type=='facebook-dialog') $link= `https://www.facebook.com/dialog/share?app_id=${shared_data.facebook_app_id}&display=page&href=${shared_data.prepared_url}&redirect_uri=${shared_data.facebook_redirect_uri}`;

    else if(share_type=='twitter') $link=  `https://twitter.com/intent/tweet?url=${shared_data.prepared_url}&text=${shared_data.prepared_title}&via=${shared_data.twitter_via}&hashtags=${shared_data.twitter_hashtags}&related=${shared_data.twitter_related}`;
		// if(share_type=="twitter") $link = "http://twitter.com/home?status="+shared_data.text;

		else if(share_type=='google+') $link= `https://plus.google.com/share?url=${shared_data.prepared_url}&gpsrc=frameless`;

    else if(share_type=="linkedin") $link = "https://www.linkedin.com/shareArticle?mini=true&url="+shared_data.url+"&title="+shared_data.title+"&summary="+shared_data.prepared_text;

    else if(share_type=="pinterest") $link = "https://www.pinterest.com/pin/create/button/?url="+shared_data.prepared_url+"&media="+shared_data.img+"&description="+shared_data.prepared_text;

		else if(share_type=="stumbleupon") $link = "http://www.stumbleupon.com/submit?url="+shared_data.prepared_url+"&title="+shared_data.title;

		else if(share_type=="vk") $link = "https://vk.com/share.php?url="+shared_data.prepared_url+"&title="+shared_data.title+"&description="+shared_data.prepared_text+"&image="+shared_data.img+"&noparse=true";

		else if(share_type=="xing") $link = "https://www.xing-share.com/app/user?op=share;sc_p=xing-share;url="+shared_data.prepared_url;

		else if(share_type=="tumblr") $link = "http://www.tumblr.com/share/link?url="+shared_data.prepared_url+"&title="+shared_data.prepared_title+"&description="+shared_data.prepared_text;
 //`http://tumblr.com/widgets/share/tool?canonicalUrl=${url}&url=${url}&posttype=link&title=${title}&caption=${cap}&content=${cont}`;


		else if(share_type=="reddit-text") $link = "http://www.reddit.com/submit?title="+shared_data.title+"&kind=text&text="+shared_data.text;

		else if(share_type=="reddit-link") $link = "http://www.reddit.com/submit?title="+shared_data.title+"kind=link&url="+shared_data.prepared_url;

		else if(share_type=='buffer') $link = `http://bufferapp.com/add?text=${shared_data.text}&url=${shared_data.prepared_url}`;

		else if(share_type=='digg') $link = `http://digg.com/submit?url=${shared_data.prepared_url}&title=${shared_data.prepared_url}`;

		else if(share_type=='delicious') $link = `https://delicious.com/save?v=5&provider=${shared_data.prepared_url}&noui&jump=close&url=${shared_data.prepared_url}&title=${shared_data.title}`;

		// else if(share_type=="friendfeed") $link = "http://www.friendfeed.com/share?url="+ shared_data.prepared_url + "&title=" + shared_data.prepared_title;

		// else if(share_type=="fark") $link = "http://cgi.fark.com/cgi/fark/farkit.pl?u="+ shared_data.prepared_url + "&h=" + shared_data.prepared_title;

		// else if(share_type=="blinklist") $link = "http://www.blinklist.com/index.php?Action=Blink/Addblink.php&Url="+ shared_data.prepared_url + "&Title=" + shared_data.prepared_title;
		//
		else if(share_type=="plurk") $link = "http://plurk.com/?qualifier=shares&status=" + shared_data.prepared_title + "%20%2D%20" + shared_data.prepared_url;




//---------------------Android----------------------
		else if(share_type=="email") $link = "mailto:?subject="+shared_data.title+"&body="+shared_data.text;

		else if(share_type=="whatsapp") $link = "whatsapp://send?text="+shared_data.text;

		else if(share_type=="call_phone") $link = "tel:"+shared_data.android_phone_num;

		else if(share_type=="internet_call") $link = "callTo:"+shared_data.android_phone_num;

		else if(share_type=="google_maps") $link = "geo:"+shared_data.android_google_maps_acc;
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
