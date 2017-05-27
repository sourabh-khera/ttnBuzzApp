module.exports = function(authenticationInfo){
	return function(request , response , next){

		var currentUrl = request._parsedUrl.pathname.substring(1);

		if(currentUrl.indexOf('/') !== -1){
			currentUrl = currentUrl.substring(0 , currentUrl.indexOf('/'));
		}

		var authenticationReq = (authenticationInfo.indexOf(currentUrl) !== -1);

		if(authenticationReq){
			if(request.userSession.isAuthenticated === false){
				response.status(403).send('NotAuthenticated');
			}
			else{
				next();
			}
		}
		else{
			next();
		}

	}
	
}