/**
 * 获取url中"?"符后的字串,并返回对象
 * 可以通过 ['id'] 拿到其中一个值,但不推荐这样做
 * 推荐直接 obj.id 这样引用
 * 要使用参数来进行get请求时,使用qs进行格式化
 */
const getPar = () => {
	let url = location.search;
	let theRequest = new Object();
	if (url.indexOf("?") != -1) {
		let str = url.substr(1);
		strs = str.split("&");
		//截取&后循环
		for (let i = 0; i < strs.length; i++) {
			theRequest[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]); //decodeURI()解决中文乱码
		}
	}
	return theRequest;
}
let par = getPar();