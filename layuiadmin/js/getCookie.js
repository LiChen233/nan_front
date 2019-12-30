function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		 }
		 if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		 }
	 }
	return "";
}
function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	//d.setTime(d.getTime() + (exdays*1000));
	var expires = "expires="+ d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

/** 如果用户没登录,则跳转至主页的方法
<script src="../../layuiadmin/js/getCookie.js"></script>
<script type="text/javascript">
	//从cookie中获取登陆信息
	var userid = getCookie("id");
	if(userid=='' || userid==null){
		//如果用户没登录,则跳转至主页
		$(location).attr('href', '../user/login.html');
	}
</script>

//设置cookie
setCookie("id", null, 0)
 */